
$('#section_video_show').hide();
$('#listo_btn').hide();
$('#upload_buttons').hide();
$('#subiendo_gif').hide();
$('#cancel_button').hide();
$('#finished_gif').hide();
$('#listo_button').hide();
$('#img_div').hide();
mostrarGifs();


function getStreamAndRecord() {
    $('#section_create_gif').hide();
    $('#section_video_show').show();
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    })
        .then(function (stream) {
            var player = document.getElementById('player');
            player.srcObject = stream;
            player.play();
        });
};



async function grabarGif() {
    $('#start_btn').hide();
    $('#listo_btn').show();
    const h2 = 'Capturando Tu Guifo';
    const element = document.getElementById('h2_topbar');
    element.innerHTML = h2;
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
    recorder = RecordRTC(stream, {
        type: 'gif',
        frameRate: 1,
        quality: 10,
        width: 600,
        height: 480,
        hidden: 240,
        onGifRecordingStarted: function () {
            console.log('started')
        },
    });
    recorder.startRecording();
    console.log('grabando');
}


async function finalizarGif() {
    const h2 = 'Subiendo Guifo';
    const element = document.getElementById('h2_topbar');
    element.innerHTML = h2;
    $('#listo_btn').hide();
    $('#video_grabado').hide();
    $('#subiendo_gif').show();
    $('#cancel_button').show();
    $('#upload_buttons').hide();  
    console.log('dejar de grabar');
    let blob = recorder.getBlob();
    let formData = new FormData();
    formData.append('file', blob);
    console.log(formData.get('file'));
    let gif_id = await uploadToServer(formData)
    console.log(gif_id)
    await getGif(gif_id);
    setTimeout(lastScreen(gif_id), 2000);
}

function lastScreen(gif_id){
    const h2 = 'Guifo Subido Con Éxito';
    const element = document.getElementById('h2_topbar');
    element.innerHTML = h2;    
    $('#subiendo_gif').hide();
    $('#cancel_button').hide();
    $('#finished_gif').show();
    $('#listo_button').show();
    const gif = localStorage.getItem(gif_id)
    const url = JSON.parse(gif).data.images.fixed_width.url
    console.log(url)
    let image = document.getElementById('video_grabado_img');  
    image.src = url;

}

async function showVideo(){
    const h2 = 'Vista Previa';
    const element = document.getElementById('h2_topbar');
    element.innerHTML = h2;
    $('#player').hide();
    $('#img_div').show();  
    $('#listo_btn').hide();
    $('#upload_buttons').show();    
    let formData = new FormData();
    recorder.stopRecording();
    console.log('dejo de grabar');
    let blob = await recorder.getBlob();
    formData.append('file', blob, 'myGif.gif');
    console.log(blob);
    let image = document.getElementById('video_grabado');
    image.src = URL.createObjectURL(blob);
    return
}


async function uploadToServer(formData) {
    let gif_id;
    const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
    var miInit = {
        method: 'POST',
        body: formData,
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };
    const url = 'http://upload.giphy.com/v1/gifs';
    await fetch(url + '?api_key=' + api_key, miInit)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (miBlob) {
            console.log(miBlob);            
            gif_id = miBlob.data.id;
        });

    return gif_id
}

async function getGif(id) {
   
    const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
    const path = `https://api.giphy.com/v1/gifs/${id}?api_key=${api_key}`;
    await fetch(path).then(function (res) {
        return res.json();
    }).then(function (json) {
      
        localStorage.setItem(json.data.id, JSON.stringify(json));       

    }).catch(function (err) {
        console.log(err.message);
    });

    mostrarGifs()
}

function mostrarGifs(){
    const resultsEl = document.getElementById('div-results_myGif');
    let resultsHTML = '';   
    for(let i = 0; i < localStorage.length; i++) {              
        var key = localStorage.key(i)
        const gif = localStorage.getItem(key)
        const url = JSON.parse(gif).data.images.fixed_width.url        

        resultsHTML += `<img class='item-giphy-search' src= '${url}' width='288px' height='298px'alt='gif_${i}'>`;
    }
    resultsEl.innerHTML = resultsHTML
}

function repetirCaptura(){
    $('#section_video_show').hide();
    $('#section_create_gif').show();
    window.location.reload(true)
}









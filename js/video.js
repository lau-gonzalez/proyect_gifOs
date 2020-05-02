var player = document.getElementById('player');
$('#section_video_show').hide();

function getStreamAndRecord() {
    $('#section_create_gif').hide();
    $('#section_video_show').show();   

    navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {      
        height: { max: 720 }
    }
    })
    .then(function(stream) {
    player.srcObject = stream;
    player.play()
})
};

const recorder = RecordRTC(stream, {
    type: 'gif',
    frameRate: 1,
    quality: 10,
    width: 360,
    hidden: 240,    
    onGifRecordingStarted: function() {
    console.log('started')
    },
});


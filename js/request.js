

//FUNCION PETICION API GIPHY CON KEYWORD

$('#top_input_section_search').hide();

const searchForm = document.getElementById('input_button_search');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('div-results_search');


function results(text) {
    const q = text;
    search(q);
    scroll();
    return false;
};


searchForm.addEventListener('submit',
    function (e) {
        e.preventDefault();
        const q = searchInput.value;
        search(q);
        scroll();
        return false;
    });

function search(q) {
    const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
    const path = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=16`;
    fetch(path).then(function (res) {
        return res.json();
    }).then(function (json) {
        console.log(json)

        let resultsHTML = '';
        json.data.forEach(function (obj) {

            const url = obj.images.fixed_width.url;
            const alt = obj.title;
            resultsHTML += `<img class='item-giphy-search' src= '${url}' width='288px' height='298px'alt='${alt}'>`;
                
        
        })
        resultsEl.innerHTML = resultsHTML;
        document.getElementById("top_input_section_search").value = `${q}(resultados)`;
        
        $('#section-results-suggested').hide();
        $('#section-results-trends').hide();
        $('#top_input_section_search').show();


    }).catch(function (err) {
        console.log(err.message);
    });
};

function scroll() {
    var elmnt = document.getElementById('top_input_section_search');
    elmnt.scrollIntoView(true);
};
//FIN FUNCION PETICION API GIPHY CON KEYWORD

//--------------------------------------------------------------------------------------------------------//

//FUNCION PETICION API GIPHY TRENDS

const trendsEl = document.getElementById('div-results_trends');

$(document).ready(function trends() {

    const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
    const path = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=16&rating=g`;
    fetch(path).then(function (res) {
        return res.json();
    }).then(function (json) {
        let resultsHTML = '';
        json.data.forEach(function (obj) {
            console.log(obj.title)
            const url = obj.images.fixed_width.url;
            var alt = obj.title;
            alt = alt.slice(-6);
            resultsHTML += `
            <div>
                <img class='item-giphy-search' id='item-giphy-search' src= '${url}' width='288px' height='298px'alt='${alt}'>
                <div class='hover-gif'>#${obj.title}</div>
            </div>    `;            
            
        })         
        trendsEl.innerHTML = resultsHTML;      
    }).catch(function (err) {
        console.log(err.message);
    });
});
//FIN FUNCION PETICION API GIPHY TRENDS

//--------------------------------------------------------------------------------------------------------//

//FUNCION PETICION API GIPHY AUTOCOMPLETE

const autoCompleteEl = document.getElementById('results_suggested');

$('.search-input').keyup(function () {
    const q = $('.search-input').val();
    const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
    const path = `https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${q}&limit=3`;


    if (q.length === 0) {
        console.log(q);
        $('#list_suggested').hide();
        $('#section-results-suggested').show();
        return false;
    } else {

        fetch(path).then(function (res) {
            return res.json();
        }).then(function (json) {
            const tag_0 = json.data[0].name;
            const tag_1 = json.data[1].name;
            const tag_2 = json.data[2].name;

            let autoHTML = '';

            autoHTML += `
                <ul id='list_suggested'>
                    <li><a href="" id="tag_0" name='${tag_0}' onclick='return results(this.name)'>${tag_0}</a></li>
                    <li><a href="" id="tag_1" name='${tag_1}' onclick='return results(this.name)'>${tag_1}</a></li>
                    <li><a href="" id="tag_2" name='${tag_2}' onclick='return results(this.name)'>${tag_2}</a></li>
                </ul>
                <div class="div_empty"></div>
                `;

            autoCompleteEl.innerHTML = autoHTML;
            return false;

        }).catch(function (err) {
            console.log(err.message);
        });
    }
});
//FIN FUNCION PETICION API GIPHY AUTOCOMPLETE 

//--------------------------------------------------------------------------------------------------------//

//FUNCION PETICION API GIPHY SUGERIDOS
$(document).ready(
    function suggested() {

        const resultEl = document.getElementById('div-results_suggested');

        const q = 'rock';
        const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
        const path = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=4`;
        fetch(path).then(function (res) {
            return res.json();
        }).then(function (json) {


            let trendsHTML = '';
            json.data.forEach(function (obj) {

                const url = obj.images.fixed_width.url;
                const alt = obj.title;


                trendsHTML += `
                <div class='div_item'>
                    <div class="top_item">
                        <h2>#${alt}</h2>
                        <img src='./img/close.svg' alt='close' class='close_svg'>
                    </div>
                    <img class='item-giphy-trends' src= '${url}' width='280px' height='280px'alt='${alt}'>
                    <button id='see_more_button' onclick='seeMore()'>Ver más..</button>
                </div>
                `;
            })
            resultEl.innerHTML = trendsHTML;


        }).catch(function (err) {
            console.log(err.message);
        });
    }

);


//FIN FUNCION RESULTADOS SUGERIDOS

//--------------------------------------------------------------------------------------------------------//

//FUNCION BOTONES VER MAS

function seeMore() {
    const q = 'rock';
    search(q);
}

//FIN FUNCION VER MAS

//--------------------------------------------------------------------------------------------------------//

//FUNCION MOSTRAR GIFS

$('#section-results-myGif').hide();

function mostrarGifs() {
    const resultsEl = document.getElementById('div-results_myGif');
    let resultsHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i)
        const gif = localStorage.getItem(key)
        const url = JSON.parse(gif).data.images.fixed_width.url

        resultsHTML += `<img class='item-giphy-search' style='margin-bottom: 10px' src= '${url}' width='288px' height='298px'alt='gif_${i}'>`;
    }
    resultsEl.innerHTML = resultsHTML
    $('#section-results-suggested').hide();
    $('#section-results-trends').hide();
    $('#section-results-myGif').show();
}

//FIN FUNCION MOSTRAR GIFS

//--------------------------------------------------------------------------------------------------------//




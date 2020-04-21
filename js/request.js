//FUNCION PETICION API GIPHY CON KEYWORD

    const searchForm = document.getElementById('input_button_search');
    const searchInput = document.getElementById('search-input');
    const resultsEl = document.getElementById('div-results_trends');   


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

    function search (q) {           
        const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
        const path = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}&limit=16`;
        fetch(path).then(function(res) {
            return res.json();
        }).then(function (json) {
            
                            
            let resultsHTML = '';
            json.data.forEach(function (obj){
                
                const url = obj.images.fixed_width.url;
                const alt = obj.title;
                resultsHTML += `<img class='item-giphy-search' src= '${url}' width='288px' height='298px'alt='${alt}'>`;
            })
            resultsEl.innerHTML = resultsHTML;
            document.getElementById("top_input_section_tendencias").value=`${q}(resultados)`;
            $('#section-results-suggested').hide();

        }).catch(function(err) {
            console.log(err.message);
        });
    };

    function scroll() {
        var elmnt = document.getElementById('div-results_trends');
        elmnt.scrollIntoView(true);
    };
//FIN FUNCION PETICION API GIPHY CON KEYWORD



//FUNCION PETICION API GIPHY TRENDS
    
    const trendsEl = document.getElementById('div-results_suggested');
           
    $(document).ready(function trends () { 
                  
        const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
        const path = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=4&rating=g`;
        fetch(path).then(function(res) {
            return res.json();
        }).then(function (json) {
                                                         
            let trendsHTML = '';
            json.data.forEach(function (obj){
                
                const url = obj.images.fixed_width.url;
                const alt = obj.user.display_name;
                trendsHTML += `
                <div class='div_item'>
                    <div class="top_item">
                        <h2>#${alt}</h2>
                        <img src='./img/close.svg' alt='close' class='close_svg'>
                    </div>
                    <img class='item-giphy-trends' src= '${url}' width='280px' height='280px'alt='${alt}'>
                    <button id='see_more_button'>Ver más..</button>
                </div>
                `;
            })
            trendsEl.innerHTML = trendsHTML;
        }).catch(function(err) {
            console.log(err.message);
        });
    });
//FIN FUNCION PETICION API GIPHY TRENDS


//FUNCION PETICION API GIPHY TRENDS
    
    const autoCompleteEl = document.getElementById('results_suggested');
    
           
    $('.search-input').keyup(function() {  
        const q = $('.search-input').val();            
        const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
        const path = `https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${q}&limit=3`;
        

        if (q.length === 0) {
            console.log(q);
            $('#list_suggested').hide();
            $('#section-results-suggested').show();
            return false;            
        } else {         

            fetch(path).then(function(res) {
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

            }).catch(function(err) {
                console.log(err.message);
            });
        }
    });
//FIN FUNCION PETICION API GIPHY TRENDS      

 
   

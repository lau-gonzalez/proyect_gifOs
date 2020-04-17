$(document).ready(function(){


    //FUNCION PETICION API GIPHY CON KEYWORD

        const searchForm = document.getElementById('input_button_search');
        const searchInput = document.getElementById('search-input');
        const resultsEl = document.getElementById('div-results_trends');
        const tag0Form = document.getElementById('tag_0');
        const tag1Form = document.getElementById('tag_1');
        const tag2Form = document.getElementById('tag_2');

        $('a').click(function(e) {
            e.preventDefault();
            const q = searchInput.value;
            search(q);
            console.log('entre a la funcion')
        });     
        


        searchForm.addEventListener('submit',function (e) {
                e.preventDefault();
                const q = searchInput.value;
                search(q);
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
            }).catch(function(err) {
                console.log(err.message);
            });

        };

        //FIN FUNCION PETICION API GIPHY CON KEYWORD


        //FUNCION PARA HABILITAR/DESHABILITAR BOTON 'BUSCAR'

        $('#btn').attr('disabled',true);                
        

        $('.search-input').keyup(function() {
            const value = $('.search-input').val();
            const n = value.length;           
            
            if((n) > 0) {
               
                $('#btn').attr('disabled',false);
                $('#btn').addClass('enable');

            }else {
                $('#btn').attr('disabled',true);
                $('#btn').removeClass('enable');                
            }


        });  
        
        //FIN FUNCION PARA HABILITAR/DESHABILITAR BOTON 'BUSCAR'

        //FUNCION PETICION API GIPHY TRENDS

        
        const trendsEl = document.getElementById('div-results_suggested');

               

        $(document).ready(function trends () {           
            const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
            const path = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=4`;

            fetch(path).then(function(res) {
                return res.json();
            }).then(function (json) {
                                               
                let trendsHTML = '';

                json.data.forEach(function (obj){
                    
                    const url = obj.images.fixed_width.url;
                    const alt = obj.title;
                    trendsHTML += `
                    <div class='div_item'>
                        <div class="top_item">
                            <h2>#Tags </h2>
                            <img src='./img/close.svg' alt='close' class='close_svg'>
                        </div>
                        <img class='item-giphy-trends' src= '${url}' width='280px' height='280px'alt='${alt}'>
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
            const path = `https://api.giphy.com/v1/gifs/search/tags?api_key=${api_key}&q=${q}`;

            fetch(path).then(function(res) {
                return res.json();
            }).then(function (json) {
                console.log(json.data)
                const tag_0 = json.data[0].name;
                const tag_1 = json.data[1].name
                const tag_2 = json.data[2].name
                
                                                
                let autoHTML = '';    
                
                               
                autoHTML += `
                <ul>
                    <li><a href="" id="tag_0">${tag_0}</a></li>
                    <li><a href="" id="tag_1">${tag_1}</a></li>
                    <li><a href="" id="tag_2">${tag_2}</a></li>
                </ul>
                <div class="div_empty"></div>
                 `;
            
                autoCompleteEl.innerHTML = autoHTML;
            }).catch(function(err) {
                console.log(err.message);
            });

        });

        //FIN FUNCION PETICION API GIPHY TRENDS
      
       

 
   
});
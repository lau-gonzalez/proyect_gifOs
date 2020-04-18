//FUNCION PETICION API GIPHY CON KEYWORD
    const searchForm = document.getElementById('input_button_search');
    const searchInput = document.getElementById('search-input');
    const resultsEl = document.getElementById('div-results_trends');
    const tag0Form = document.getElementById('tag_0');
    const tag1Form = document.getElementById('tag_1');
    const tag2Form = document.getElementById('tag_2');
    
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
        const path = `https://api.giphy.com/v1/gifs/trending?api_key=${api_key}&limit=4&rating=g`;
        fetch(path).then(function(res) {
            return res.json();
        }).then(function (json) {
            console.log(json)                                               
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

//FUNCION CAMBIAR THEME
    function changeThemeNight(){
        let root = document.documentElement;

        //TOP_BAR
        root.style.setProperty('--background-body', '#110038');
        root.style.setProperty('--color-gradient-bar', 'linear-gradient(270deg, #EE3EFE 0%, #2E32FB 100%)');
        //NAV-BAR
        root.style.setProperty('--color-background-button', '#EE3EFE');
        root.style.setProperty('--box-shadow-button', 'inset -1px -1px 0 0 #A72CB3, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button1-menu', '#CCCCCC');
        root.style.setProperty('--color-border-button1-menu', '1px solid #808080');
        root.style.setProperty('--box-shadow-button1-menu', 'inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button2-menu', '#2E32FB');
        root.style.setProperty('--color-border-button2-menu', '1px solid rgba(51,53,143,0.20)');
        root.style.setProperty('--box-shadow-button2-menu', 'inset -1px -1px 0 0 #E6DCE4, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-boxmenu', '#B4B4B4');
        root.style.setProperty('--box-shadow-boxmenu', 'inset -2px -2px 0 0 #8F8F8F, inset 2px 2px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button-hover', '#CE36DB');
        root.style.setProperty('--box-shadow-button-hover', 'inset -1px -1px 0 0 #A72CB3, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--border-hover-dashed', '1px dashed #FFFFFF');
        root.style.setProperty('--color-font-button', '#FFFFFF');
        //SEARCH-BOX
        root.style.setProperty('--color-background-search-div', '#B4B4B4');
        root.style.setProperty('--box-shadow-search-div', 'inset -2px -2px 0 0 #8F8F8F, inset 2px 2px 0 0 #FFFFFF');
        root.style.setProperty('--color-border-top-input-section', '1px solid #2E32FB');
        root.style.setProperty('--box-shadow-top-input-section', 'inset -2px -2px 0 0 #E6DCE4, inset 2px 2px 0 0 #110038');
        //GIF-SECTION
        root.style.setProperty('--color-background-button-gif', '#2E32FB');
        root.style.setProperty('--box-shadow-button-gif', 'inset -2px -2px 0 0 #2124B3, inset 2px 2px 0 0 #FFFFFF');
        
        return false;
    }

    function changeThemeDay(){


        let root = document.documentElement;

        //TOP_BAR
        root.style.setProperty('--background-body','#FFFFFF' );
        root.style.setProperty('--color-gradient-bar','linear-gradient(90deg, rgba(65,128,246,1) 0%, rgba(247,201,243,1) 100%');
        //NAV-BAR
        root.style.setProperty('--color-background-button','#F7C9F3');
        root.style.setProperty('--box-shadow-button','inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button1-menu','#FFF4FD');
        root.style.setProperty('--color-border-button1-menu','1px solid #CCA6C9');
        root.style.setProperty('--box-shadow-button1-menu','inset -1px -1px 0 0 #E6DCE4, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button2-menu','#F0F0F0');
        root.style.setProperty('--color-border-button2-menu','1px solid #808080');
        root.style.setProperty('--box-shadow-button2-menu','inset -1px -1px 0 0 #B4B4B4, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-boxmenu','#E6E6E6');
        root.style.setProperty('--box-shadow-boxmenu','inset -2px -2px 0 0 #B4B4B4, inset 2px 2px 0 0 #FFFFFF');
        root.style.setProperty('--color-background-button-hover','#997D97');
        root.style.setProperty('--box-shadow-button-hover','inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF');
        root.style.setProperty('--border-hover-dashed','1px dashed #110038');
        root.style.setProperty('--color-font-button', '#110038');
        //SEARCH-BOX
        root.style.setProperty('--color-background-search-div','#E6E6E6' );
        root.style.setProperty('--box-shadow-search-div','inset -2px -2px 0 0 #B4B4B4, inset 2px 2px 0 0 #FFFFFF');
        root.style.setProperty('--color-border-top-input-section','1px solid #E6BBE2');
        root.style.setProperty('--box-shadow-top-input-section','inset -2px -2px 0 0 #E6DCE4, inset 2px 2px 0 0 #80687D'); 
        //GIF-SECTION
        root.style.setProperty('--color-background-button-gif','#4180F6' );
        root.style.setProperty('--box-shadow-button-gif','inset -1px -1px 0 0 #284F99, inset 1px 1px 0 0 #FFFFFF');

        return false;
    }


      
       

 
   

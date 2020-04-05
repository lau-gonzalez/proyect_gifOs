$(document).ready(function(){

        const searchForm = document.getElementById('input_button_search');
        const searchInput = document.getElementById('search-input');
        const resultsEl = document.getElementById('results');

        searchForm.addEventListener('submit',function (e) {

                e.preventDefault();
                const q = searchInput.value;
                search(q);

        });        

        function search (q) {

            
            const api_key = 'snee2JzN42l1qxLK6nyLRIHLNMRaDLDd';
            const path = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${q}`;

            fetch(path).then(function(res) {
                return res.json();
            }).then(function (json) {
                console.log(json.data[0].images.fixed_width.url)
                
                let resultsHTML = '';

                json.data.forEach(function (obj){
                    console.log(obj);
                    const url = obj.images.fixed_width.url;
                    const width = obj.images.fixed_width.width;
                    const heigth = obj.images.fixed_width.height;
                    const alt = obj.title;
                    resultsHTML += `<img src= '${url}' width='${width}' height='${heigth}'alt='${alt}'>`;
                })
                resultsEl.innerHTML = resultsHTML;
            }).catch(function(err) {
                console.log(err.message);
            });

        };

        $('#btn').attr('disabled',true);
                
        

        $('.search-input').keyup(function() {
            const value = $('.search-input').val();
            const n = value.lenght;
            
            console.log(value);
            console.log(n);

            if((n) > 1) 
                console.log('entro al if');
                //$('#btn').attr('disabled',false);
             else 
                //$('#btn').attr('disabled',true);
                console.log('entro al else')
            


        });           
      
       

 
   
});
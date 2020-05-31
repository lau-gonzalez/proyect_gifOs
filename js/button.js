//FUNCION PARA HABILITAR/DESHABILITAR BOTON 'BUSCAR'

$('#btn').attr('disabled',true);
let root = document.documentElement;                
    
$('.search-input').keyup(function(theme_dark) {
    console.log(theme_dark)
    const value = $('.search-input').val();
    const n = value.length;           
    
    if((n) > 0) {
       
        $('#btn').attr('disabled',false);
        $('#btn').addClass('enable');
        root.style.setProperty('--color-lupa', '#110038');
    }else {
        $('#btn').attr('disabled',true);
        $('#btn').removeClass('enable');      
        root.style.setProperty('--color-lupa', '#B4B4B4');                  
    }
});  

//FIN FUNCION PARA HABILITAR/DESHABILITAR BOTON 'BUSCAR'

//------------------------------------------------------------------------------------------------//

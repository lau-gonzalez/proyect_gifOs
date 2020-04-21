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
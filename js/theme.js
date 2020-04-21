//FUNCION CAMBIAR THEME
function changeThemeNight(){
    let root = document.documentElement;

    document.getElementById("logo").src="./img/gifOF_logo_dark.png";

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

    document.getElementById("logo").src="./img/gifOF_logo.png";

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
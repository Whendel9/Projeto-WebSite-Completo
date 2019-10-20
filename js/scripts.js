$(function(){
    $('nav.mobile').click(function(){
        var listaMenu = $('nav.mobile ul');
        if(listaMenu.is(':hidden') == true){
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas far-bars');
            icone.addClass('fas fa-times');
            listaMenu.slideToggle();
        }
        else{
            var icone = $('.botao-menu-mobile').find('i');
            icone.removeClass('fas fa-times');
            icone.addClass('fas far-bars');
            listaMenu.slideToggle();
        }
    })
})
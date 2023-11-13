$(function () {
   
    $('.menu__button').on('click',function(){
        $('.menu__list').toggleClass('menu__list_hide'); 
        $('.menu__button ').toggleClass('menu_active'); 
    });

});  
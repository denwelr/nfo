
$(document).ready(function () {
    let burger = $('.header__burger');
    let headerNav = $('.header__nav');

    $(".header__burger").click(function(){
        $('.header__burger, .header__nav, body').toggleClass('burger_focused');
    });

    $('.answer').click(function () {
        $(this).toggleClass('answer_opened');
        $(this).children('.answer__desc').slideToggle();
    });

    $(document).mouseup(function(e){

        if(!headerNav.is(e.target)) {
            $('.header__burger, .header__nav, body').removeClass('burger_focused');
        }
    });
});

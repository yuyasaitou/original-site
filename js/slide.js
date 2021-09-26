$(window).scroll(function(){
    $('.fadeUpTrigger').each(function(){
        var elemPos = $(this).offset().top-50;
        var scroll =$(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeup');
        }else{
        $(this).removeClass('fadeup');
    }  });
});
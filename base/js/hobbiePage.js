$("#toTopBtn").click(function(){
    $(window).scrollTop(0);
});

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $("#toTopBtn").fadeIn();
    }else{
        $("#toTopBtn").fadeOut();
    }
});

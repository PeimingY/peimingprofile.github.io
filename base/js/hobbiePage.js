
$("#toTopBtn").hide();

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        $("#toTopBtn").fadeIn();
    }else{
        $("#toTopBtn").fadeOut();
    }
});

$("#toTopBtn").click(function(){
    $(window).scrollTop(0);
});
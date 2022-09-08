/// 메인 JS - main.js ///

$(function () { /////// jQB ///////////////////////
    console.log("메인js");



    ////////// active //////////////
    $(".click_btn").on('touchstart', function () { 
        $(this).addClass("active");
        $(".click_btn .button-text").addClass("active"); 

    });

    $(".click_btn").on('touchend', function () {
        $(this).removeClass('active');
        $(".click_btn .button-text").removeClass("active"); 
    });



    $(".main.click_btn").on('touchstart', function () {
        $(this).addClass("active");
        $(".main.click_btn .button-text").addClass("active"); 
    });

    $(".main.click_btn").on('touchend', function () {
        $(this).removeClass('active');
        $(".main.click_btn .button-text").removeClass("active"); 
    });



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
/// 메인 JS - main.js ///

$(function () { /////// jQB ///////////////////////
    console.log("메인js");



    ////////// active //////////////
    $(".click_btn").on('touchstart', function (e) { 
        $(this).addClass("active"); 
        e.preventDefault();
    });

    $(".click_btn").on('touchend', function (e) {
        $(this).removeClass('active');
        e.preventDefault();
    });



    $(".main.click_btn").on('touchstart', function (e) {
        $(this).addClass("active");
        e.preventDefault();
    });

    $(".main.click_btn").on('touchend', function (e) {
        $(this).removeClass('active');
        e.preventDefault();
    });



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
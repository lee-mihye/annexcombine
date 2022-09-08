/// 메인 JS - main.js ///

$(function () { /////// jQB ///////////////////////
    console.log("메인js");



    ////////// active //////////////
    $(".click_btn").on('touchstart', function (event) {
        $(".click_btn .button-text").addClass("active");
    });

    $(".click_btn").on('touchend', function (event) {
        $(".click_btn .button-text").removeClass('active');
    });

    $(".main.click_btn").on('touchstart', function (event) {
        $(".main.click_btn .button-text").addClass("active");
    });

    $(".main.click_btn").on('touchend', function (event) {
        $(".main.click_btn .button-text").removeClass('active');
    });



}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
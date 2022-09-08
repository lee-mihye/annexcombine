/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function () { /////// jQB ///////////////////////
    console.log("메인js");



    ////////// active //////////////
    $('.click_btn,.main.click_btn').live('touchstart', function (event) {
        $(".click_btn .button-text, .main.click_btn .button-text").addClass("active");
    });

    $('.click_btn,.main.click_btn').live('touchend', function (event) {
        $(".click_btn .button-text, .main.click_btn .button-text").removeClass('active');
    });

}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function () { /////// jQB ///////////////////////
    console.log("메인js");



    ////////// click //////////////

    $(".click_btn").click(function () {
        $(this).addClass("active");
        $(".click_btn .button-text").addClass("active");
        return;
    })
    $(".main.click_btn").click(function () {
        $(this).addClass("active");
        $(".main.click_btn .button-text").addClass("active");
        return;
    })


}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
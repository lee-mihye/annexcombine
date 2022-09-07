$(document).ready(function () {
    console.log("로딩");
    AOS.init();

   

   // 햄버거 메뉴 클릭하면 GNB나오게하기
   $(".all_menu").click(function (e) {

    if ($(this).hasClass("on")) {
        $(this).removeClass("on");
        $("#header").removeClass("open");
        $(".bg-shadow").css("display", "none");
    } else {
        $(this).addClass("on");
        $("#header").addClass("open");
        $(".bg-shadow").css("display", "block");
    }
    e.preventDefault();
});

   

}); //////////////제이쿼리 블럭///////////////////////
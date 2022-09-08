/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function () { /////// jQB ///////////////////////
    console.log("링크js");

    $(".header_area .gnb a, .gnb_ham a").click(function (e) {
        e.preventDefault();

        // 해더 GNB a태그의 텍스트 읽어오기
        var txt = $(this).text();

        console.log("메뉴:" + txt);

        var pg;

        switch (txt) {
            case "회사소개":
                pg = "introduce.html";
                break;
            case "물류센터":
                pg = "center.html";
                break;
            case "서비스안내":
                pg = "service.html";
                break;
            case "견적문의":
                pg = "estimate.html";
                break;
        } ////// switch case ////////

        // 페이지이동
        location.href = pg;

    }); //////// click //////////////

    // 모바일 햄버거 메뉴 견적문의 바로가기 버튼 이동
    $(".gnb_ham > .gnb2 > a").click(function (e) {
        e.preventDefault();
        location.href = "estimate.html"
    });



    // index.html 섹션별로 서브페이지 이동
    $(".mainban_txt_area button").click(function () {
        location.href = "estimate.html"
    });
    $("#introduce_section button").click(function () {
        location.href = "introduce.html"
    });
    $("#service_section button").click(function () {
        location.href = "service.html"
    });
    $("#main_estimate_section button").click(function () {
        location.href = "estimate.html"
    });


    // center.html 지도버튼 누르면 카카오지도 페이지로 이동
    $(".center_wrap button").click(function () {
        window.open("http://kko.to/kvAIO7OZf");
    });



    // estimate.html 구글설문지로 페이지 이동
    $(".estimate_wrap .estimate_box").click(function () {
        window.open("https://docs.google.com/forms/d/e/1FAIpQLSfqKdtT-Z3eGN7dADLh8Ix-r0puFESAIGITYALW4YvMSY6V1g/viewform?usp=sf_link");
    });



    // 로고이미지 클릭하면 index.html로 이동
    $(".logo a").click(function (e) {
        e.preventDefault();
        location.href = "index.html";
    }); ////////// click //////////////




}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////
$(document).ready(function(){

    // 현재 페이지 파일명과 메뉴 비교하여 활성화 메뉴 표기
    // 현재 페이지의 파일명 가져오기 (확장자 포함)
    var pathname = window.location.pathname;
    var currentFileName = pathname.split('/').pop();  // 경로에서 마부분이 파일
    var titleLinkName = $(".mainTitle").attr('href');      


    // 상단 메뉴의 각 항목을 검사
    $(".serviceManage ul li a").each(function() {
        var link = $(this);  // 현재 메뉴 항목
        var linkFileName = link.attr('href');  // 메뉴 항목의 href 값

        // href와 현재 파일명이 일치하면 해당 메뉴의 효과 적용
        if (linkFileName === currentFileName) {
            link.parent().addClass('active');
        }

        if (linkFileName === titleLinkName) {
            link.parent().addClass('active');
        }
    });

    $(".historyManage ul li a").each(function() {
        var link = $(this);  // 현재 메뉴 항목
        var linkFileName = link.attr('href');  // 메뉴 항목의 href 값

        // href와 현재 파일명이 일치하면 해당 메뉴의 효과 적용
        if (linkFileName === currentFileName) {
            link.parent().addClass('active');
        }

        if (linkFileName === titleLinkName) {
            link.parent().addClass('active');
        }
    });

    $(".home h3 a").each(function() {
        var link = $(this);
        var linkFileName = link.attr('href');

        if (linkFileName === currentFileName) {
            link.parent().addClass('active');
        }

        if (linkFileName === titleLinkName) {
            link.parent().addClass('active');
        }
    });


    // 탭메뉴 기능
    // 첫화면(버튼 파일 선택세팅)
    $(".tabDiv").eq(0).show();
    $(".tabDiv").eq(1).hide();
    
    // 탭메뉴버튼 클릭시 기능
    $(".tabMenu>div").click(function(){
        $(this).addClass("on").siblings().removeClass("on");

        var order = $(this).index();

        if(order == 0){
            $(".tabDiv").eq(order).show();
            $(".tabDiv").eq(order + 1).hide();
        }

        else{
            $(".tabDiv").eq(order).show();
            $(".tabDiv").eq(order - 1).hide();
        }        

    });

    $(".adminAccountBtn button").click(function(){
        location.replace("../index.html");
    });
});
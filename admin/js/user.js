$(document).ready(function () {
  const data = [
    { no: 1, id: "honggd", name: "홍길동", phone: "010-1234-1234", rights: "사용자", create: "2023-12-17 17:14:56", active: "활성화", approval: "승인" },
    { no: 2, id: "yoonjoon", name: "권윤준", phone: "010-1234-1234", rights: "사용자", create: "2023-12-27 08:57:12", active: "활성화", approval: "승인" },
    { no: 3, id: "lskwon", name: "이성권", phone: "010-1234-1234", rights: "사용자", create: "2024-01-06 13:37:20", active: "활성화", approval: "승인" },
    { no: 4, id: "parkyoonhyeok", name: "박윤혁", phone: "010-1234-1234", rights: "관리자", create: "2024-01-19 12:12:08", active: "활성화", approval: "승인" },
    { no: 5, id: "kimjinjoo", name: "김진주", phone: "010-1234-1234", rights: "사용자", create: "2024-01-31 16:21:27", active: "활성화", approval: "승인" },
    { no: 6, id: "changsy99", name: "윤창석", phone: "010-1234-1234", rights: "사용자", create: "2024-02-22 21:07:55", active: "활성화", approval: "승인" },
    { no: 7, id: "soooomiin97", name: "최수민", phone: "010-1234-1234", rights: "사용자", create: "2024-02-29 20:43:37", active: "활성화", approval: "미승인" },
    { no: 8, id: "kdjin930507", name: "강대진", phone: "010-1234-1234", rights: "사용자", create: "2024-03-02 15:20:33", active: "활성화", approval: "승인" },
    { no: 9, id: "aramdans12", name: "채아람", phone: "010-1234-1234", rights: "사용자", create: "2024-03-28 16:12:54", active: "활성화", approval: "승인" },
    { no: 10, id: "minjigogo", name: "고민지", phone: "010-1234-1234", rights: "관리자", create: "2024-04-05 20:37:17", active: "비활성화", approval: "승인" },
    { no: 11, id: "yyhyeon", name: "유영현", phone: "010-1234-1234", rights: "사용자", create: "2024-04-06 11:19:30", active: "비활성화", approval: "승인" },
    { no: 12, id: "98jcm", name: "정채민", phone: "010-1234-1234", rights: "사용자", create: "2024-04-21 09:40:11", active: "비활성화", approval: "미승인" },
    { no: 13, id: "ngys3350", name: "남궁연석", phone: "010-1234-1234", rights: "사용자", create: "2024-05-19 07:11:36", active: "비활성화", approval: "미승인" },
    { no: 14, id: "hyunwoo00", name: "배현우", phone: "010-1234-1234", rights: "사용자", create: "2024-06-03 12:32:22", active: "활성화", approval: "승인" },
    { no: 15, id: "baeksoo8214", name: "백지수", phone: "010-1234-1234", rights: "사용자", create: "2024-06-12 17:33:10", active: "활성화", approval: "승인" },
    { no: 16, id: "parkbyung9", name: "박병구", phone: "010-1234-1234", rights: "관리자", create: "2024-08-13 16:11:32", active: "활성화", approval: "승인" },
    { no: 17, id: "doorhaha", name: "문현아", phone: "010-1234-1234", rights: "사용자", create: "2024-08-27 14:07:51", active: "비활성화", approval: "승인" },
    { no: 18, id: "mosh02", name: "모성현", phone: "010-1234-1234", rights: "사용자", create: "2024-09-14 23:10:51", active: "활성화", approval: "승인" },
    { no: 19, id: "dodo1520", name: "도연수", phone: "010-1234-1234", rights: "사용자", create: "2024-09-24 03:46:57", active: "활성화", approval: "승인" },
    { no: 20, id: "hhj960715", name: "하현진", phone: "010-1234-1234", rights: "사용자", create: "2024-10-01 08:18:18", active: "활성화", approval: "미승인" },
    { no: 21, id: "5bj5bj", name: "오범진", phone: "010-1234-1234", rights: "사용자", create: "2024-10-25 11:03:47", active: "활성화", approval: "미승인" },
    { no: 22, id: "iamsjv", name: "나성주", phone: "010-1234-1234", rights: "관리자", create: "2024-11-05 22:10:43", active: "활성화", approval: "미승인" },
    { no: 23, id: "inchaeri", name: "안채리", phone: "010-1234-1234", rights: "사용자", create: "2024-11-07 11:07:41", active: "비활성화", approval: "미승인" }
  ];



    //테이블 데이터 추가 및 페이징 버튼 기능
    const dataPerPage = 10; // 한 페이지에 표시할 데이터 개수
    let currentPage = 1; // 현재 페이지 번호
    const totalPages = Math.ceil(data.length / dataPerPage); // 전체 페이지 수

    // 테이블 데이터 로드 함수
    function loadTableData(page) {
        const startIdx = (page - 1) * dataPerPage;
        const endIdx = startIdx + dataPerPage;
        const pageData = data.slice(startIdx, endIdx);

        // 테이블에 데이터 추가
        $('#userList tbody').empty();
        pageData.forEach(item => {
            $('#userList tbody').append(`
                <tr>
                    <td>${item.no}</td>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.phone}</td>
                    <td>${item.rights}</td>
                    <td>${item.create}</td>
                    <td>${item.active}</td>
                    <td>${item.approval}</td>
                </tr>
            `);
        });

        // 페이지 번호 버튼 업데이트
        updatePagination();
    }

    // 페이지 번호 버튼 및 상태 업데이트
    function updatePagination() {
        // 페이지 버튼 생성
        $('#page-buttons').empty();
        for (let i = 1; i <= totalPages; i++) {
            $('#page-buttons').append(`<button class="page-btn page-num">${i}</button>`);
        }

        // 현재 페이지 버튼 굵게 표시
        $('#page-buttons .page-num').removeClass('bold');
        $(`#page-buttons .page-num:eq(${currentPage - 1})`).addClass('bold');

        // '처음', '이전', '다음', '마지막' 버튼 상태 관리
        if (currentPage === 1) {
            $('#first, #prev').addClass('disabled').prop('disabled', true);
        } else {
            $('#first, #prev').removeClass('disabled').prop('disabled', false);
        }

        if (currentPage === totalPages) {
            $('#next, #last').addClass('disabled').prop('disabled', true);
        } else {
            $('#next, #last').removeClass('disabled').prop('disabled', false);
        }
    }

    // 페이지 번호 버튼 클릭 이벤트
    $('#page-buttons').on('click', '.page-num', function () {
        const page = parseInt($(this).text());
        if (page !== currentPage) {
            currentPage = page;
            loadTableData(currentPage);
        }
    });

    // '처음' 버튼 클릭
    $('#first').click(function () {
        if (currentPage !== 1) {
            currentPage = 1;
            loadTableData(currentPage);
        }
    });

    // '이전' 버튼 클릭
    $('#prev').click(function () {
        if (currentPage > 1) {
            currentPage--;
            loadTableData(currentPage);
        }
    });

    // '다음' 버튼 클릭
    $('#next').click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            loadTableData(currentPage);
        }
    });

    // '마지막' 버튼 클릭
    $('#last').click(function () {
        if (currentPage !== totalPages) {
            currentPage = totalPages;
            loadTableData(currentPage);
        }
    });

    // 페이지 초기화
    loadTableData(currentPage);

    //생성하기 버튼
    $(".mainHeader>div").click(function(){
        location.replace("userCreate.html");
    })

    // 회원목록 클릭시 회원 상세보기 화면으로 전환
    $("#userList tbody tr").click(function(){
        location.replace("userDetail.html");
    });

    $(".adminAccountBtn button").click(function(){
        location.replace("../index.html");
    });
});

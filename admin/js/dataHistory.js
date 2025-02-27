$(document).ready(function () {

  const data = [
        { no: 1, data: "data1", collection: "collection1", state: "적재완료", createAdmin: "admin", create: "2023-12-17 17:14:56"},
        { no: 2, data: "data2", collection: "collection2", state: "적재완료", createAdmin: "admin", create: "2023-12-27 08:57:12"},
        { no: 3, data: "data3", collection: "collection3", state: "적재완료", createAdmin: "admin", create: "2024-01-06 13:37:20"},
        { no: 4, data: "data4", collection: "collection4", state: "적재완료", createAdmin: "admin", create: "2024-01-19 12:12:08"},
        { no: 5, data: "data5", collection: "collection5", state: "적재완료", createAdmin: "admin", create: "2024-01-31 16:21:27"},
        { no: 6, data: "data6", collection: "collection6", state: "적재완료", createAdmin: "admin", create: "2024-02-22 21:07:55"},
        { no: 7, data: "data7", collection: "collection7", state: "적재완료", createAdmin: "admin", create: "2024-02-29 20:43:37"},
        { no: 8, data: "data8", collection: "collection8", state: "적재완료", createAdmin: "admin", create: "2024-03-02 15:20:33"},
        { no: 9, data: "data9", collection: "collection9", state: "적재완료", createAdmin: "admin", create: "2024-03-28 16:12:54"},
        { no: 10, data: "data10", collection: "collection10", state: "적재완료", createAdmin: "admin", create: "2024-04-05 20:37:17"},
        { no: 11, data: "data11", collection: "collection11", state: "적재완료", createAdmin: "admin", create: "2024-04-06 11:19:30"},
        { no: 12, data: "data12", collection: "collection12", state: "적재완료", createAdmin: "admin", create: "2024-04-21 09:40:11"},
        { no: 13, data: "data13", collection: "collection13", state: "적재완료", createAdmin: "admin", create: "2024-05-19 07:11:36"},
        { no: 14, data: "data14", collection: "collection14", state: "적재완료", createAdmin: "admin", create: "2024-06-03 12:32:22"},
        { no: 15, data: "data15", collection: "collection15", state: "적재완료", createAdmin: "admin", create: "2024-06-12 17:33:10"},
        { no: 16, data: "data16", collection: "collection16", state: "적재완료", createAdmin: "admin", create: "2024-08-13 16:11:32"},
        { no: 17, data: "data17", collection: "collection17", state: "적재완료", createAdmin: "admin", create: "2024-08-27 14:07:51"},
        { no: 18, data: "data18", collection: "collection18", state: "적재완료", createAdmin: "admin", create: "2024-09-14 23:10:51"},
        { no: 19, data: "data19", collection: "collection19", state: "적재완료", createAdmin: "admin", create: "2024-09-24 03:46:57"},
        { no: 20, data: "data20", collection: "collection20", state: "적재완료", createAdmin: "admin", create: "2024-10-01 08:18:18"},
        { no: 21, data: "data21", collection: "collection21", state: "적재완료", createAdmin: "admin", create: "2024-10-25 11:03:47"},
        { no: 22, data: "data22", collection: "collection22", state: "적재완료", createAdmin: "admin", create: "2024-11-05 22:10:43"}
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
        $('#dataList tbody').empty();
        pageData.forEach(item => {
            $('#dataList tbody').append(`
                <tr>
                    <td>${item.no}</td>
                    <td>${item.data}</td>
                    <td>${item.collection}</td>
                    <td>${item.state}</td>
                    <td>${item.createAdmin}</td>
                    <td>${item.create}</td>
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
});

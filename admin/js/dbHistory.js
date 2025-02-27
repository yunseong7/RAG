$(document).ready(function () {

    const data = [
        { no: 1, collection: "collection1", context: "벡터DB 변경 1", detail: "벡터DB 변경 내용1", createAdmin: "admin", create: "2023-12-17 17:14:56"},
        { no: 2, collection: "collection2", context: "벡터DB 변경 2", detail: "벡터DB 변경 내용2", createAdmin: "admin", create: "2023-12-27 08:57:12"},
        { no: 3, collection: "collection3", context: "벡터DB 변경 3", detail: "벡터DB 변경 내용3", createAdmin: "admin", create: "2024-01-06 13:37:20"},
        { no: 4, collection: "collection4", context: "벡터DB 변경 4", detail: "벡터DB 변경 내용4", createAdmin: "admin", create: "2024-01-19 12:12:08"},
        { no: 5, collection: "collection5", context: "벡터DB 변경 5", detail: "벡터DB 변경 내용5", createAdmin: "admin", create: "2024-01-31 16:21:27"},
        { no: 6, collection: "collection6", context: "벡터DB 변경 6", detail: "벡터DB 변경 내용6", createAdmin: "admin", create: "2024-02-22 21:07:55"},
        { no: 7, collection: "collection7", context: "벡터DB 변경 7", detail: "벡터DB 변경 내용7", createAdmin: "admin", create: "2024-02-29 20:43:37"},
        { no: 8, collection: "collection8", context: "벡터DB 변경 8", detail: "벡터DB 변경 내용8", createAdmin: "admin", create: "2024-03-02 15:20:33"},
        { no: 9, collection: "collection9", context: "벡터DB 변경 9", detail: "벡터DB 변경 내용9", createAdmin: "admin", create: "2024-03-28 16:12:54"},
        { no: 10, collection: "collection10", context: "벡터DB 변경 10", detail: "벡터DB 변경 내용10", createAdmin: "admin", create: "2024-04-05 20:37:17"},
        { no: 11, collection: "collection11", context: "벡터DB 변경 11", detail: "벡터DB 변경 내용11", createAdmin: "admin", create: "2024-04-06 11:19:30"},
        { no: 12, collection: "collection12", context: "벡터DB 변경 12", detail: "벡터DB 변경 내용12", createAdmin: "admin", create: "2024-04-21 09:40:11"},
        { no: 13, collection: "collection13", context: "벡터DB 변경 13", detail: "벡터DB 변경 내용13", createAdmin: "admin", create: "2024-05-19 07:11:36"},
        { no: 14, collection: "collection14", context: "벡터DB 변경 14", detail: "벡터DB 변경 내용14", createAdmin: "admin", create: "2024-06-03 12:32:22"},
        { no: 15, collection: "collection15", context: "벡터DB 변경 15", detail: "벡터DB 변경 내용15", createAdmin: "admin", create: "2024-06-12 17:33:10"},
        { no: 16, collection: "collection16", context: "벡터DB 변경 16", detail: "벡터DB 변경 내용16", createAdmin: "admin", create: "2024-08-13 16:11:32"},
        { no: 17, collection: "collection17", context: "벡터DB 변경 17", detail: "벡터DB 변경 내용17", createAdmin: "admin", create: "2024-08-27 14:07:51"},
        { no: 18, collection: "collection18", context: "벡터DB 변경 18", detail: "벡터DB 변경 내용18", createAdmin: "admin", create: "2024-09-14 23:10:51"},
        { no: 19, collection: "collection19", context: "벡터DB 변경 19", detail: "벡터DB 변경 내용19", createAdmin: "admin", create: "2024-09-24 03:46:57"},
        { no: 20, collection: "collection20", context: "벡터DB 변경 20", detail: "벡터DB 변경 내용20", createAdmin: "admin", create: "2024-10-01 08:18:18"},
        { no: 21, collection: "collection21", context: "벡터DB 변경 21", detail: "벡터DB 변경 내용21", createAdmin: "admin", create: "2024-10-25 11:03:47"},
        { no: 22, collection: "collection22", context: "벡터DB 변경 22", detail: "벡터DB 변경 내용22", createAdmin: "admin", create: "2024-11-05 22:10:43"}
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
                      <td>${item.collection}</td>
                      <td>${item.context}</td>
                      <td>${item.detail}</td>
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

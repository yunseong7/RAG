$(document).ready(function(){

  const data = [
    { no: 1, name: "db1", context: "벡터DB 1", collection: "collection1", active: "O", create: "2023-12-17 17:14:56"},
    { no: 2, name: "db2", context: "벡터DB 2", collection: "collection2", active: "O", create: "2023-12-27 08:57:12"},
    { no: 3, name: "db3", context: "벡터DB 3", collection: "collection3", active: "O", create: "2024-01-06 13:37:20"},
    { no: 4, name: "db4", context: "벡터DB 4", collection: "collection4", active: "O", create: "2024-01-19 12:12:08"},
    { no: 5, name: "db5", context: "벡터DB 5", collection: "collection5", active: "O", create: "2024-01-31 16:21:27"},
    { no: 6, name: "db6", context: "벡터DB 6", collection: "collection6", active: "X", create: "2024-02-22 21:07:55"},
    { no: 7, name: "db7", context: "벡터DB 7", collection: "collection7", active: "O", create: "2024-02-29 20:43:37"},
    { no: 8, name: "db8", context: "벡터DB 8", collection: "collection8", active: "O", create: "2024-03-02 15:20:33"},
    { no: 9, name: "db9", context: "벡터DB 9", collection: "collection9", active: "O", create: "2024-03-28 16:12:54"},
    { no: 10, name: "db10", context: "벡터DB 10", collection: "collection10", active: "X", create: "2024-04-05 20:37:17"},
    { no: 11, name: "db11", context: "벡터DB 11", collection: "collection11", active: "O", create: "2024-04-06 11:19:30"},
    { no: 12, name: "db12", context: "벡터DB 12", collection: "collection12", active: "O", create: "2024-04-21 09:40:11"},
    { no: 13, name: "db13", context: "벡터DB 13", collection: "collection13", active: "O", create: "2024-05-19 07:11:36"},
    { no: 14, name: "db14", context: "벡터DB 14", collection: "collection14", active: "O", create: "2024-06-03 12:32:22"},
    { no: 15, name: "db15", context: "벡터DB 15", collection: "collection15", active: "O", create: "2024-06-12 17:33:10"},
    { no: 16, name: "db16", context: "벡터DB 16", collection: "collection16", active: "X", create: "2024-08-13 16:11:32"},
    { no: 17, name: "db17", context: "벡터DB 17", collection: "collection17", active: "X", create: "2024-08-27 14:07:51"},
    { no: 18, name: "db18", context: "벡터DB 18", collection: "collection18", active: "O", create: "2024-09-14 23:10:51"},
    { no: 19, name: "db19", context: "벡터DB 19", collection: "collection19", active: "O", create: "2024-09-24 03:46:57"},
    { no: 20, name: "db20", context: "벡터DB 20", collection: "collection20", active: "O", create: "2024-10-01 08:18:18"},
    { no: 21, name: "db21", context: "벡터DB 21", collection: "collection21", active: "X", create: "2024-10-25 11:03:47"},
    { no: 22, name: "db22", context: "벡터DB 22", collection: "collection22", active: "X", create: "2024-11-05 22:10:43"}
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
                  <td>${item.name}</td>
                  <td>${item.context}</td>
                  <td>${item.collection}</td>
                  <td>${item.active}</td>
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


  //생성하기 버튼
  $(".mainHeader>div").click(function(){
      location.replace("dbCreate.html");
  })

  // 데이터 목록 클릭시 데이터 상세보기 화면으로 전환
  $("#dataList tbody tr").click(function(){
      location.replace("dbDetail.html");
  });
});
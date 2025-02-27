$(document).ready(function () {
    const data = [
        { id: 1, name: '홍길동', email: 'hong@example.com' },
        { id: 2, name: '김철수', email: 'kim@example.com' },
        { id: 3, name: '박영희', email: 'park@example.com' },
        { id: 4, name: '이순신', email: 'lee@example.com' },
        { id: 5, name: '정다정', email: 'jeong@example.com' },
        { id: 6, name: '최민수', email: 'choi@example.com' },
        { id: 7, name: '이병호', email: 'lee2@example.com' },
        { id: 8, name: '문채원', email: 'moon@example.com' },
        { id: 9, name: '고은비', email: 'go@example.com' },
        { id: 10, name: '조현우', email: 'jo@example.com' },
        { id: 11, name: '송해', email: 'song@example.com' },
        { id: 12, name: '유리', email: 'yuri@example.com' },
        { id: 13, name: '정유미', email: 'jung@example.com' },
        { id: 14, name: '이정재', email: 'lee3@example.com' },
        { id: 15, name: '김수현', email: 'kim2@example.com' },
        { id: 16, name: '차승원', email: 'cha@example.com' },
        { id: 17, name: '장동건', email: 'jang@example.com' },
        { id: 18, name: '한효주', email: 'han@example.com' },
        { id: 19, name: '이상윤', email: 'lee4@example.com' },
        { id: 20, name: '정우성', email: 'jung2@example.com' }
    ];

    const dataPerPage = 5; // 한 페이지에 표시할 데이터 개수
    let currentPage = 1; // 현재 페이지 번호
    const totalPages = Math.ceil(data.length / dataPerPage); // 전체 페이지 수

    // 테이블 데이터 로드 함수
    function loadTableData(page) {
        const startIdx = (page - 1) * dataPerPage;
        const endIdx = startIdx + dataPerPage;
        const pageData = data.slice(startIdx, endIdx);

        // 테이블에 데이터 추가
        $('#data-table tbody').empty();
        pageData.forEach(item => {
            $('#data-table tbody').append(`
                <tr>
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td>${item.email}</td>
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

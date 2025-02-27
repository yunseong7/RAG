// script.js
$(document).ready(function () {
  var ctx = document.getElementById("chart").getContext("2d");
  
  var myChart = new Chart(ctx, {
    type: "line", // 차트의 종류 (선차트)
    data: {
      labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
      datasets: [{
        label: "채팅", // 데이터셋의 라벨
        data: [92, 9, 19, 33, 10, 44, 22, 44, 41, 82, 30, 33], // y축 값
        fill: false, // 선 아래를 채울지 여부
        borderColor: "rgb(75, 192, 192)", // 선 색상
        tension: 0.1, // 선의 곡률
        borderWidth: 3, // 선의 두께
        pointRadius: 5, // 데이터 포인트 크기
        pointBackgroundColor: "rgb(75, 192, 192)", // 데이터 포인트 색상
        pointBorderColor: "rgb(255, 255, 255)", // 데이터 포인트의 테두리 색상
        pointBorderWidth: 2 // 데이터 포인트 테두리 두께
      }, {
        label: "추론",
        data: [19, 95, 4, 21, 10, 25, 30, 99, 60, 48, 56, 85],
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
        borderWidth: 3,
        pointRadius: 5,
        pointBackgroundColor: "rgb(153, 102, 255)",
        pointBorderColor: "rgb(255, 255, 255)",
        pointBorderWidth: 2
      }]
    },
    options: {
      responsive: true, // 차트의 반응형 설정
      scales: {
        y: {
          beginAtZero: true // y축을 0부터 시작하도록 설정
        }
      },
      plugins: {
        legend: {
          position: "top", // 범례 위치 설정
          labels: {
            font: {
              size: 14 // 범례 폰트 크기
            }
          }
        },
        title: {
          display: true, // 제목 표시 여부
          text: "채팅 / 추론 요청 그래프", // 차트 제목
          font: {
            size: 18 // 제목 폰트 크기
          }
        }
      }
    }
  });

  window.addEventListener("resize", function(){
    location.reload();
  });


  $(".userPage").click(function(){
    location.replace("user.html");
  });
  $(".dataPage").click(function(){
    location.replace("data.html");
  });
  $(".promptPage").click(function(){
    location.replace("prompt.html");
  });
  $(".collectionPage").click(function(){
    location.replace("db.html");
  });
});

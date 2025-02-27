$(document).ready(function(){
  $("#id").val("honggd");
  $("#name").val("홍길동");
  $("#phone").val("010-1234-1234");
  $("#rights").val("user");
  $("#create").val("2023-12-17 17:14:56");
  $("#modify").val("2023-12-17 17:14:56");
  $("#createAdmin").val("admin");
  $("#modifyAdmin").val("admin");
  $("#active").val("활성화");
  $("#approval").val("승인");

  // 수정시간
  function nowTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2); // 월은 0부터 시작하므로 +1 필요
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + ' ' + hours + '.' + minutes + '.' + seconds;
  }


  // 가입 승인 / 거절 버튼
  $(".approvalBtn").click(function(){
    var approvalBtn = $("#approval").val();
    if(approvalBtn === "승인"){
      $("#approval").val("미승인");
      alert("회원가입이 거절되었습니다.");
    }
    else{
      $("#approval").val("승인");
      alert("회원가입이 승인되었습니다.");
    }

    $("#modify").val(nowTime());
    // update 이벤트 필요
  });

  // 활성화 / 비활성화 버튼
  $(".activeBtn").click(function(){
    var activeBtn = $("#active").val();
    if(activeBtn === "활성화"){
      $("#active").val("비활성화");
      alert("회원이 비활성화 되었습니다.");
    }
    else{
      $("#active").val("활성화");
      alert("회원이 활성화 되었습니다.");
    }

    $("#modify").val(nowTime());
    // 활성화 / 비활성화 update 이벤트 필요
  });

  //수정 버튼
  $(".modifyBtn").click(function(){
        location.replace("userModify.html");
  })
});
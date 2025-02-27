$(document).ready(function(){
  $("#name").val("prompt1");
  $("#context").val("프롬프트1");
  $("#detail").val("");
  $("#create").val("2023-12-17 17:14:56");
  $("#modify").val("2023-12-17 17:14:56");
  $("#createAdmin").val("admin");
  $("#modifyAdmin").val("admin");
  $("#apply").val("O");

  // 수정시간
  function nowTime() {
    var now = new Date();
    var year = now.getFullYear();
    var month = ('0' + (now.getMonth() + 1)).slice(-2); // 월은 0부터시작하므로 +1 필요
    var day = ('0' + now.getDate()).slice(-2);
    var hours = ('0' + now.getHours()).slice(-2);
    var minutes = ('0' + now.getMinutes()).slice(-2);
    var seconds = ('0' + now.getSeconds()).slice(-2);

    return year + '-' + month + '-' + day + ' ' + hours + '.' + minutes + '.'+ seconds;
  }


  //삭제 버튼
  $(".deleteBtn").click(function(){
    var deleteBtn = confirm("데이터소스를 삭제하시겠습니까?");

    if(deleteBtn){
      alert("데이터소스가 삭제되었습니다.");
      location.replace("prompt.html");
    }

    else{
      //현화면 유지
    }
  });

  //수정버튼
    $(".modifyBtn").click(function(){
      location.replace("promptModify.html");
    });

  // 적용버튼
  $(".applyBtn").click(function(){
    var applyBtn = $("#apply").val();
    if(applyBtn === "O"){
      $("#apply").val("X");
      alert("적용해제 되었습니다.");
    }
    else{
      $("#apply").val("O");
      alert("적용 되었습니다.");
    }

    $("#modify").val(nowTime());
    // update 이벤트 필요
  });
});
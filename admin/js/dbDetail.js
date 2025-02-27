$(document).ready(function(){
    $("#name").val("data1");
    $("#context").val("데이터소스1");
    $("#collection").val("collection1");
    $("#create").val("2023-12-17 17:14:56");
    $("#modify").val("2023-12-17 17:14:56");
    $("#createAdmin").val("admin");
    $("#modifyAdmin").val("admin");
    $("#active").val("O");

  
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


  //삭제 버튼
  $(".deleteBtn").click(function(){
    var deleteBtn = confirm("벡터DB 컬렉션을 삭제하시겠습니까?");

    if(deleteBtn){
      alert("벡터DB 컬렉션이 삭제되었습니다.");
      location.replace("db.html");
    }

    else{
      //현화면 유지
    }
  });

  //수정버튼
    $(".modifyBtn").click(function(){
      location.replace("dbModify.html");
    });

  //활성화버튼
  $(".activeBtn").click(function(){
    var activeBtn = $("#active").val();
    if(activeBtn === "O"){
      $("#active").val("X");
      alert("비활성화 되었습니다.");
    }
    else{
      $("#active").val("O");
      alert("활성화 되었습니다.");
    }

    $("#modify").val(nowTime());
    // update 이벤트 필요
  });
});
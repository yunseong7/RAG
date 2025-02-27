$(document).ready(function(){
  $("#name").val("model1");
  $("#context").val("모델1");
  $("#create").val("2023-12-17 17:14:56");
  $("#modify").val("2023-12-17 17:14:56");
  $("#createAdmin").val("admin");
  $("#modifyAdmin").val("admin");

  //삭제 버튼
  $(".deleteBtn").click(function(){
    var deleteBtn = confirm("모델을 삭제하시겠습니까?");

    if(deleteBtn){
      alert("모델이 삭제되었습니다.");
      location.replace("model.html");
    }

    else{
      //현화면 유지
    }
  });

  //수정버튼
  $(".modifyBtn").click(function(){
    location.replace("modelModify.html");
  });
});
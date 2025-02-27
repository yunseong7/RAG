$(document).ready(function(){
  $("#name").val("data1");
  $("#context").val("데이터소스1");
  $("#type").val("data1.datasource");
  $("#file").val("파일");
  $("#filemap").val("");
  $("#fileSize").val("95MB");
  $("#collection").val("collection1");
  $("#create").val("2023-12-17 17:14:56");
  $("#modify").val("2023-12-17 17:14:56");
  $("#createAdmin").val("admin");
  $("#modifyAdmin").val("admin");
  $("#state").val("적재완료");

    //삭제 버튼
    $(".deleteBtn").click(function(){
      var deleteBtn = confirm("데이터소스를 삭제하시겠습니까?");
  
      if(deleteBtn){
        alert("데이터소스가 삭제되었습니다.");
        location.replace("data.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //수정버튼
    $(".modifyBtn").click(function(){
      location.replace("dataModify.html");
    });
});
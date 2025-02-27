$(document).ready(function(){
  $("#name").val("db1");
  $("#context").val("벡터DB 1");

    //취소
    $(".cancelBtn").click(function(){
      var cancelBtn = confirm("벡터DB 컬렉션 수정을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("db.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장
    $(".saveBtn").click(function(){
      var saveBtn = confirm("수정된 벡터DB 컬렉션을 저장하시겠습니까?");
      if(saveBtn){
        location.replace("db.html");
      }
      else{
        //현화면 유지
      }
    });
});
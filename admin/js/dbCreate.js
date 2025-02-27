$(document).ready(function(){
    //취소버튼
    $(".cancelBtn").click(function(){

      var cancelBtn = confirm("벡터DB 컬렉션 생성을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("db.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장
    $(".saveBtn").click(function(){
      var saveBtn = confirm("벡터DB 컬렉션을 저장하시겠습니까?");
      if(saveBtn){
        
        //저장 후 새화면
        location.replace("dbCreate.html");
      }
      else{
        //현화면 유지
      }
    });
});
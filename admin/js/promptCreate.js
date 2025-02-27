$(document).ready(function(){
    //취소
    $(".cancelBtn").click(function(){

      var cancelBtn = confirm("프롬프트 생성을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("prompt.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장
    $(".saveBtn").click(function(){
      var saveBtn = confirm("프롬프트를 저장하시겠습니까?");
      if(saveBtn){
        
        //저장 후 새화면
        location.replace("promptCreate.html");
      }
      else{
        //현화면 유지
      }
    });
});
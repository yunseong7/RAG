$(document).ready(function(){

    $("#name").val("prompt1");
    $("#context").val("프롬프트1");
    $("#detail").val("");

    //수정 취소버튼
    $(".cancelBtn").click(function(){

      var cancelBtn = confirm("프롬프트 수정을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("prompt.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장버튼
    $(".saveBtn").click(function(){
      var saveBtn = confirm("수정된 프롬프트를 저장하시겠습니까?");
      if(saveBtn){
        
        //저장 후 새화면
        location.replace("prompt.html");
      }
      else{
        //현화면 유지
      }
    });
});
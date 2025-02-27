$(document).ready(function(){
  $("#name").val("model1");
  $("#context").val("모델1");  

    //취소
    $(".cancelBtn").click(function(){
      var cancelBtn = confirm("모델 수정을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("model.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장
    $(".saveBtn").click(function(){
      var saveBtn = confirm("수정된 모델을 저장하시겠습니까?");
      if(saveBtn){
        location.replace("model.html");
      }
      else{
        //현화면 유지
      }
    });
});
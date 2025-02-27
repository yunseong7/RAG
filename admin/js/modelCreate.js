$(document).ready(function(){
    //취소 버튼
    $(".cancelBtn").click(function(){

      var cancelBtn = confirm("모델 생성을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("model.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장 버튼
    $(".saveBtn").click(function(){
      var saveBtn = confirm("모델을 저장하시겠습니까?");
      if(saveBtn){
        
        //저장 후 새화면
        location.replace("modelCreate.html");
      }
      else{
        //현화면 유지
      }
    });
});
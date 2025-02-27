$(document).ready(function(){
    //취소 버튼
    $(".cancelBtn").click(function(){

      var cancelBtn = confirm("데이터소스 생성을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("data.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장 버튼
    $(".saveBtn").click(function(){
      var saveBtn = confirm("데이터소스를 저장하시겠습니까?");
      if(saveBtn){
        
        //저장 후 새화면
        location.replace("dataCreate.html");
      }
      else{
        //현화면 유지
      }
    });
});
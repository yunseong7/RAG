$(document).ready(function(){
  $("#name").val("data1");
  $("#context").val("데이터소스1");  

    //취소
    $(".cancelBtn").click(function(){
      var cancelBtn = confirm("데이터소스 수정을 취소하시겠습니까?");
  
      if(cancelBtn){
        location.replace("data.html");
      }
  
      else{
        //현화면 유지
      }
    });
  
    //저장
    $(".saveBtn").click(function(){
      var saveBtn = confirm("수정된 데이터소스를 저장하시겠습니까?");
      if(saveBtn){
        location.replace("data.html");
      }
      else{
        //현화면 유지
      }
    });
});
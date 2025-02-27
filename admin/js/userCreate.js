$(document).ready(function(){

  //취소
  $(".cancelBtn").click(function(){

    var cancelBtn = confirm("회원생성을 취소하시겠습니까?");

    if(cancelBtn){
      location.replace("user.html");
    }

    else{
      //현화면 유지
    }
  });

  //저장
  $(".saveBtn").click(function(){
    var saveBtn = confirm("회원가입을 계속하시겠습니까?");
    if(saveBtn){
      
      //저장 후 새화면
      location.replace("userCreate.html");
    }
    else{
      //현화면 유지
    }
  });
  
  //비밀번호 체크 기능
  $("#pwd").keyup(function(){
    var pwd = $(this).val();
    var pwdc = $("#pwdc").val();
    if(pwd !== pwdc){
      $(".inputStyle p").css("display", "block");
    }
    else{
      $(".inputStyle p").css("display", "none");
    }
  });

  //비밀번호 체크 기능
  $("#pwdc").keyup(function(){
    var pwd = $("#pwd").val();
    var pwdc = $(this).val();
    if(pwd !== pwdc){
      $(".inputStyle p").css("display", "block");
    }
    else{
      $(".inputStyle p").css("display", "none");
    }
  });

});
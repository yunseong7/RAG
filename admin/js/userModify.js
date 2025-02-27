$(document).ready(function(){
  // 페이지 로딩시 선택한 회원의 정보 생성
  $("#id").val("honggd");
  $("#name").val("홍길동");
  $("#phone").val("010-1234-1234");
  $("#rights").val("user");
  $("#pwd").val("1234");
  $("#pwdc").val("1234");

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


  //취소
  $(".cancelBtn").click(function(){
    var cancelBtn = confirm("회원정보 수정을 취소 하시겠습니까?");

    if(cancelBtn){
      location.replace("userDetail.html");
    }

    else{
      //현화면 유지
    }
  });

  //저장
  $(".saveBtn").click(function(){
    var saveBtn = confirm("수정된 회원정보를 저장하시겠습니까?");
    if(saveBtn){
      
      //저장 후 새화면
      location.replace("userModify.html");
    }
    else{
      //현화면 유지
    }
  });
});
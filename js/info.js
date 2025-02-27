$(document).ready(function(){

  $("#userName").on("click", function(){
    $("#userAccount").css("display","block");
    $("#userModalBg").css("display","block");
  });

  $("#userAccountClose>span").on("click", function(){
    $("#userAccount").css("display","none");
    $("#userModalBg").css("display","none");
  });

  $("#userModalBg").on("click", function(){
    $("#userAccount").css("display","none");
    $(this).css("display","none");
  });

  $("#myBtn").click(function(){
    location.replace("info.html");
  });

  $("#id").val("User");
  $("#pwd").val("1234");
  $("#name").val("사용자1");
  $("#phone").val("010-1234-1234");
  $("#rights").val("사용자");
  $("#create").val("2024-13-17 17:14:56");
  $("#modify").val("2024-13-17 17:14:56");


  $(".logoutBtn").click(function(){
    location.replace("../index.html");
  });

  $(".cancelBtn").click(function(){
    location.replace("index.html");
  });

});
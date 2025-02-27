$(document).ready(function(){
  $(".modalClose").click(function(){
    $(".popup").css("display","none");
  });

  $(".loginBtn").click(function(){
    var id = $("#id").val();
    var pwd = $("#pwd").val();
    var right = $("input[name='right']:checked").val();

    console.log(right, id, pwd);

    if(id === "user" && pwd === "1234" && right === "user"){
      $(".inputBtn p").css("display","none");
      location.href = "/user/index.html";
    }
    else if(id === "admin" && pwd === "1234" && right === "admin"){
      $(".inputBtn p").css("display","none");
      location.href = "/admin/index.html";
    }
    else{
      $(".inputBtn p").css("display","block");
    }
  });

});
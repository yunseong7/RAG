$(document).ready(function(){

  $("#adminName").on("click", function(){
    $("#adminAccount").css("display","block");
    $("#adminModalBg").css("display","block");
  });

  $("#adminAccountClose>span").on("click", function(){
    $("#adminAccount").css("display","none");
    $("#adminModalBg").css("display","none");
  });
  $("#adminModalBg").on("click", function(){
    $("#adminAccount").css("display","none");
    $(this).css("display","none");
  });
});
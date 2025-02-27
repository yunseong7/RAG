$(document).ready(function(){
  
  // 시작화면 문구 애니메이션
  const startMSG = "안녕하세요 RAG입니다.\n검색어를 입력해 주세요"; 
  var index = 0;

  function typeText() {
    if (index < startMSG.length) {
      
      // \n을 <br>로 치환하여 개행 처리
      var char = startMSG.charAt(index);
      if (char === '\n') {
        $('.startMSG').append('<br>');  // \n을 <br>로 처리
      } else {
        $('.startMSG').append(char);
      }
      index++;
      setTimeout(typeText, 80);
    }
  }

  // 애니메이션 시작
  typeText();

  $(".chatInput>input").keypress(function(e){
    
    // 엔터키 입력시
    if(e.keyCode === 13){
      e.preventDefault();
      // input값 받아오기
      var input = $(".chatInput>input").val().trim();
      
      // input값이 빈값이 아닐경우
      if(input.charAt(0) !== ' '  && input !== '' && input !== null){
        //  채팅 화면에 입력한 질문 추가
        var chatDiv = $("<div></div>", { class: "question" });
        var title = $("<h5></h5>").text("질문");
        var value = $('<p></p>').text(input);
        chatDiv.append(title).append(value);
        $(".chatDiv").append(chatDiv);
        // 채팅 화면 활성화
        $(".startDiv").css("display", "none");
        $(".top").css("display", "block");
        $(".chatDiv").css("display", "block");
      }

      // 입력창 초기화
      $(".chatInput>input").val("");
    }    
  });

  $(".btnDiv").click(function(){
    $(".startDiv").css("display", "block");
    $(".top").css("display", "none");
    $(".chatDiv").css("display", "none");
    $(".chatInput>input").val("");
    $('.chatDiv .question').remove();
  });

  $(".newChat").click(function(){
    $(".startDiv").css("display", "block");
    $(".top").css("display", "none");
    $(".chatDiv").css("display", "none");
    $(".chatInput>input").val("");
    $('.chatDiv .question').remove();
  });

  
  $("#llmMenu li").on("click", function(){
    $("#llmButton").text($(this).text());
    $("#llmButton").val($(this).text());
    $("#llmVersion").text("LLM : " + $(this).text());
  });

  
  $("#collectionMenu li").on("click", function(){
    $("#collectionButton").text($(this).text());
    $("#collectionButton").val($(this).text());
    $("#collectionVersion").text("컬렉션 : " + $(this).text());
  });



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

  $("#logoutBtn").click(function(){
    location.replace("../index.html");
  });

  $("#myBtn").click(function(){
    location.replace("info.html");
  });

  // 해당 부분은 확인 바람
  $(".chatList>li>p").click(function(){
    var index = $(this).index(".chatList>li>p");
    $(".top").css("display","block");
    $(".chatDiv").css("display","none");
    $(".chatDiv").eq(index).css("display", "block");
    $(".startDiv").css("display", "none");
  });
});
$(document).ready(function() {
  $(".hide").hide();
  // image 1 hide / show
  $(".img1").click(function(){
    $("#design").show();
    $(".img1").hide();
  });
  $("#design").click(function(){
    $(".img1").show();
    $("#design").hide();
  });
  // image 2 hide/show
  $(".img2").click(function(){
    $("#dev").show();
    $(".img2").hide();
  });
  $("#dev").click(function(){
    $("#dev").hide();
    $(".img2").show();
  });
  // image 3 hide/show
  $(".img3").click(function(){
    $("#manage").show();
    $(".img3").hide();
  });
  $("#manage").click(function(){
    $("#manage").hide();
    $(".img3").show();
  });
  // hide/show project names
  $(".txt-front").hide();
  // hover effect
  // project 1
  $(".pr-1").hover(function(){
    $("#pr-1").show();
  });
  $(".pr-1").mouseleave(function(){
    $("#pr-1").hide();
  });
  // project 2
  $(".pr-2").hover(function(){
    $("#pr-2").show();
  });
  $(".pr-2").mouseleave(function(){
    $("#pr-2").hide();
  });
  // project 3
  $(".pr-3").hover(function(){
    $("#pr-3").show();
  });
  $(".pr-3").mouseleave(function(){
    $("#pr-3").hide();
  });
  // project 4
  $(".pr-4").hover(function(){
    $("#pr-4").show();
  });
  $(".pr-4").mouseleave(function(){
    $("#pr-4").hide();
  });
  // project 5
  $(".pr-5").hover(function(){
    $("#pr-5").show();
  });
  $(".pr-5").mouseleave(function(){
    $("#pr-5").hide();
  });
  // project 6
  $(".pr-6").hover(function(){
    $("#pr-6").show();
  });
  $(".pr-6").mouseleave(function(){
    $("#pr-6").hide();
  });
  // project 7
  $(".pr-7").hover(function(){
    $("#pr-7").show();
  });
  $(".pr-7").mouseleave(function(){
    $("#pr-7").hide();
  });
  // project 8
  $(".pr-8").hover(function(){
    $("#pr-8").show();
  });
  $(".pr-8").mouseleave(function(){
    $("#pr-8").hide();
  });
});
// send message
function sendmessage() {
  var sender_name = document.getElementById('name').value;
  alert('Thank you ' + sender_name + ' we have received your message. Thank you for reaching out to us');
}

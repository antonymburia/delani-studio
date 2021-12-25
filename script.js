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
});

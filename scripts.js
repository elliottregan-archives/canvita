$(document).ready( function() {

  $("#web").click(function() {
    $(this).addClass("active")
    $("#info").removeClass("active")
    $("#web_content").show();
    $("#info_content").hide();
  })
  
  $("#info").click(function() {
    $(this).addClass("active")
    $("#web").removeClass("active")
    $("#web_content").hide();
    $("#info_content").show();
  })

});
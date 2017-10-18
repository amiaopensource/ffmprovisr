$(document).ready(function() {

  // open recipe window if a hash is found in URL
  if(window.location.hash) {
    id = window.location.hash.substring(1)
    document.getElementById(id).checked = true;
    $('html, body').animate({ scrollTop: $(window.location.hash).offset().top}, 1000);
    $(id + " .link").empty();
    $(id + " .link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  }

  // add hash URL when recipe is opened
  $('label[class="recipe"]').on("click", function(){
    id = $(this).attr("for");
    window.location.hash = id
    $(id + " .link").empty();
    $(id + " .link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  });

});

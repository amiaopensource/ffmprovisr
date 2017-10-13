$(document).ready(function() {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // open recipe window if a hash is found in URL
  if(window.location.hash) {
    id = window.location.hash
    $(id).collapse('show');
    $('html, body').animate({ scrollTop: $(id).offset().top}, 1000);
    $(id + " .link").empty();
    $(id + " .link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  }

  // add hash URL when recipe is opened
  $('span[data-toggle="collapse"]').on("click", function(){
    id = $(this).attr("data-target");
    window.location.hash = id
    $(id + " .link").empty();
    $(id + " .link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  });

});

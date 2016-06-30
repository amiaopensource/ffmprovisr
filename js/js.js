$(document).ready(function() {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

  // open modal window if a hash is found in URL
  if(window.location.hash) {
    $(window.location.hash).modal('show');
    // add direct link to modal window
    $(".link").empty();
    $(".link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  }

  // add hash to URL when modal is opened
  $('span[data-toggle="modal"]').on("click", function(){
    window.location.hash = $(this).attr("data-target");
    // add direct link to modal window
    $(".link").empty();
    $(".link").append("<small>Link to this command: <a href="+window.location.href+">"+window.location.href+"</a></small>");
  });

  // remove hash from URL when modal is closed
  $(document).on('hide.bs.modal', function (e) {
    history.pushState("", document.title, window.location.pathname);
  });

});

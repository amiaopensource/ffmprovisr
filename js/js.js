$(document).ready(function() {

  // open recipe window if a hash is found in URL
  if(window.location.hash) {
    id = window.location.hash
    console.log(id.substring(1))
    document.getElementById(id.substring(1)).checked = true;
    $('html, body').animate({ scrollTop: $(id).offset().top}, 1000);
    $(id).closest('div').find('.link').empty();
    $(id).closest('div').find('.link').append("<small>Link to this command: <a href='https://amiaopensource.github.io/ffmprovisr/index.html"+window.location.hash+"'>https://amiaopensource.github.io/ffmprovisr/index.html"+window.location.hash+"</a></small>");
  }

  // add hash URL when recipe is opened
  $('label[class="recipe"]').on("click", function(){
    id = $(this).attr("for");
    window.location.hash = ('#' + id)
    $('#' + id).closest('div').find('.link').empty();
    $('#' + id).closest('div').find('.link').append("<small>Link to this command: <a href='https://amiaopensource.github.io/ffmprovisr/index.html"+window.location.hash+"'>https://amiaopensource.github.io/ffmprovisr/index.html"+window.location.hash+"</a></small>");
  });

});

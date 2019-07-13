$(document).ready(function() {

  // open recipe window if a hash is found in URL
  if(window.location.hash) {
    id = window.location.hash
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

  // open recipe when clicked
  $('a').on("click", function(){
    intralink = $(this).attr("href")
    if (intralink[0] == "#") {
      document.getElementById(intralink.substring(1)).checked = true;
      $('html, body').animate({ scrollTop: $(intralink).offset().top }, 1000);
    }
  })

  // open all windows if button is clicked
  $('#open-all').on("click", function(){
    $('input[type=checkbox]').each(function(){
      this.checked = !this.checked;
    })
  });

});

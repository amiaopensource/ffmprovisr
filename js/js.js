$(document).ready(function() {

  function appendLink(id) {
    $(id).next('div').find('.link').empty();
    $(id).next('div').find('.link').append("<small>Link to this command: <a href='https://amiaopensource.github.io/ffmprovisr/index.html" + id + "'>https://amiaopensource.github.io/ffmprovisr/index.html" + id + "</a></small>");
  }

  function moveToRecipe(id) {
    document.getElementById(id.substring(1)).checked = true;
    $('html, body').animate({ scrollTop: $(id).offset().top }, 1000);
    appendLink(id)
  }

  // open recipe window if a hash is found in URL
  if (window.location.hash) {
    id = window.location.hash
    moveToRecipe(id)
  }

  // add hash URL when recipe is opened
  $('label[class="recipe"]').on("click", function(){
    id = $(this).attr("for");
    window.location.hash = ('#' + id)
    appendLink('#' + id)
  })

  // open recipe when clicked
  $('a').on("click", function(){
    intralink = $(this).attr("href")
    if (intralink[0] == "#") {
      moveToRecipe(intralink)
    }
  })

  // Collapse all recipes when button is clicked
  $('#toggle-expand-collapse-all').on("click", function(){
    var checkboxes = $('input[type=checkbox]');
    var anyRecipesOpen = $(checkboxes).is(':checked');

    if (anyRecipesOpen) {
      // Collapse all
      $('input[type=checkbox]').each(function() {
        this.checked = false;
      });
    } else new Promise(function(resolve, reject) {
      // Expand all
      $('input[type=checkbox]').each(function() {
        this.checked = true;
      });
    });
  });
});

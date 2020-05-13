function scrollTo(element, to, duration) {
  var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

  var animateScroll = function(){        
    currentTime += increment;
    var val = Math.easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if(currentTime < duration) {
        setTimeout(animateScroll, increment);
    }
  }
  animateScroll()
}

//t = current time, b = start value, c = change in value, d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
}

function appendLink(id) {
  const link = document.getElementById(id).nextElementSibling.querySelector('.link')
  if (link) {
    link.innerHTML = ("<small>Link to this command: <a href='https://amiaopensource.github.io/ffmprovisr/index.html#" + id + "'>https://amiaopensource.github.io/ffmprovisr/index.html#" + id + "</a></small>")
  }
}

function moveToRecipe(id) {
  document.getElementById(id).checked = true;
  scrollTo(document.body, 0, 1000); 
  appendLink(id)
}

// open recipe window if a hash is found in URL
if (window.location.hash) {
  id = window.location.hash.slice(1)
  moveToRecipe(id)
}

// add hash URL when recipe is opened
const recipes = document.querySelectorAll('label[class="recipe"]')
recipes.forEach(function(item, i){
  item.addEventListener("click", function(){
    id = this.getAttribute("for");
    window.location.hash = (id)
    appendLink(id)
  })
})


// open recipe when clicked
const links = document.querySelectorAll('a')
links.forEach(function(item, i){

  item.addEventListener("click", function(){
  intralink = this.getAttribute("href")
  if (intralink[0] == "#") {
    moveToRecipe(intralink.substring(1))
  }
})
})


function getCheckedBoxes(checkboxes) {
  var checkboxesChecked = [];
  for (var i = 0; i < checkboxes.length; i++) {
     if (checkboxes[i].checked) {
        checkboxesChecked.push(checkboxes[i]);
     }
  }
  return checkboxesChecked.length > 0 ? checkboxesChecked : null;
}

// Collapse all recipes when button is clicked
document.getElementById('toggle-expand-collapse-all').addEventListener("click", function(){
  const checkboxes = document.querySelectorAll('input[type=checkbox]')
  var checked = getCheckedBoxes(checkboxes);

  if (checked) {
    // Collapse all
    document.querySelectorAll('input[type=checkbox]').forEach(function(item, i){
      item.checked = false;
      })
  } else {
    // Expand all
    document.querySelectorAll('input[type=checkbox]').forEach(function(item, i){
    item.checked = true;
    })
  }
})


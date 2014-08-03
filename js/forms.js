$(document).ready(function() {
  
  var $question = $('.question'),
      $nextQ = $('.next-question');

  $question.hide();
  $question.first().show();

  $nextQ.click(function() {
    $question.next().slideDown("slow");
  });
});
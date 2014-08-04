$(document).ready(function() {
  
  $('#generate').click(function(){
    $('#command_line').val("ffmpeg " + $('#input_name').val() + " " + $('#output_name').val())
  });

});

$(document).ready(function() {

  $( "#show_display_info" ).click(function() {
    $( ".display_info" ).toggle();
  });

  $( "#show_web" ).click(function() {
    $( ".web" ).toggle();
  });

  $( "#show_add_subtitles" ).click(function() {
    $( ".add_subtitles" ).toggle();
  });

  $('#generate').click(function(){
    $('#command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val() + 
      " " + $('#output_name').val())
  });

  $('#display_generate').click(function(){
    $('#display_command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val())
  });

  $('#web_generate').click(function(){
    $('#web_command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val())
  });

  $('#add_subtitles_generate').click(function(){
    $('#command_line').val("ffmpeg" + 
      " -i " + $('#input_name').val() + 
      " " + $('#output_name').val())
  });


});
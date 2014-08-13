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

  $( "#show_add_audio_track" ).click(function() {
    $( ".add_audio_track" ).toggle();
  });

  $( "#show_remove_audio_track" ).click(function() {
    $( ".remove_audio_track" ).toggle();
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
    $('#subtitles_command_line').val("ffmpeg" + 
      " -i " + $('#subtitles_input_name').val() + " -vf subtitles=" + $('#subtitles_name').val() + " " + $('#subtitles_output_name').val())
  });

  $('#add_audio_track_generate').click(function(){
    $('#add_audio_track_command_line').val("ffmpeg" + 
      " -i " + $('#audio_input_name').val() + " -i " + $('#audio_track_name').val() + " " + $('#audio_output_name').val())
  });

  $('#remove_audio_track_generate').click(function(){
    $('#remove_audio_track_command_line').val("ffmpeg" + 
      " -i " + $('#r_audio_input_name').val() + " " + $('#r_audio_track_name').val() + " -vcodec copy -an " + $('#r_audio_output_name').val())
  });

});
$(document).ready(function() {

  $( ".reload" ).click(function() {
    location.reload();
  });

  $( "#show_display_info" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".display_info" ).show();
  });

  $( "#show_web" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".web" ).show();
  });

  $( "#show_add_subtitles" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".add_subtitles" ).show();
  });

  $( "#show_add_audio_track" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".add_audio_track" ).show();
  });

  $( "#show_remove_audio_track" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".remove_audio_track" ).show();
  });

  $( "#show_webm_for_web" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".webm_for_web" ).show();
  });

  $( "#show_h264_for_web" ).click(function() {
    $( "#formloader > div" ).hide();
    $( ".h264_for_web" ).show();
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

  $('#webm_for_web_generate').click(function(){
    $('#webm_for_web_command_line').val("ffmpeg" + 
      " -i " + $('#webm_input_name').val() + 
      " -codec:v libvpx -quality good -cpu-used 0 -b:v 500k -qmin 10 -qmax 42 -maxrate 500k -bufsize 1000k -threads 4 -vf scale=-1:480 -codec:a libvorbis -b:a 128k " + 
      $('#webm_output_name').val())
  });

  $('#h264_for_web_generate').click(function(){
    $('#h264_for_web_command_line').val("ffmpeg" + 
      " -i " + $('#h264_input_name').val() + 
      " -codec:v libx264 -profile:v high -preset slow -b:v 500k -maxrate 500k -bufsize 1000k -vf scale=-1:480 -threads 0 -codec:a libfdk_aac -b:a 128k " + 
      $('#h264_output_name').val())
  });

});
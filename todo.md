TO DO

ffmpeg questions and answers:

Examples via http://www.catswhocode.com/blog/19-ffmpeg-commands-for-all-needs

Getting infos from a video file
ffmpeg -i video.avi
Turn X images to a video sequence
ffmpeg -f image2 -i image%d.jpg video.mpg
This command will transform all the images from the current directory (named image1.jpg, image2.jpg, etc…) to a video file named video.mpg.

Turn a video to X images
ffmpeg -i video.mpg image%d.jpg
This command will generate the files named image1.jpg, image2.jpg, …

The following image formats are also availables : PGM, PPM, PAM, PGMYUV, JPEG, GIF, PNG, TIFF, SGI.

Encode a video sequence for the iPpod/iPhone
ffmpeg -i source_video.avi input -acodec aac -ab 128kb -vcodec mpeg4 -b 1200kb -mbd 2 -flags +4mv+trell -aic 2 -cmp 2 -subcmp 2 -s 320x180 -title X final_video.mp4
Explanations :

Source : source_video.avi
Audio codec : aac
Audio bitrate : 128kb/s
Video codec : mpeg4
Video bitrate : 1200kb/s
Video size : 320px par 180px
Generated video : final_video.mp4
Encode video for the PSP
ffmpeg -i source_video.avi -b 300 -s 320x240 -vcodec xvid -ab 32 -ar 24000 -acodec aac final_video.mp4
Explanations :

Source : source_video.avi
Audio codec : aac
Audio bitrate : 32kb/s
Video codec : xvid
Video bitrate : 1200kb/s
Video size : 320px par 180px
Generated video : final_video.mp4
Extracting sound from a video, and save it as Mp3
ffmpeg -i source_video.avi -vn -ar 44100 -ac 2 -ab 192 -f mp3 sound.mp3
Explanations :

Source video : source_video.avi
Audio bitrate : 192kb/s
output format : mp3
Generated sound : sound.mp3
Convert a wav file to Mp3
ffmpeg -i son_origine.avi -vn -ar 44100 -ac 2 -ab 192 -f mp3 son_final.mp3
Convert .avi video to .mpg
ffmpeg -i video_origine.avi video_finale.mpg
Convert .mpg to .avi
ffmpeg -i video_origine.mpg video_finale.avi
Convert .avi to animated gif(uncompressed)
ffmpeg -i video_origine.avi gif_anime.gif
Mix a video with a sound file
ffmpeg -i son.wav -i video_origine.avi video_finale.mpg
Convert .avi to .flv
ffmpeg -i video_origine.avi -ab 56 -ar 44100 -b 200 -r 15 -s 320x240 -f flv video_finale.flv
Convert .avi to dv
ffmpeg -i video_origine.avi -s pal -r pal -aspect 4:3 -ar 48000 -ac 2 video_finale.dv
Or:

ffmpeg -i video_origine.avi -target pal-dv video_finale.dv
Convert .avi to mpeg for dvd players
ffmpeg -i source_video.avi -target pal-dvd -ps 2000000000 -aspect 16:9 finale_video.mpeg
Explanations :

target pal-dvd : Output format
ps 2000000000 maximum size for the output file, in bits (here, 2 Gb)
aspect 16:9 : Widescreen
Compress .avi to divx
ffmpeg -i video_origine.avi -s 320x240 -vcodec msmpeg4v2 video_finale.avi
Compress Ogg Theora to Mpeg dvd
ffmpeg -i film_sortie_cinelerra.ogm -s 720x576 -vcodec mpeg2video -acodec mp3 film_terminÃ©e.mpg
Compress .avi to SVCD mpeg2
NTSC format:

ffmpeg -i video_origine.avi -target ntsc-svcd video_finale.mpg
PAL format:

ffmpeg -i video_origine.avi -target pal-svcd video_finale.mpg
Compress .avi to VCD mpeg2
NTSC format:

ffmpeg -i video_origine.avi -target ntsc-vcd video_finale.mpg
PAL format:

ffmpeg -i video_origine.avi -target pal-vcd video_finale.mpg
Multi-pass encoding with ffmpeg
ffmpeg -i fichierentree -pass 2 -passlogfile ffmpeg2pass fichiersortie-2
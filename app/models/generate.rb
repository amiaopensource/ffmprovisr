class Generate
  attr_reader :output, :input

  def initialize(input)
    @input = input
  end

  def output
    #concat this shit together
    "ffmpeg #{video_format} #{video_input} #{video_output}"
  end

  def video_format
    if input[:video_format] == "mp4"
      "mp4"
    elsif input[:video_format] == "flv"
      "flv"
    elsif input[:video_format] == "h264"
      "h264"
    else
      nil
    end
  end

  def video_input
    #TODO deny gracefully if not . format
    # if nil, mandelbrot
    if input[:video_input] == ""
      "mandelbrot"
    else
    "-i #{input[:video_input]}"
    end
  end

  def video_output
    #TODO deny gracefully if not . format
    if input[:video_input] == ""
      "new_video.mp4"
    else
    input[:video_output]
  end
end

end
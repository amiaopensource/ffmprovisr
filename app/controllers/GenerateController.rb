class GenerateController < ApplicationController
  enable :sessions

  get '/' do
    erb :'index'
  end

  post '/' do
    @input = params[:input]
    # @output = params[:input][:video_format]
    # session['generate'] = params[:input]
    # @output = Generate.new(session['generate'])
    @middle = Generate.new(@input)
    @output = @middle.output
    erb :'generate'
  end

  get '/generate' do
    erb :'index'
  end


end
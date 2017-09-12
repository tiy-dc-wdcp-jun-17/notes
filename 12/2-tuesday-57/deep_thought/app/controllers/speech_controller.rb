class SpeechController < ApplicationController
  def new
  end

  def create
    # Speaker.new(params[:phrase]).speak
    SpeechJob.perform_later(params[:phrase].gsub("\n", " "))
    redirect_to speech_new_path
  end
end

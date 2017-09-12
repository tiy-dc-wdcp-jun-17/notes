class SpeechJob < ApplicationJob
  queue_as :default

  def perform(phrase)
    Speaker.new(phrase).speak
  end
end

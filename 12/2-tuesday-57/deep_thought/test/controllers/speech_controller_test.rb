require 'test_helper'

class SpeechControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get speech_new_url
    assert_response :success
  end

  test "should get en-queue a job" do
    post speech_url, params: { phrase: "a" }
    assert_redirected_to speech_new_url
  end
end

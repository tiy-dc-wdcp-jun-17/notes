require 'test_helper'

class SpeechJobTest < ActiveJob::TestCase
  test "will callout to the say command" do
    assert_output /say a/ do
      SpeechJob.perform_now("a")
    end
  end
end

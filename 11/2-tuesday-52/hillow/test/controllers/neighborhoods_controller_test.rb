require 'test_helper'

class NeighborhoodsControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get neighborhoods_show_url
    assert_response :success
  end

end

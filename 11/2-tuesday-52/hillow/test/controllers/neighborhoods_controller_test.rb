require 'test_helper'

class NeighborhoodsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @neighborhood = neighborhoods(:one)
  end

  test "should get show" do
    get neighborhood_url(@neighborhood)
    assert_response :success
  end

end

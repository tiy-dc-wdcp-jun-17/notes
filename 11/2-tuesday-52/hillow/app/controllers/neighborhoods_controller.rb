class NeighborhoodsController < ApplicationController
  def index
    @neighborhoods = Neighborhood.all
  end

  def show
    @neighborhood = Neighborhood.find(params[:id])
    @houses = @neighborhood.houses
  end
end

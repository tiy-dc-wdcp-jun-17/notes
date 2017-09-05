class House < ApplicationRecord
  belongs_to :neighborhood

  # return a neighborhood object
  # def neighborhood
  #   Neighborhood.find_by(id: neighborhood_id)
  # end
end

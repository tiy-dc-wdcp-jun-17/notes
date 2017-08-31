class Neighborhood < ApplicationRecord
  has_many :houses

  # def houses
  #   House.where( {neighborhood_id: id} )
  # end
end

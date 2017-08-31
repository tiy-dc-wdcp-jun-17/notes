json.extract! house, :id, :location, :bedrooms, :bathrooms, :description, :created_at, :updated_at
json.url house_url(house, format: :json)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
  neighborhood = Neighborhood.create!(name: Faker::Address.community, postal_code: Faker::Address.postcode, rating: rand(2...5), median_income: Faker::Commerce.price * 1000)

  rand(1..15).times do
    neighborhood.houses.create(location: Faker::StarWars.vehicle, bedrooms: rand(0..5), bathrooms: rand(0..42), description: Faker::StarWars.quote)
  end
end


# create_table "houses", force: :cascade do |t|
#   t.string "location"
#   t.float "bedrooms"
#   t.float "bathrooms"
#   t.text "description"
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.integer "neighborhood_id"
#   t.index ["neighborhood_id"], name: "index_houses_on_neighborhood_id"
# end

House.create
a = _
a
a.errors
reload!
House.create({location: "D.C.", bedrooms:4.9, bathrooms:42, description:"Always two feet from a bathroom!"})
exit!
House.first
Neighborhood.create( name: 'Georgetown', postal_code: '20007', rating: 5, median_income: 139423)
House.first
my_house = House.first
my_house.bedrooms
my_house.bathrooms
my_house.description
my_house = House.first
my_house.description
my_house.bedrooms = 5
my_house
my_house.save
my_house.neighborhood_id = Neighborhood.first.id
my_house.save
my_house
my_house.neighborhood
reload!
my_house = House.first
my_house.neighborhood
my_house.neighborhood.name
exit

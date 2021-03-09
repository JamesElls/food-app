# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

Cook.destroy_all
Food.destroy_all

10.times do
  Cook.create(
    name: Faker::Name.name,
    specialty: Faker::Nation.nationality, 
  )
end


10.times do
  food = Food.create(
    name: Faker::Food.dish,
    )


    5.times do
      food.restaurants.create(
        name: Faker::Restaurant.name,
        address: Faker::Address.full_address, 
      )
    end
end


puts "Seeded #{Cook.all.size} new cooks"
puts "Seeded #{Food.all.size} new foods"
puts "Seeded #{Restaurant.all.size} new restaurants"
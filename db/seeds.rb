require "faker"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
10.times do
  Department.create(
    name: Faker::Commerce.department
  )
  20.times do
    Item.create(
      name: Faker::Commerce.product_name,
      price: Faker::Commerce.price.to_f,
      description: Faker::Lorem.sentence
    )
  end
end


puts "200 items created"

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: "James", bio:"Plant Papa", garden_level: 1000000, password: "12345ABC!", username: "jamesb")
user2 = User.create(name: "Andrea", bio:"plant destroyer", garden_level: 1, password: "54321ABC!", username: "andreaf" )



garden1 = Garden.create(name: "Zen Garden", location: "LA", user_id: user1.id )
garden2 = Garden.create(name: "Zen Garden", location: "LA", user_id: user1.id )
garden3 = Garden.create(name: "Zen Garden", location:  "LA", user_id: user1.id )
garden4 = Garden.create(name: "Zen Garden", location:  "LA", user_id: user1.id )
garden5 = Garden.create(name: "Zen Garden", location:  "LA", user_id: user1.id )
garden6 = Garden.create(name: "Zen Garden", location:  "LA", user_id: user1.id )



plants1 = Plant.create(name: " Montesera", plant_type: "great plant", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)

plants2 = Plant.create(name: " Montesera", plant_type: "great plant", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)


plants3 = Plant.create(name: " Montesera", plant_type: "great plant", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)

plants4 = Plant.create(name: " Montesera", plant_type: "great plant", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)

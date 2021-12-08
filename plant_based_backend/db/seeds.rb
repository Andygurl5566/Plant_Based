# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: "James", bio:"Plant Papa", password: "12345ABC!", username: "jamesb")
user2 = User.create(name: "Andrea", bio:"plant destroyer", password: "54321ABC!", username: "andreaf" )

garden1 = Garden.create(name: "Zen Garden", location: "LA", user_id: user1.id )
garden2 = Garden.create(name: "Flower Garden", location: "NY", user_id: user1.id )
garden3 = Garden.create(name: "Rose Garden", location:  "Front Room", user_id: user2.id )
garden4 = Garden.create(name: "Bunion Garden", location:  "IL", user_id: user2.id )

plants1 = Plant.create(name: " Plant1", plant_type: "great plant1", plant_species: "awesome species", image: "https://previews.123rf.com/images/chfonk/chfonk1707/chfonk170700016/81507535-dark-green-leaves-of-monstera-or-split-leaf-philodendron-monstera-deliciosa-the-tropical-foliage-pla.jpg", care_instructions: "instructions", notes: "some notes..", garden_id: garden1.id)

plants2 = Plant.create(name: " Plant2", plant_type: "great plant2", plant_species: "awesome species", image: "https://bloomscape.com/wp-content/uploads/2021/08/bloomscape_monstera_xl_clay_color-edit.jpg", care_instructions: "instructions", notes: "some notes..", garden_id: garden1.id)


plants3 = Plant.create(name: " Plant3", plant_type: "great plant3", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)

plants4 = Plant.create(name: " Plant 4", plant_type: "great plant4", plant_species: "awesome species", image: "an image", care_instructions: "instructions", notes: "some notes..", garden_id: garden3.id)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create(name: "James", bio:"Plant Papa", password: "12345ABC!", username: "jamesb")
user2 = User.create(name: "Andrea", bio:"plant destroyer", password: "54321ABC!", username: "andreaf" )

garden1 = Garden.create(name: "Zen Garden", location: "Patio", user_id: user1.id )
garden2 = Garden.create(name: "My Porch Garden", location: "Front Porch", user_id: user1.id )
garden3 = Garden.create(name: "Plants to Get Next!", location:  "TBD", user_id: user2.id )
garden4 = Garden.create(name: "Little Garden", location:  "Office Space", user_id: user2.id )

plants1 = Plant.create(name: "Boston Fern", plant_type: " Nephrolepis", plant_species: "Exaltata 'Bostoniensis", image: "https://images.esellerpro.com/3048/I/619/56/Nephrolepis%20boston%20fern-3.jpg",
     care_instructions: "Keep in a shaded area, and water often", notes: "Non toxic for cats, dogs which is great! I don't have to worry about fluffy getting into this plant", garden_id: garden1.id)

plants2 = Plant.create(name: " Swiss Cheese Plant", plant_type: "Monstera", plant_species: "Deliciosa", image: "https://bloomscape.com/wp-content/uploads/2021/08/bloomscape_monstera_xl_clay_color-edit.jpg",
     care_instructions: "Plant in partly shady area with well-draining soil", notes: "Last pruned 10/13", garden_id: garden1.id)

 plants3 = Plant.create(name: "Bikini Bottom Bloomer", plant_type: "Cirly Swirly Plant", plant_species: "Underis-Wateris", image: "https://static.wikia.nocookie.net/spongebobtv/images/2/2d/123-124_Thadd%C3%A4us-Thadd%C3%A4us%27_Zierg%C3%A4rtchen.jpg/revision/latest/scale-to-width-down/300?cb=20100717235319",
        care_instructions: "Submerge in seawater", notes: "Wow, this plant is awesome. 10 out of 10 would recommend", garden_id: garden1.id)

plants4 = Plant.create(name: " Tiger Lily", plant_type: "Liliaceae", plant_species: "Lilium lancifolium", image: "https://backyardhabitats.org/wp-content/uploads/2014/07/P7090516.jpg",
        care_instructions: "Plant in full to partly sunny areas in loamy, well-draining soil.", notes: "Planted on Sept 14th, 2021", garden_id: garden1.id)
       

plants5 = Plant.create(name: "Pilea Plant", plant_type: "Pilea", plant_species: "Peperomioides", image: "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco/https://storage.googleapis.com/gen-atmedia/2/2017/04/2c3a3d86d24920f43a992dbbc48eab5bd45c9e93.jpeg", 
    care_instructions: "Keep alive", notes: "I've kept this plant alive for 13 hours now! The pride is feel in insurmountable #winning", garden_id: garden3.id)

plants6 = Plant.create(name: "Parlor Plant", plant_type: "great plant4", plant_species: "awesome species", image: "https://bloomscape.com/wp-content/uploads/2020/08/bloomscape_parlor-palmloomscape_stone.jpg?ver=279265", 
    care_instructions: "Likes inderect sunlight, water sparingly", notes: "Really liking how easy the maintnance is for this plant!", garden_id: garden3.id)

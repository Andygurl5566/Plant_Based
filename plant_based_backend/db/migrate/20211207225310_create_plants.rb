class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :name
      t.string :plant_type
      t.string :plant_species
      t.string :image
      t.string :care_instructions
      t.string :notes
      t.integer :garden_id

      t.timestamps
    end
  end
end

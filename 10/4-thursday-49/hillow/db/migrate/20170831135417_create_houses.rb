class CreateHouses < ActiveRecord::Migration[5.1]
  def change
    create_table :houses do |t|
      t.string :location
      t.float :bedrooms
      t.float :bathrooms
      t.text :description

      t.timestamps
    end
  end
end

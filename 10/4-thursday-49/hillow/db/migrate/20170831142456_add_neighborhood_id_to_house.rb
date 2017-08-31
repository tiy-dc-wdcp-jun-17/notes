class AddNeighborhoodIdToHouse < ActiveRecord::Migration[5.1]
  def change
    add_column :houses, :neighborhood_id, :integer
    add_index :houses, :neighborhood_id
  end
end

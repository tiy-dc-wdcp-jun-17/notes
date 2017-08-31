class CreateNeighborhoods < ActiveRecord::Migration[5.1]
  def change
    create_table :neighborhoods do |t|
      t.string :name
      t.string :postal_code
      t.float :rating
      t.float :median_income

      t.timestamps
    end
  end

  # def up
  #   create_table :neighborhoods do |t|
  #     t.string :name
  #     t.string :postal_code
  #     t.float :rating
  #     t.float :median_income
  #
  #     t.timestamps
  #   end
  # end
  #
  # def down
  #   drop_table :neighborhoods
  # end
end

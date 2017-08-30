class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.timestamp :open_at
      t.string :location

      t.timestamps
    end
  end
end

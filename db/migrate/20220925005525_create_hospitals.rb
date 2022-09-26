class CreateHospitals < ActiveRecord::Migration[6.1]
  def change
    create_table :hospitals do |t|
      t.string :location
      t.string :name
      t.string :image_url
      t.string :description

      t.timestamps
    end
  end
end

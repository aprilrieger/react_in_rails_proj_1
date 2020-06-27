class CreateApartments < ActiveRecord::Migration[6.0]
  def change
    create_table :apartments do |t|
      t.string :image
      t.string :address
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :country
      t.string :bedrooms
      t.string :bathrooms
      t.string :monthly_rent
      t.references :manager, null: false, foreign_key: true

      t.timestamps
    end
  end
end

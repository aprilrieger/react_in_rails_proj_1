class CreateManagers < ActiveRecord::Migration[6.0]
  def change
    create_table :managers do |t|
      t.string :manager_name
      t.string :manager_phone
      t.time :manager_hours_start
      t.string :manager_hours_stop

      t.timestamps
    end
  end
end

class CreateAssignments < ActiveRecord::Migration[6.1]
  def change
    create_table :assignments do |t|
      t.string :length_of_contract
      t.integer :weekly_pay
      t.string :evaluation
      t.belongs_to :nurse, null: false, foreign_key: true
      t.belongs_to :hospital, null: false, foreign_key: true

      t.timestamps
    end
  end
end

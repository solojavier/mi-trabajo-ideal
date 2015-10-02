class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :username
      t.string :company_attribute_1
      t.string :company_attribute_2
      t.string :company_attribute_3
      t.string :company_attribute_4
      t.string :company_attribute_5
      t.string :action_taken
      t.date :action_date
      t.string :action_place
      t.string :action_result
      t.string :work_attribute_1
      t.string :work_attribute_2
      t.string :work_attribute_3
      t.string :work_attribute_4
      t.string :work_attribute_5
      t.integer :work_attribute_value_1
      t.integer :work_attribute_value_2
      t.integer :work_attribute_value_3
      t.integer :work_attribute_value_4
      t.integer :work_attribute_value_5
      t.integer :work_attribute_selected_index
      t.string :commitment_action
      t.date :commitment_date
      t.time :commitment_time
      t.string :company

      t.timestamps null: false
    end
  end
end

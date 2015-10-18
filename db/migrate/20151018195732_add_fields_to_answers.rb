class AddFieldsToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :action_missing, :text
    add_column :answers, :current_feeling, :integer
    add_column :answers, :responsible, :integer
    add_column :answers, :values, :string
    add_column :answers, :values_description, :string

    remove_column :answers, :action_date
    remove_column :answers, :action_place
    remove_column :answers, :commitment_time
  end
end

class UpdateTest2016 < ActiveRecord::Migration
  def change

	remove_column :answers, :company_attribute_4,  			:string
	remove_column :answers, :company_attribute_5, 			:string
	remove_column :answers, :action_taken,  				:string
	remove_column :answers, :action_missing,  				:text
	remove_column :answers, :action_result, 				:string
	remove_column :answers, :work_attribute_selected_index, :integer
	remove_column :answers, :commitment_action,  			:string
	remove_column :answers, :commitment_date, 				:date

  	add_column :answers, :score_boss_value, 		:integer
  	add_column :answers, :score_company_value, 		:integer
  	add_column :answers, :rank_training_value, 		:integer
  	add_column :answers, :rank_development_value, 	:integer
  	add_column :answers, :rank_work_value, 			:integer
  	add_column :answers, :rank_team_value, 			:integer
  	add_column :answers, :rank_information_value, 	:integer
  	add_column :answers, :rank_voice_value, 		:integer
  	add_column :answers, :rank_voice_boss_value, 	:integer
  	add_column :answers, :rank_know_value, 			:integer
  	add_column :answers, :rank_comunication_value, 	:integer
  	add_column :answers, :rank_security_value, 		:integer
  	add_column :answers, :rank_security_2_value, 	:integer
  	add_column :answers, :rank_expectations_value, 	:integer
  	add_column :answers, :rank_expectations_2_value,:integer
  	add_column :answers, :rank_culture_value, 		:integer
  	add_column :answers, :rank_boss_value, 			:integer
  	add_column :answers, :rank_boss_2_value, 		:integer
  	add_column :answers, :rank_respect_value, 		:integer
  	add_column :answers, :rank_happywork_value, 	:integer
  	add_column :answers, :rank_happywork_2_value, 	:integer
  	add_column :answers, :current_feeling_2_value, 	:integer

  end
end

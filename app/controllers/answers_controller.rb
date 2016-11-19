class AnswersController < ApplicationController
  def index
    @answers = Answer.all
  end

  def new
    @answer = Answer.new(company: params[:company])
  end

  def create
    @answer = Answer.new(answer_params)

    if @answer.save
      redirect_to @answer
    else
      render :new
    end
  end

  def show
    @answer = Answer.find(params[:id])
  end

  private

  def answer_params
    params.require(:answer).permit(:username, :departamento, :antiguedad, :escolaridad, :genero, :edad,
                                    :company_attribute_1, :company_attribute_2, :company_attribute_3, 
                                    # :company_attribute_4, :company_attribute_5,
                                    # :action_taken, :action_missing, :action_result, 
                                    :work_attribute_1,:work_attribute_2, :work_attribute_3, :work_attribute_4, :work_attribute_5,
                                    :work_attribute_value_1, :work_attribute_value_2, :work_attribute_value_3, :work_attribute_value_4, :work_attribute_value_5,
                                    :company_mejora_1, :company_mejora_2, :company_mejora_3, :company_mejora_4 , :company_mejora_5,
                                    # :work_attribute_selected_index,
                                    # :commitment_action, :commitment_date,
                                    :company, 
                                    :current_feeling, 
                                    :responsible,
                                    :values, 
                                    :values_description,
                                    :score_boss_value, :score_company_value, 
                                    :rank_training_value, :rank_development_value, :rank_work_value, :rank_team_value, :rank_information_value, 
                                    :rank_voice_value, :rank_voice_boss_value, :rank_know_value, :rank_comunication_value, :rank_security_value, 
                                    :rank_security_2_value, :rank_expectations_value, :rank_expectations_2_value, :rank_culture_value, :rank_boss_value, 
                                    :rank_boss_2_value, :rank_respect_value, :rank_happywork_value, :rank_happywork_2_value, :current_feeling_2_value)
  end
end

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
    params.require(:answer).permit(:username, :company_attribute_1,
                                   :company_attribute_2, :company_attribute_3,
                                   :company_attribute_4, :company_attribute_5,
                                   :action_taken, :action_missing,
                                   :action_result, :work_attribute_1,
                                   :work_attribute_2, :work_attribute_3,
                                   :work_attribute_4, :work_attribute_5,
                                   :work_attribute_value_1,
                                   :work_attribute_value_2,
                                   :work_attribute_value_3,
                                   :work_attribute_value_4,
                                   :work_attribute_value_5,
                                   :work_attribute_selected_index,
                                   :commitment_action, :commitment_date,
                                   :company, :current_feeling, :responsible,
                                   :values, :values_description)
  end
end

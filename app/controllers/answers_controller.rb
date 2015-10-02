class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :edit, :update, :destroy]

  def index
    @answers = Answer.all
  end

  def show
  end

  def new
    @answer = Answer.new
  end

  def edit
  end

  def create
    @answer = Answer.new(answer_params)

    respond_to do |format|
      if @answer.save
        format.html do
          redirect_to @answer, notice: 'Answer was successfully created.'
        end
        format.json { render :show, status: :created, location: @answer }
      else
        format.html { render :new }
        format.json do
          render json: @answer.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def update
    respond_to do |format|
      if @answer.update(answer_params)
        format.html do
          redirect_to @answer, notice: 'Answer was successfully updated.'
        end
        format.json { render :show, status: :ok, location: @answer }
      else
        format.html { render :edit }
        format.json do
          render json: @answer.errors, status: :unprocessable_entity
        end
      end
    end
  end

  def destroy
    @answer.destroy
    respond_to do |format|
      format.html do
        redirect_to answers_url, notice: 'Answer was successfully destroyed.'
      end
      format.json { head :no_content }
    end
  end

  private

  def set_answer
    @answer = Answer.find(params[:id])
  end

  def answer_params
    params.require(:answer).permit(:username, :company_attribute_1,
                                   :company_attribute_2, :company_attribute_3,
                                   :company_attribute_4, :company_attribute_5,
                                   :action_taken, :action_date, :action_place,
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
                                   :commitment_time, :company)
  end
end

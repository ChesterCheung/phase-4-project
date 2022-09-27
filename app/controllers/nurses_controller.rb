class NursesController < ApplicationController

  # before_action :authorize, only: [:show, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    nurses = Nurse.all
    render json: nurses
  end

  def show
    nurse = Nurse.find_by(id: session[:user_id])
    render json: nurse
  end

  def create
    nurse = Nurse.create!(nurse_params)
    render json: nurse, status: :created
  end

  private

    def nurse_params
      params.permit(:username, :password, :password_confirmation )
    end

    def authorize
      return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity_response(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end

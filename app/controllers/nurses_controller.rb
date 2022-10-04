class NursesController < ApplicationController
  # skip_before_action :authorized, only: [:create, :show, :index]
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    nurses = Nurse.all
    render json: nurses
  end

  def show
    if current_nurse
      render json: current_nurse, include: ["assignments"], status: :ok
    else
      render json: "No current user set", status: :unauthorized
    end
  end

  def create
    nurse = Nurse.create!(nurse_params)
    render json: nurse, status: :created
  end

  private

    def nurse_params
      params.permit(:username, :password, :password_confirmation )
    end

    def render_unprocessable_entity_response(exception)
      render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end

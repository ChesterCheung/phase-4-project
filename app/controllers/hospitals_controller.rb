class HospitalsController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def create
        hospital = Hospital.create!(hospital_params)
        render json: hospital, status: :ok
    end

    def index
        hospital = Hospital.all
        render json: hospital
    end

    # def show
    #     hospital = Hospital.find_by(id: params[:id])
    #     render json: hospital
    # end

    private
    def hospital_params
        params.permit(:name, :location, :description)
    end

    def render_unprocessable_entity_response(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end

end
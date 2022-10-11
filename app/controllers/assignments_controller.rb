class AssignmentsController < ApplicationController
    
    # def create 
    #     assignment = Assignment.create!(assignment_params)
    #     render json: assignment, status: :ok
    # end

    def create
        newNurse = Nurse.find_by(id: session[:nurse_id])
        createAssignment = newNurse.assignments.build(assignment_params)
        if newNurse.id && createAssignment.save
            render json: createAssignment, status: :ok
        else
            render json: {error: "Something went wrong"}, status: :unprocessable_entity
        end
    end

    def index 
        assignments = Assignment.all
        render json: assignments
    end

    def show
        assignment = Assignment.find_by(id:params[:id])
        if assignment
            render json: assignment, status: :ok
        else
            render json: {error: "Assignment not found"}
        end
    end

    def update
        assignment = Assignment.find_by(id:params[:id])
        if assignment
            assignment.update(assignment_params)
            render json: assignment, status: :accepted
        else
            render json: {error: "Assignment not found"}
        end
    end

    def destroy
        assignment = Assignment.find_by(id: params[:id])
        if assignment
            assignment.destroy
            head :no_content
        else
            render json: {error: "Assignment not found"}, status: :not_found
        end
    end

    def user_assignments
        nurse = Nurse.find_by(id: session[:nurse_id])
        render json: nurse.assignments
    end

    private

    def assignment_params
        params.permit(:id, :length_of_contract, :weekly_pay, :evaluation, :hospital_id)
    end
    
end


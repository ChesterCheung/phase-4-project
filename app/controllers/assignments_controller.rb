class AssignmentsController < ApplicationController
    
    # def create 
    #     assignment = Assignment.create!(assignment_params)
    #     render json: assignment, status: :ok
    # end

    def create
        newNurse = Nurse.find_or_create_by(username: params[:username][:username])
        createAssignment = newNurse.assignments.build(assignment_params)
        if newNurse.id && createAssignment.save
            render json: createAssignment, status: :ok
        else
            render json: {errors: ["Something went wrong"]}, status: :unprocessable_entity
        end
    end

    def index 
        assignments = Assignment.all
        render json: assignments
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


    private

    def assignment_params
        params.permit(:length_of_contract, :weekly_pay, :evaluation, :hospital_id)
    end
    
end
# create_table "assignments", force: :cascade do |t|
#     t.string "length_of_contract"
#     t.integer "weekly_pay"
#     t.string "evaluation"
#     t.bigint "nurse_id", null: false
#     t.bigint "hospital_id", null: false

class SessionsController < ApplicationController

    def create
        user = Nurse.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:nurse_id] = user.id
            render json: user
        else
            render json: {errors: ["Not Authorized"]}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
    

end

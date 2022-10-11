class SessionsController < ApplicationController
    

    def login
        user = Nurse.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:nurse_id] = user.id
            render json: user
        else
            render json: {errors: ["Invalid username or password"]}, status: :unauthorized
        end
    end

    def logout
        session.delete :nurse_id
       
    end
    
end

class ApplicationController < ActionController::API
  include ActionController::Cookies
  # before_action :authorized

  def current_nurse
    Nurse.find_by(id: session[:nurse_id])
  end

  private
  # def authorized
  #   return render json: {errors: ["Not Authorized"]}, status: :unauthorized unless session.include? :user_id
  # end

end

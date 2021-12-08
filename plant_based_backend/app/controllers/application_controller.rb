class ApplicationController < ActionController::API
    include ActionController::Cookies
  
  before_action :authorized

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    !!current_user
  end

  def authorized
    render json: {msg: "please log in"} unless logged_in?
  end

end

Rails.application.routes.draw do
  
  resources :assignments, only: [:create, :index, :destroy]
  resources :hospitals, only: [:create, :index, :show]
  resources :nurses, only: [:create, :index, :show]

  #Assignment Routes
  get "/testing", to: "assignments#user_assignments"
  #Hospital Routes
  post "/addhospital", to: "hospitals#create"
  
  #User Routes
  post "/signup", to: "nurses#create"
  get "/me", to: "nurses#show"
  get "/nurses", to: "nurses#index"
  
  # Sessions Routes
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

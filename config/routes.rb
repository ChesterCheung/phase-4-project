Rails.application.routes.draw do
  
  resources :assignments
  resources :hospitals
  # resources :nurses, only: [:create, :index]

  post "/signup", to: "nurses#create"
  post "/login", to: "sessions#create"
  get "/me", to: "nurses#show"
  delete "/logout", to: "sessions#destroy"
  get "/nurses", to: "nurses#index"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

    resources :gardens, only: [:index, :show, :create, :destroy]
    resources :users, only: [:index, :show, :create]
    resources :plants, only: [:index, :show, :create, :destroy]
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"


  end


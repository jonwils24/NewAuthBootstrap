NewAuthDemo::Application.routes.draw do
  resources :users, :only => [:create, :new, :show]
  resource :session, :only => [:create, :destroy, :new]
  
  get "static_pages/home"
  
  get "static_pages/about"
  
  get "static_pages/contact"

  root :to => "static_pages#home"
end

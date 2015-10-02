Rails.application.routes.draw do
  resources :answers

  get '/:company', to: 'answers#new', as: 'index'
end

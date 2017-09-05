Rails.application.routes.draw do
  resources :houses
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :neighborhoods, only: [:index, :show]
  get "/parties/r/us/best/:stupid_shit/:id" => "neighborhoods#show", as: 'lenoard'
end

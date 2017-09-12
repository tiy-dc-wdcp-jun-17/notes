Rails.application.routes.draw do
  get "speech/new"
  post "speech", to: "speech#create"
end

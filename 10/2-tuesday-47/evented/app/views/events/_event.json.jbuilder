json.extract! event, :id, :title, :open_at, :location, :created_at, :updated_at
json.url event_url(event, format: :json)

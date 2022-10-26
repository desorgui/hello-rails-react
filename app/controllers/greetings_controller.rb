class GreetingsController < ApplicationController
  # GET /greetings or /greetings.json
  def index
    render json: Greeting.order('RANDOM()').first.to_json
  end
end

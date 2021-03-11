class Api::RestaurantsController < ApplicationController
    before_action :restaurant_params, only: [:update]
    before_action :food_id, only: [:index, :show, :destroy]


    def index
        restaurants = food_id.restaurants.all
        render json: restaurants
    end

    def show
        restaurants = food_id.restaurants.find(params[:id])
        render json: restaurants
    end

    def create
        restaurant = restaurant_params.resturants.create

        if restaurant.save
            render json: restaurant
        else
            render json: { errors: restaurants.errors }, status: :unprocessable_entitiy
        end

    end

    def update

        restaurant = food_id.restaurants.find(params[:id])

        if restaurant.update(restaurant_params)
            render json: restaurant
        else
            render json: { errors: restaurants.errors }, status: :unprocessable_entitiy
        end

    end

    def destroy
        restaurant = food_id.restaurants.find(params[:id]).destroy
        render json: restaurant
    end

    private
    
    def restaurant_params
        params.require(:restaurant).permit(:name, :address)
    end

    def food_id
        food_id = Food.find(params[:food_id])
    end


end

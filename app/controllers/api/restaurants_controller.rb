class Api::RestaurantsController < ApplicationController
    before_action :restaurant_params, only: [:update, :destroy]
    before_action :food_id, only: [:index, :show]


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

        restaurant = food_id.restaurants.find(params[:food_id])

        if restaurant.update(restaurant_params)
            render json: resturant
        else
            render json: { errors: restaurants.errors }, status: :unprocessable_entitiy
        end

    end

    def destroy
        restaurant = Restaurant.find(params[:id]).destroy
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

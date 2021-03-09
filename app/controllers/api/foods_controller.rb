class Api::FoodsController < ApplicationController

  def index 
    render json: Food.all
  end


  def show 
    @food = Food.find(params[:id])

    render json: @food
  end

  def create
    @food = Food.new(food_params)

    if @food.save
      render json: @food
    else 
      render json: {errors: @food.errors}
    end
  end


  def update
    @food = Food.find(params[:id])

    if @food.update(food_params)
      render json: @food
    else
      render json: {errors: @food.errors}
    end
  end


  def destroy 
    @food = Food.find(params[:id]).destroy 

    render json: @food
  end



  private

  def food_params
    params.require(:food).permit(:name)
  end
end

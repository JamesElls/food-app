class Api::CooksController < ApplicationController

	def index
		render json: Cook.all
	end

	def show
		cook = Cook.find(params[:id])
		render json: cook
	end

	def create
		cook = Cook.new(cook_params)
		if cook.save
			render json: cook
		else
			render json: {error: cook.errors}
		end
	end

	def update
		cook = Cook.find (params[:id])
		cook.update(complete: !cook.complete)
		render json: cook
	end

	def destroy
		render json: Cook.find(params[:id]).destroy
		# render json: {message: '#{cook: name}: This cook has been removed.'}
	end

	private

	def cook_params
		params.require(:cook).permit(:name, :specialty)
	end

end


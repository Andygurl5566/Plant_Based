class GardensController < ApplicationController
   

    def index
        garden = Garden.all 
        render json: garden
    end

    def show
        garden = Garden.find_by(id: params[:id])
        if garden 
            render json: current_user.garden
        else 
            render json: {error: "Garden not found"}, status: :not_found
        end
    end

    def create
        garden = Garden.create(garden_params)
        if garden.valid? 
            render json: garden, status: :created
        else 
            render json: { error: garden.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        garden = Garden.find_by(id: params[:id])
        if garden 
            garden.destroy
            head :no_content
        else  
            render json: { error: "Garden not found"}, status: :not_found
        end
    end

    private

    def garden_params
        params.permit(:name, :location, :user_id)
    end
end

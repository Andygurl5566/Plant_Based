class PlantsController < ApplicationController

    def index
        plants = current_user.plants
        render json: plants.order(created_at: :desc)
    end

    def show
        plant = current_user.plants.find_by(id: params[:id])
        if plant 
            render json: plant
        else 
            render json: {error: "Plant not found"}, status: :not_found
        end
    end

    def create
        plant = Plant.create(plant_params)
        if plant.valid? 
            render json: plant, status: :created
        else 
            render json: { error: plant.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        plant = Plant.find_by(id: params[:id])
        if plant
            plant.update(plant_params)
            render json: plant, status:200
        else 
            render json: { error: "plant not found"}, status: :not_found
        end
    end

    def destroy
        plant = Plant.find_by(id: params[:id])
        if plant 
            plant.destroy
            head :no_content
        else  
            render json: { error: "plant not found"}, status: :not_found
        end
    end

    private

    def plant_params
        params.permit(:name, :plant_species, :image, :care_instructions, :notes, :garden_id)

    end

    def is_authorized
        permitted = current_user.admin? || @item.seller == current_user
        render json: "Accessibility is not permitted", status: :forbidden unless permitted
      end
end

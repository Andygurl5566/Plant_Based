class GardensController < ApplicationController
   

    def index
        garden = current_user.gardens
        render json: garden.order(created_at: :desc)
    end

    def show
        garden = current_user.gardens.find_by(id: params[:id])
        if garden 
            render json: garden
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


    def update
        garden = Garden.find_by(id: params[:id])
        if garden
            garden.update(garden_params)
            render json: garden, status:200
        else 
            render json: { error: "Garden not found"}, status: :not_found
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

    def is_authorized
        permitted = current_user.admin? || @item.seller == current_user
        render json: "Accessibility is not permitted", status: :forbidden unless permitted
      end
      
end

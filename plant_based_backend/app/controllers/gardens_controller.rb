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

end

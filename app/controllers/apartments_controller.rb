class ApartmentsController < ApplicationController
    def index
        @apartments = Apartment.all
        render json: @apartments
    end
      
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
          render json: apartment
        else
          render json: apartment.errors, status: :unprocessable_entity
    end
end
      
      private
      
      def apartment_params
        params.require(:apartment).permit(:image, :address, :city, :state, :zip_code, :country, :bedrooms, :bathrooms, :monthly_rent, :manager)
      end
end

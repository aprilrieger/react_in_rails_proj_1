class ManagersController < ApplicationController
    def index
        @managers = Apartment.all
        render json: @managers
    end
    def create
        manager = Manager.create(manager_params)
        if manager.valid?
          render json: manager
        else
          render json: manager.errors, status: :unprocessable_entity
        end
    end

private
      def apartment_params
        params.require(:manager).permit(:manager_name, :manager_phone, :manager_hours_start :manager_hours_stop)
      end
end

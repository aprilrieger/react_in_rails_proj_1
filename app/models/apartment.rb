class Apartment < ApplicationRecord
  belongs_to :manager, optional: true
end

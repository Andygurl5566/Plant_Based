class GardenSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :user_id, :plants

  has_many :plants
end

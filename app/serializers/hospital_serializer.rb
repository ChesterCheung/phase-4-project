class HospitalSerializer < ActiveModel::Serializer
  attributes :id, :location, :name, :image_url, :description
end

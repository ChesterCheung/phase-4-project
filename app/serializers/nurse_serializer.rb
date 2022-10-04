class NurseSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :assignments
  has_many :hospitals, through: :assignments
end

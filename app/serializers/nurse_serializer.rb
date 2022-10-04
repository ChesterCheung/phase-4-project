class NurseSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :assignments
end

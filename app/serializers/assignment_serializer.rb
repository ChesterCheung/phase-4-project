class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :length_of_contract, :weekly_pay, :evaluation
  has_one :nurse
  has_one :hospital
end

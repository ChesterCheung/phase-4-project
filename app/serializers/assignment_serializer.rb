class AssignmentSerializer < ActiveModel::Serializer
  attributes :id, :length_of_contract, :weekly_pay, :evaluation
  belongs_to :nurse
  belongs_to :hospital
end

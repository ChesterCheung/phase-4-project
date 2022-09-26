class Nurse < ApplicationRecord
    has_secure_password
    has_many :assignments
    has_many :hospitals, through: :assignments
    validates :username, presence: true, uniqueness: true
end

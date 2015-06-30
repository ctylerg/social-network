class User < ActiveRecord::Base
  has_secure_password
  validates_presence_of :password, on: :create
  validates :password, length:{in: 7..20}
  validates :password, confirmation: true
  has_many :squeaks
end

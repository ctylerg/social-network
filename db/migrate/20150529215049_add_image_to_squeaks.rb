class AddImageToSqueaks < ActiveRecord::Migration
  def change
    add_column :squeaks, :image, :string
  end
end

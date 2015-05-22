class SqueaksController < ApplicationController

  def create
    squeak = Squeak.create( squeak_params )
    squeak.user = current_user
    squeak.save!
    redirect_to "/profile"
  end

  def destroy
    Squeak.destroy(params[:id])
    redirect_to "/profile"
  end

  private

  def squeak_params
    params.require(:squeak).permit(:message)
  end

end

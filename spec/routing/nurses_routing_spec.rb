require "rails_helper"

RSpec.describe NursesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/nurses").to route_to("nurses#index")
    end

    it "routes to #show" do
      expect(get: "/nurses/1").to route_to("nurses#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/nurses").to route_to("nurses#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/nurses/1").to route_to("nurses#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/nurses/1").to route_to("nurses#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/nurses/1").to route_to("nurses#destroy", id: "1")
    end
  end
end

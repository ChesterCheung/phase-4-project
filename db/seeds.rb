
puts "Seeding"

nurse1 = Nurse.create!(username: "chester", password: "123")
nurse2 = Nurse.create!(username: "melinda", password: "123")
nurse3 = Nurse.create!(username: "simon", password: "123")

hospital1 = Hospital.create!(location:"New York", name: "Brooklyn Children's Hospital", description: "200 bed freestanding children's hospital")
hospital2 = Hospital.create!(location:"New York", name: "City Children's Hospital", description: "Oldest childrens hospital in New York City")
hospital3 = Hospital.create!(location:"New York", name: "Queens Children's Hospital", description: "Best children's hospital in queens")


assignment1 = Assignment.create!(length_of_contract: "13 weeks", weekly_pay: 2000, evaluation: "Very short staffed", nurse_id: nurse1.id, hospital_id: hospital1.id)
assignment2 = Assignment.create!(length_of_contract: "13 weeks", weekly_pay: 3000, evaluation: "Great facility", nurse_id: nurse1.id, hospital_id: hospital1.id)
assignment3 = Assignment.create!(length_of_contract: "13 weeks", weekly_pay: 2500, evaluation: "Great managers", nurse_id: nurse2.id, hospital_id: hospital3.id)
assignment4 = Assignment.create!(length_of_contract: "13 weeks", weekly_pay: 6000, evaluation: "Extremely short staffed", nurse_id: nurse2.id, hospital_id: hospital2.id)
assignment5 = Assignment.create!(length_of_contract: "13 weeks", weekly_pay: 1500, evaluation: "Great hospital", nurse_id: nurse3.id, hospital_id: hospital2.id)

puts "Done Seeding"





# create_table "assignments", force: :cascade do |t|
#     t.string "length_of_contract"
#     t.integer "weekly_pay"
#     t.string "evaluation"
#     t.bigint "nurse_id", null: false
#     t.bigint "hospital_id", null: false
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
#     t.index ["hospital_id"], name: "index_assignments_on_hospital_id"
#     t.index ["nurse_id"], name: "index_assignments_on_nurse_id"


#   create_table "hospitals", force: :cascade do |t|
#     t.string "location"
#     t.string "name"
#     t.string "image_url"
#     t.string "description"
#     t.datetime "created_at", precision: 6, null: false
#     t.datetime "updated_at", precision: 6, null: false
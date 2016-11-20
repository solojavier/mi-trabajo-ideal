# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151018195732) do

  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "username"
    t.string   "company_attribute_1"
    t.string   "company_attribute_2"
    t.string   "company_attribute_3"
    t.string   "company_attribute_4"
    t.string   "company_attribute_5"
    t.string   "action_taken"
    t.string   "action_result"
    t.string   "work_attribute_1"
    t.string   "work_attribute_2"
    t.string   "work_attribute_3"
    t.string   "work_attribute_4"
    t.string   "work_attribute_5"
    t.integer  "work_attribute_value_1"
    t.integer  "work_attribute_value_2"
    t.integer  "work_attribute_value_3"
    t.integer  "work_attribute_value_4"
    t.integer  "work_attribute_value_5"
    t.integer  "work_attribute_selected_index"
    t.string   "commitment_action"
    t.date     "commitment_date"
    t.string   "company"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.text     "action_missing"
    t.integer  "current_feeling"
    t.integer  "responsible"
    t.string   "values"
    t.string   "values_description"
  end

end

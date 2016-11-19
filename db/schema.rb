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

ActiveRecord::Schema.define(version: 20161118010639) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "answers", force: :cascade do |t|
    t.string   "username"
    t.string   "company_attribute_1"
    t.string   "company_attribute_2"
    t.string   "company_attribute_3"
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
    t.string   "company"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.integer  "current_feeling"
    t.integer  "responsible"
    t.string   "values"
    t.string   "values_description"
    t.string   "departamento"
    t.string   "antiguedad"
    t.string   "escolaridad"
    t.string   "genero"
    t.integer  "edad"
    t.string   "company_mejora_1"
    t.string   "company_mejora_2"
    t.string   "company_mejora_3"
    t.string   "company_mejora_4"
    t.string   "company_mejora_5"
    t.integer  "score_boss_value"
    t.integer  "score_company_value"
    t.integer  "rank_training_value"
    t.integer  "rank_development_value"
    t.integer  "rank_work_value"
    t.integer  "rank_team_value"
    t.integer  "rank_information_value"
    t.integer  "rank_voice_value"
    t.integer  "rank_voice_boss_value"
    t.integer  "rank_know_value"
    t.integer  "rank_comunication_value"
    t.integer  "rank_security_value"
    t.integer  "rank_security_2_value"
    t.integer  "rank_expectations_value"
    t.integer  "rank_expectations_2_value"
    t.integer  "rank_culture_value"
    t.integer  "rank_boss_value"
    t.integer  "rank_boss_2_value"
    t.integer  "rank_respect_value"
    t.integer  "rank_happywork_value"
    t.integer  "rank_happywork_2_value"
    t.integer  "current_feeling_2_value"
  end

end

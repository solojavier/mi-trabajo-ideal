class UpdateColumns < ActiveRecord::Migration
  def change
	add_column	:answers,	:departamento, 	:string
	add_column	:answers,	:antiguedad, 	:string
	add_column	:answers,	:escolaridad, 	:string
	add_column	:answers,	:genero, 	:string
	add_column	:answers,	:edad, 	:integer
	add_column	:answers,	:company_mejora_1, 	:string
	add_column	:answers,	:company_mejora_2, 	:string
	add_column	:answers,	:company_mejora_3, 	:string
	add_column	:answers,	:company_mejora_4, 	:string
	add_column	:answers,	:company_mejora_5, 	:string
  end
end

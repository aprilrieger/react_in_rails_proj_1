# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Apartment = [
{
image:'https://reactstrap.github.io/assets/318x180.svg',
address:'123 Main Street',
city:'San Diego',
state:'Ca',
zip_code:'92110',
country:'USA',
bedrooms:'1',
bathrooms:'1',
monthly_rent:'$1,200',
manager_id: 1
},
{
image='https://reactstrap.github.io/assets/318x180.svg',
address: '456 Mulberry Lane',
city:'El Cajon',
state:'Ca',
zip_code:'92022',
country:'USA',
bedrooms:'4',
bathrooms:'3',
monthly_rent:'$2,400',
manager_id:2
}
].each do |attributes|
  Apartment.create attributes
end

Manager = [
{
manager_name:'Larry McDonald',
manager_phone:'123-456-789',
manager_hours_start:'8:00 AM',
manager_hours_stop:'5:00 PM'
},
{
manager_name:'Sonia McCallister',
manager_phone:'555-555-5555',
manager_hours_start:'6:00 AM',
manager_hours_stop:'4:00 PM'
}
].each do |attributes|
  Manager.create attributes
end
require 'json'

def get_random_string(random_length)
  o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
  (0...random_length).map { o[rand(o.length)] }.join
end

rb_hash = JSON.parse('{ "data": []}')
(0...200).map do |number|
  id = number
  name = get_random_string(5)
  age = rand(100)
  phone = (0...13).map { rand(9) }.join
  phrase = get_random_string(200)
  user = { id: id, name: name, age: age, phone: phone, phrase: phrase }
  rb_hash["data"] << user
end
open('user.json', 'w') do |f|
  f << rb_hash.to_json
end

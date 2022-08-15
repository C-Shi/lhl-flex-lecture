# Hash
# key can be any type of data, but most people use symbol consistently
person = {
  :name => 'John',
  age: 25, #Age key is a symbol type
  'email': 'john@gmail.com',
}

person[:SIN] = 888888888
puts person[:name]

pp person[:SIN]


# Array
# Array is very similar to JavaScript array, with more method
arr = [1, 2, 3, 4, 5]

puts arr[0]
pp arr.length
pp arr.size
pp arr.count
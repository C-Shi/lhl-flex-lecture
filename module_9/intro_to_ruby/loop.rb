### For loop
for i in 0..5
  puts i
end

### While loop
i = 0
while i < 5
  puts i
  i += 1 ## No incremental sign in ruby
end

### Until loop
j = 0
until j == 5 # Exclusive
  puts j
  j += 1
end

### .each loop
['Apple', 'Banana', 'Orange'].each do |fruit|  # do is required here to indicate a block
  puts fruit
end
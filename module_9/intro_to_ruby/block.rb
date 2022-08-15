## Block is a piece of code between do..end
# ['Apple', 'Banada'].each { |fruit| puts fruit }

# 1.upto(3) do |num|
#   puts num
# end

def math (a, b)
  puts "Input #{a} and #{b}"
  result = yield a,b  #yield indicate executing a block
  puts "result is #{result}"
end

math 10, 20 do |a, b|
  a + b
end
## Define function
def sum(a, b)
  a + b
end

## executed function
puts sum 10, 10

def sum_all(*nums)
  sum = 0
  nums.each do |num|
    sum += num
  end
  sum
end
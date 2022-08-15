### Conditional

### If Else Statement
num = 10
if num > 0
  puts 'Positive'
elsif num < 0
  puts 'Negative'
else
  puts 'Zero'
end

### Inline IF
puts num if num > 0
### Ternary Operation
puts num > 0 ? 'Postivie' : 'Negative'

### Unless statement
### unless == if not
if not false
  puts 'True'
end

unless false
  puts 'True'
end

### Case Statement
day = 7
case day
when 6
  puts 'Saturday'
when 7
  puts 'Sunday'
else
  puts 'Weekday'
end
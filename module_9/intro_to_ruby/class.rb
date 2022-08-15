class Vehicle

  @@count = 0

  def self.count
    @@count
  end

  def initialize (year, make, model)
    @year = year
    @make = make
    @model = model
    @@count += 1
  end

  attr_accessor :model

  attr_reader :make
  attr_writer :make

  def info
    puts "This car is a #{@year} #{@make} #{@model}"
  end

  # getter for a instance variable
  def year
    @year
  end

  # setter for a instance variable
  def year= (year)
   @year = year
  end

end

my_car = Vehicle.new 2010, 'Ford', 'Mustang'
your_car = Vehicle.new 2020, 'Honda', 'Civic'

my_car.info


puts Vehicle.count
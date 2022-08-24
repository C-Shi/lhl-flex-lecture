class Pokemon < ApplicationRecord
  # Relation
  has_many :pokemon_types
  has_many :types, through: :pokemon_types

  # Behavior
  def intro
    my_types = types.map { |t| t.name }
    my_types = my_types.join(" and ")
    "My name is #{name}. I am #{weight}lb. I belongs to #{my_types}"
  end

  def index
    "%03d" % id
  end

  # Callback
  after_find do
    @gender = ['F', 'M'].sample
  end

  attr_reader :gender
end

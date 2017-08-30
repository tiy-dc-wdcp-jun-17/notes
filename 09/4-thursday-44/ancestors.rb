require 'date'

class Elephant
  def initialize(name, born_on)
    @name = name
    @born_on = born_on
  end

  attr_accessor :name
  # attr_reader :name
  # def name
  #   @name
  # end

  # attr_writer :name
  # def name=(other)
  #   @name = other
  # end

  def a_method
    self
  end

  def self.repopulate
    3.times.map do
      new("Clone", Time.now)
    end
  end

end

charles = Elephant.new("Charles", Date.new(1972, 6, 12))
charles.name
charles.name=("Charles IV")
charles.name
charles.a_method

def charles.bark
  "woof"
end

charles.bark

Elephant.repopulate

# require 'pry'
# binding.pry

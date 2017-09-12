class Speaker
  attr_reader :phrase
  def initialize(phrase)
    @phrase = phrase.split(" ").reverse.join(" ") 
  end

  def speak
    puts "*" * 40
    cmd = "say #{phrase}"
    puts "Speaking: #{cmd}"
    system(cmd)
    puts "*" * 40
  end
end

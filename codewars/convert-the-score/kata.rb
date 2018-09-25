def scoreboard(string)
  rules = ["nil", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  numbers_pattern = Regexp.new("\\b" + rules.join("\\b|\\b") + "\\b")
  score = []
  string.scan(numbers_pattern).each do |number|
    score << rules.find_index(number)
  end
  score
end

def scoreboard(shout)
  dict = ["nil", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  shout.split(" ").select { |w| dict.include?(w) }.map { |w| dict.index(w) }
end

p scoreboard("Well done guys, three one")
#p scoreboard("The score is four nile")
p scoreboard("The score is four nil")
p scoreboard("new score: two three")
p scoreboard("Arsenal just conceded another goal, two nil")


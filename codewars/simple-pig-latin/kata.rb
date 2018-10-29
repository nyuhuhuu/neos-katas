def pig_it text
  sep = " "
  text.split(sep).map { |word| pig_it_word word }.join(sep)
end

def pig_it_word word
  return word unless /\w/i =~ word
  suffix = "ay"
  word[1..-1] + word[0] + suffix;
end

p pig_it('Pig latin is cool')

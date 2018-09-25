def wave(str)
  wave = []
  str.size.times do |i|
    s = str.dup
    next if s[i] == " "
    s[i] = s[i].upcase
    wave << s
  end
  wave
end

puts wave("two words")

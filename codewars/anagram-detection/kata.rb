def is_anagram(test, original)
  test.is_anagram(original)
end

class String
  def is_anagram(other)
    self.sort == other.sort
  end

  def sort()
    self.downcase.chars.sort.join
  end
end

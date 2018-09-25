# code
def reverse_letters(a, b)
  b.gsub(/./) do |char|
    a.count(char.downcase + char.upcase).times { char.swapcase! }
    char
  end
end

# test
a = "ab"
b = "aba"
modified_b = reverse_letters(a, b);
modified_a = reverse_letters(modified_b, a);
p modified_a + modified_b

def crack(text)
  text.tr!("a-z", "b-za") until text.include?("price")
end


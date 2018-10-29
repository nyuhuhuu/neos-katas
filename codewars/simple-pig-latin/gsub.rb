def pig_it text
  text.gsub(/(\w)(\w+)?/, '\2\1ay')
end

p pig_it('Pig latin is cool')

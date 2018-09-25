class String
  def rot(num)
    self.split("").collect { |ch|
      if ch =~ /^[a-z]$/
	      ((ch.ord + num - 'a'.ord) % 26 + 'a'.ord).chr
      else
	      ch
      end
    }.join("")
  end
end

def crack(text)
  26.times { |num|
    solution = text.rot(num)
    return solution if solution =~ /test/ or solution =~ /price/
  }
end

secret = "ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk"
p crack(secret)

p crack('jxyijuijsqiufqiiut')
p crack('btejeuijtuftu')
p crack('naqguvfgrfg')

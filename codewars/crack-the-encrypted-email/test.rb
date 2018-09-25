ALPHA = ("a".."z").to_a

def crack_sol(text)
  return text if text.match(/price|money/)
  key = Hash[ALPHA.zip(ALPHA.rotate 1)]
  crack text.each_char.inject(""){|e, char| e + key[char]}
end

test1 = "ikhcxvmutgdknimykxlahluxzbgvhffngbvtmbhgehpxkzxetmhikbvxlurmabkmrixkvxgmhgmnxlwtrtgwkxwnvxfbedlatdxikbvxlurtmextlmhgxwheetk"
test2 = "uwtojhygfspwzuykwjxmtxtsrtsifdofszfwdymjsnsymqtbjwuwnhjxytybtitqqfwxfsiknkydhjsyxktwrjinzrxnejiljqfytxfsiymwjjitqqfwxfsiybjsydhjsyxktwqfwljljqfytx"

rot = ->(text,n) {
  key = Hash[('a'..'z').to_a.zip(('a'..'z').to_a.rotate n)]
  text.each_char.inject(""){|e, char| e + key[char]}
}

random1 = ('a'..'z').to_a.shuffle + %w(price percent dollar gelato fresho mama cents discount sale)
random2 = ('a'..'z').to_a.shuffle + %w(price percent dollar gelato fresho mama cents discount sale)
random3 = ('a'..'z').to_a.shuffle + %w(price percent dollar gelato fresho mama cents discount sale)


random1 = rot.call(random1.join, 8)
random2 = rot.call(random2.join, 14)
random3 = rot.call(random3.join, 20)

random1answer = crack(random1)

puts "Message one"
Test.expect(crack(test1) == "projectbankruptfreshosbegincommunicationlowergelatopricesbythirtypercentontuesdayandreducemilkshakepricesbyatleastonedollar")  

puts "Message two"
Test.expect(crack(test2) == "projectbankruptfreshosonmondayjanuarytheninthlowerpricestotwodollarsandfiftycentsformediumsizedgelatosandthreedollarsandtwentycentsforlargegelatos")  

puts "Random message 1"
Test.expect(crack(random1) == crack(random1))

puts "Random message 2"
Test.expect(crack(random2) == crack(random2))

puts "Random message 3"
Test.expect(crack(random3) == crack(random3))

Test.describe("random rots") do
  20.times {
    random = ('a'..'z').to_a.shuffle + %w(price percent dollar gelato fresho money cents discount sale).shuffle
    random = rot.call(random.join, rand(26))
    answer = crack_sol(random)
    Test.expect(crack(random) == answer)
  }
end

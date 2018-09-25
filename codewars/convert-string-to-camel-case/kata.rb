def to_camel_case(str)
  str.gsub(/-(\w)/) { |m| $1.upcase }
end

p to_camel_case("the-stealth-warrior")

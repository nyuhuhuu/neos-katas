def printer_error(s)
  error_count = s.scan(/[n-z]/).length
  total_length = s.length
  return "#{error_count}/#{total_length}"
end

s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
p printer_error(s)

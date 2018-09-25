def solve (numbers)
  numbers.each do |n|
    s = find_solution(n, numbers)
    if s.size == numbers.size
      return s
    end
  end
end

def find_solution(n, numbers, solution=[])
  a = n / 3 if n % 3 == 0
  b = n * 2
  if numbers.include?(a)
    return find_solution(a, numbers - [n], solution + [n])
  elsif numbers.include?(b)
    return find_solution(b, numbers - [n], solution + [n])
  end
  return solution + [n]
end

p solve([12,3,9,4,6,8]) # [9,3,6,12,4,8]

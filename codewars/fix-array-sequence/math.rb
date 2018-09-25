def solve(numbers)
  numbers.sort_by{ |x| [-count_factor(x, 3), count_factor(x, 2)] }
end

def count_factor(n, f)
  res = 0
  while n % f == 0
    n /= f
    res += 1
  end
  res
end

p solve([12,3,9,4,6,8]) # [9,3,6,12,4,8]


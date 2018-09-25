def solve (numbers)
  ordered = []
  while not numbers.empty?
    last = find_last_number(numbers)
    ordered.unshift(last)
    numbers.delete(last)
  end
  ordered
end

def find_last_number (numbers)
  numbers.select do |n|
    a = n / 3 if n % 3 == 0
    b = n * 2
    not numbers.include? a and not numbers.include? b
  end.pop
end

p solve([12,3,9,4,6,8]) # [9,3,6,12,4,8]

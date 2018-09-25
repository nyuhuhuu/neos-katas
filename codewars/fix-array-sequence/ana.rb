def solve (numbers)
  pointer = 0
  while pointer < numbers.size - 1
    n = numbers[pointer]
    a = if n % 3 == 0 then n / 3 else nil end
    b = n * 2
    if numbers.include? a
      numbers.delete(a)
      numbers = numbers[0..pointer] + [a] + numbers[pointer+1..-1]
      pointer += 1
    elsif numbers.include? b
      numbers.delete(b)
      numbers = numbers[0..pointer] + [b] + numbers[pointer+1..-1]
      pointer += 1
    else
      numbers = numbers[pointer+1..-1] + numbers[0..pointer]
      pointer = 0
    end
  end
  numbers
end

p solve([12,3,9,4,6,8]) # [9,3,6,12,4,8]

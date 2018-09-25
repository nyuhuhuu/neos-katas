require 'date'

def most_frequent_days(year)
  year_start = Date.parse("01/01/#{year}")
  year_end = Date.parse("31/12/#{year}")
  year_range = [*year_start..year_end]

  names = %w(Monday Tuesday Wednesday Thursday Friday Saturday Sunday)
  days = names.map.with_index { |day, i| [day, year_range.count { |x| x.cwday == i + 1 }]}.to_h
  days = days.select { |k| days[k] > 52 }

  return days.keys
end

p most_frequent_days(1984)

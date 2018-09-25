def display_board(board, width)
  result = ""
  board.each_with_index do |char, index|
    result += " " + char + " "
    if (index + 1) % width == 0 and index != board.length - 1
      dash_count = (width * 3) + (width - 1)
      result += "\n" + ("-" * dash_count) + "\n"
    elsif index != board.length - 1
      result += "|"
    end
  end
  result
end

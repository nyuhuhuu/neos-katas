def display_board(board, width)
  dashed_line = "\n" + "-" * (width * 4 - 1) + "\n"
  board.each_slice(width)
    .map { |row| " " + row.join(" | ") + " " }
    .join(dashed_line)
end

print display_board(["O", "X", " ", " ", "X", " ", "X", "O", " "],3)
print "\n"

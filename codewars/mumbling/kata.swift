func accum(_ word: String) -> String {
    let words = word.enumerated().map({ (offset: Int, char: Character) -> String in
        let first = String(char).uppercased()
        let rest = String(repeating: char, count: offset).lowercased()
        return first + rest
    })
    return words.joined(separator: "-")
}

print(accum("abcd"), "A-Bb-Ccc-Dddd")
print(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
print(accum("cwAt"), "C-Ww-Aaa-Tttt")

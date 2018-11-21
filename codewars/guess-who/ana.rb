class GuessWho

  def initialize(character)
    @character = character
    @counter = 0
    @characteristics = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
                        ["Pierre",["Male","Mustache","Brown eyes","Brown hair","Big mouth","Small nose"]],
                        ["Jean",["Male","White hair","Big nose","Big mouth","Blue eyes"]],
                        ["Amelie",["Female","Hat","Brown hair","Small mouth","Long hair","Brown eyes","Small nose"]],
                        ["Mirabelle",["Female","Black hair","Earrings","Small mouth","Brown eyes","Big nose"]],
                        ["Isabelle",["Female","Blonde hair","Glasses","Hat","Small mouth","Small nose","Brown eyes"]],
                        ["Antonin",["Male","Brown eyes","Black hair","Small nose","Big mouth"]],
                        ["Bernard",["Male","Brown eyes","Brown hair","Small nose","Hat"]],
                        ["Owen",["Male","Blue eyes","Blonde hair","Small nose","Small mouth"]],
                        ["Dylan",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Bald","Beard"]],
                        ["Herbert",["Male","Brown eyes","Blonde hair","Big nose","Small mouth","Bald"]],
                        ["Christine",["Female","Blue eyes","Blonde hair","Small nose","Small mouth","Long hair"]],
                        ["Luc",["Male","Brown eyes","White hair","Small nose","Small mouth","Glasses"]],
                        ["Cecilian",["Male","Brown eyes","Ginger hair","Small nose","Small mouth"]],
                        ["Lionel",["Male","Brown eyes","Brown hair","Big nose","Big mouth","Mustache"]],
                        ["Benoit",["Male","Brown eyes","Brown hair","Small mouth","Small nose","Mustache","Beard"]],
                        ["Robert",["Male","Blue eyes","Brown hair","Big nose","Big mouth"]],
                        ["Charline",["Female","Brown hair","White hair","Small nose","Big mouth"]],
                        ["Renaud",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Mustache"]],
                        ["Michel",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Beard"]],
                        ["Pierre-Louis",["Male","Blue eyes","Brown hair","Small nose","Small mouth","Bald","Glasses"]],
                        ["Etienne",["Male","Brown eyes","Blonde hair","Small nose","Small mouth","Glasses"]],
                        ["Henri",["Male","Brown eyes","White hair","Small nose","Big mouth","Hat"]],
                        ["Damien",["Male","Brown eyes","Blonde hair","Small nose","Big mouth","Hat"]]]
    @main_characteristics = @characteristics.to_h[@character]
  end

  def guess(guess)
    @counter += 1
    if @character == guess
      ["Correct! in #{@counter} turns"]
    elsif name?(guess)
      [@character]
    elsif hit?(guess)
      names_by(guess)
    else
      names_opposite_by(guess)
    end
  end

  def names_by(characteristic)
    @characteristics.select! { |person| person[1].include?(characteristic) }
    names
  end

  def names_opposite_by(characteristic)
    @characteristics.reject! { |person| person[1].include?(characteristic) }
    names
  end

  def hit?(guess)
    # character = @characteristics.select { |person| person[0] == @character }
    # character[0][1].include?(guess)
    @main_characteristics.include?(guess)
  end

  def name?(guess)
    names.include?(guess)
  end

  def names
    #@characteristics.to_h.keys
    @characteristics.map { |person| person[0] }
  end
end

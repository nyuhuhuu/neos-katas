function GuessWho (person){
  this.person = person
  this.turns = 0
  this.suspects = [["Jean-Claude",["Male","Glasses","Brown eyes","Bald","White hair","Small mouth","Small nose"]],
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
  this.personChars = this.suspects.filter(suspect => suspect[0] === this.person)[0][1]

}

GuessWho.prototype.guess = function (guess){
  this.turns++
  if (guess == this.person) {
    return [`Correct! in ${this.turns} turns`]
  }

  if (this.getNames().includes(guess)) {
    this.filterByName(guess)
    return this.getNames()
  } 

  this.filterByChar(guess)
  return this.getNames()
};

GuessWho.prototype.matchesChar = function(char) {
  return this.personChars.includes(char)
}

GuessWho.prototype.getNames = function() {
  return this.suspects.map(suspect => suspect[0])
}

GuessWho.prototype.filterByName = function(name) {
  this.suspects = this.suspects.filter(suspect => suspect[0] != name)
}

GuessWho.prototype.filterByChar = function(char) {
  const match = this.matchesChar(char)
  this.suspects = this.suspects.filter(suspect => {
    const chars = suspect[1]
    return match ? chars.includes(char) : !chars.includes(char)
  })
}

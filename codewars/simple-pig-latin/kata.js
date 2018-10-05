function pigIt(str){
  const sep = " ";
  const suffix = "ay";
  return str.split(sep).map(word => {
    if (!/[a-z]/i.test(word)) return word;
    return word.slice(1) + word[0] + suffix;
  }).join(sep);
}

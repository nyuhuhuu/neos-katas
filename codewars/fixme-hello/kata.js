class Dinglemouse {

  setAge(age) {
    this.age = age
    return this
  }

  setSex(sex) {
    this.sex = sex
    return this
  }

  setName(name) {
    this.name = name
    return this
  }

  hello() {
    const chunks = Object.keys(this).map((prop) => {
      switch (prop) {
      case "name": return `My name is ${this.name}.`
      case "age": return `I am ${this.age}.`
      case "sex": return `I am ${this.sex == 'M' ? "male" : "female"}.`
      }
    })
    return ["Hello."].concat(chunks).join(" ")
  }

}

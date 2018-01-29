function shout(string) {
  return string.toUpperCase()
}

function logshout(string) {
  console.log(string.toUpperCase())
}

function logwhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  if (string === "I love you, Grandma") {
    return "I love you, too."
  }
  else if (string === string.toUpperCase()) {
    return "Yes INDEED"
  }
  else {
    return "I can't hear you!"
  }
}

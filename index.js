function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string) {
  var param = string
  if (param.toLowerCase() === param) {
    return "I can\'t hear you!"
  } else if (param.toUpperCase() === param) {
    return "YES INDEED!"
  } else if (param === 'I love you, Grandma.') {
    return "I love you, too."
  }
}

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log('hello')
}

function sayHiToGrandma(string) {
  var uppercase = "YES INDEED!"
  uppercase.toUpperCase() === uppercase
  var lowercase = "I can't hear you!"
  lowercase.toLowerCase() === lowercase



  if(string === uppercase) {
    return uppercase
  } else {
    return lowercase
  }
}

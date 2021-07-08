function shout(someString) {
  return someString.toUpperCase();
}

function whisper(someString) {
  return someString.toLowerCase();
}

function logShout(someString) {
  console.log(someString.toUpperCase());
}

function logWhisper(someString) {
  console.log(someString.toLowerCase());
}

function sayHiToGrandma(greeting) {
  if (greeting === "I love you, Grandma.")
    return "I love you, too."
  else if (greeting === greeting.toLowerCase())
        return "I can't hear you!"
       else if (greeting === greeting.toUpperCase())
              return "YES INDEED!"
}

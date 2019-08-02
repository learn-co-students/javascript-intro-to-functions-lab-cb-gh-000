function shout(s) {
  return s.toUpperCase();
}
function whisper(s) {
  return s.toLowerCase();
}
function logShout(s) {
  console.log(s.toUpperCase())
}
function logWhisper(s) {
  console.log(s.toLowerCase())
}
function sayHiToGrandma(s) {
  let s1 = s.toUpperCase();
  if(s1 === s) {
    return "YES INDEED!"
  } else if (s === "I love you, Grandma.") {
    return "I love you, too."
  }
  else {
    return "I can't hear you!"
  }
}

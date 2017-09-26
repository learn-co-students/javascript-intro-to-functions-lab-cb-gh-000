function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout (string) {
  var i = shout(string);
  console.log(i);
}

function logWhisper (string) {
  var i = whisper(string);
  console.log(i);
}

function sayHiToGrandma (string){
  if (string === "I love you, Grandma.")
    return "I love you, too.";
  else if (string === string.toUpperCase())
    return "YES INDEED!";
  else
    return "I can't hear you!";
}

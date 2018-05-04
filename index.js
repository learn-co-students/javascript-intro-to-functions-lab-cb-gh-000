var shout = (string) => string.toUpperCase();
var whisper = (string) => string.toLowerCase();
var logShout = (string) => console.log(shout(string))
var logWhisper = (string) => console.log(whisper(string))
var sayHiToGrandma = function(string) {
  if (string == whisper(string))
    return "I can\'t hear you!"
  else if (string == shout(string))
    return "YES INDEED!"
  else
    return "I love you, too."
}
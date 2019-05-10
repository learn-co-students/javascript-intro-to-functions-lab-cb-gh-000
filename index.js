var shout = (text) => { return text.toUpperCase(); }
var whisper = (text) => { return text.toLowerCase(); }
var logShout = (text) => { console.log(text.toUpperCase()); }
var logWhisper = (text) => { console.log(text.toLowerCase()); }
var sayHiToGrandma = (text) => {
  if (text === text.toLowerCase()) {
    return "I can't hear you!"
  }

  if (text === text.toUpperCase()) {
    return "YES INDEED!";
  }

  return text.toLowerCase() === "I love you, Grandma.".toLowerCase() ? "I love you, too." : "";
}

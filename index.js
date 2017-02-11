function shout(string){
  return string.toUpperCase()
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout() {
  var spy = "hello";
  console.log(spy.toUpperCase());
}
function logWhisper(string) {
  var spy = "HELLO";
  console.log(spy.toLowerCase());
}
function sayHiToGrandma(string) {
  //var he = "hello";
  if (string == string.toLowerCase()) {
    return "I can\'t hear you!"
  } else if (string == string.toUpperCase()) {
    return "YES INDEED!"
  } else if (string == "I love you, Grandma.") {
    return "I love you, too."
  }
}

function shout(string){
    return string.toUpperCase();
}

function whisper(string){
  //receives one argument and returns it in all lowercase
  return string.toLowerCase();
}

function logShout(string){
  //calls console.log() its one argument in all caps
  console.log(string.toUpperCase());
}

function logWhisper(string){
  //calls console.log() its one argument in all caps
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string){

  if (string.toLowerCase() === string){
    //returns "I can't hear you!" if 'string' is lowercase
    return "I can't hear you!";
  }
  else if (string.toUpperCase() === string) {
    //returns "YES INDEED!" is 'string' is uppercase
    return "YES INDEED!";
  }
  else if ("I love you, Grandma." === string) {
    //returns "I love you, too." if 'string' is "I love you, Grandma."
    return "I love you, too.";
  }

}

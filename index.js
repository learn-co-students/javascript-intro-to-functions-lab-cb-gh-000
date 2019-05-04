function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

function sayHiToGrandma(string) {
  var uppercase = string.toUpperCase();
  var lowercase = string.toLowerCase();
  switch (string) {
    case lowercase:
      return "I can't hear you!";
      break;
    case uppercase:
      return  "YES INDEED!"
    case 'I love you, Grandma.':
      return "I love you, too."
      break;
  }
}

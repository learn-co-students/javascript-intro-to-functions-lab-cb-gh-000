function shout(string) {
	return string.toUpperCase()
}

function whisper(string) {
	return string.toLowerCase()
}

function logShout(string) {
	console.log(shout(string))
}

function logWhisper(string) {
	console.log(whisper(string))
}

function sayHiToGrandma(string) {
   var uppercase = shout(string);
   var lowercase = whisper(string);
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

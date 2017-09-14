function shout(string) {
	return string.toUpperCase();
}

function whisper(string) {
	return string.toLowerCase();
}

function logShout(string) {
	console.log(shout(string));
}

function logWhisper(string) {
	console.log(whisper(string));
}

function sayHiToGrandma(string) {
	return string === "I love you, Grandma." ? "I love you, too." : string === whisper(string) ? "I can't hear you!" : string === shout(string) ? "YES INDEED!" : "Nothing";
}

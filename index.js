function shout(word) {
    return word.toUpperCase();
}

function whisper(word) {
    return word.toLowerCase();

}

function logShout(word) {
    console.log(word.toUpperCase());
}

function logWhisper(word) {
    console.log(word.toLowerCase());
}

function sayHiToGrandma(word) {
    if(word === shout(word)) return "YES INDEED!";
    else if(word === whisper(word)) return "I can't hear you!";
    else if(word === "I love you, Grandma.") return "I love you, too.";
}

function shout(string){
    return string.toUpperCase(string)
}
function whisper(string){
    return string.toLowerCase(string)
}
function logShout(string){
    console.log(string.toUpperCase(string))
}
function logWhisper(string){
    console.log(string.toLowerCase(string))
}
function sayHiToGrandma(string) {
    if (string === "hello") {
       return "I can't hear you!"
    }
    else if (string === "HELLO"){
        return "YES INDEED!"
    }
    else {
        return "I love you, too."
    }
}

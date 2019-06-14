function shout(aLine){
    return aLine.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  string=string.toUpperCase()
  console.log(string)
}

function logWhisper(string){
  string=string.toLowerCase()
  console.log(string)
}

function sayHiToGrandma(string){
  var chkL = string.toLowerCase()
  var chkU = string.toUpperCase()
  if(string === chkL){
    return "I can't hear you!"
  }
  else if(string === chkU){
    return "YES INDEED!"
  }
  else if(string === "I love you, Grandma."){
    return "I love you, too."
  }
}

function shout(arg){
  return arg.toUpperCase()
}

function whisper(arg){
  return arg.toLowerCase()
}

function logShout(arg){
  console.log(""+arg.toUpperCase()+"")
}

function logWhisper(arg){
  console.log(""+arg.toLowerCase()+"")
}

function sayHiToGrandma(arg){
  if(arg.toLowerCase() === arg){
    return "I can't hear you!"
  }else if(arg.toUpperCase() === arg){
    return "YES INDEED!"
  }else if(arg == "I love you, Grandma."){
    return "I love you, too."
  }
}

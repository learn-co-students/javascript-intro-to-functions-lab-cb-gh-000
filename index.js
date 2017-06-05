function shout(s)
{
  return s.toUpperCase()
}

function whisper(s){
  return s.toLowerCase()
}

function logShout(s){
  console.log(s.toUpperCase())
}
function logWhisper(s){
  console.log(s.toLowerCase())
}
function sayHiToGrandma(s){

  if(s.toLowerCase() === s){
    return "I can't hear you!"
  }
  else if(s.toUpperCase() === s){
    return "YES INDEED!"
  }
  else if(!(s.toLowerCase() === s && s.toUpperCase() === s)){
    return "I love you, too."
  }
}

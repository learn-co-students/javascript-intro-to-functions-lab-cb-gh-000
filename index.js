global.expect = require('expect')

const babel = require('babel-core')
const jsdom = require('jsdom')
const path = require('path')

function shout(word)
{
  return word.toUpperCase();
}


function whisper(word)
{
  return word.toLowerCase();
}

function logShout(string)
{
  console.log(shout(string))
}

function logWhisper(string)
{
  console.log(whisper(string))
}

function sayHiToGrandma(string)
{
  if(string === "I love you, Grandma.")
  {
    return "I love you, too.";
  }
  else if(string === shout(string))
  {
    return "YES INDEED!"
  }
  else
  {
    return "I can't hear you!"
  }
}

function shout(val)
{
  
return val.toUpperCase();
}

function whisper(val)
{
  return val.toLowerCase();
}

function logShout(val)
{
 console.log(val.toUpperCase()); 
}
function logWhisper(val)
{
   console.log(val.toLowerCase()); 

}
function sayHiToGrandma(val)
{
  var lowercase=val.toLowerCase();
  var uppercase=val.toUpperCase()
  if (val===lowercase)
   return "I can't hear you!";
   else if (val===uppercase)
   return "YES INDEED!";
   else if (val==="I love you, Grandma.")
   return "I love you, too.";
}
   
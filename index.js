// turn to upper case
const shout = (str) => {
  return str.toUpperCase();
};

// turn to lower case
const whisper = (str) => {
  return str.toLowerCase();
};

// turn to lower case
const logShout = (str) => {
  console.log(shout(str));
};

// turn to lower case
const logWhisper = (str) => {
  console.log(whisper(str));
};

// turn to lower case
const sayHiToGrandma = (str) => {
  const lowerCaseStr = str.toLowerCase();
  const upperCaseStr = str.toUpperCase();
  const loveYouStr = 'I love you, Grandma.'

  if (str === lowerCaseStr) {
    return 'I can\'t hear you!';
  }

  if (str === upperCaseStr) {
    return 'YES INDEED!';
  }

  if (str === loveYouStr) {
    return 'I love you, too.';
  }
};
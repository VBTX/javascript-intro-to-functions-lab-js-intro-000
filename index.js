function shout(hello){
  return hello.toUpperCase()
}
function whisper(HELLO){
  return HELLO.toLowerCase()
}
logShout("hello")
function logShout(string){
  return console.log(string.toUpperCase())
}

logWhisper("HELLO")
function logWhisper(string){
  return console.log(string.toLowerCase())
}


function sayHiToGrandma(hello){
  if ('hello'.toLowerCase()) {
    return "I can't hear you!";
  }
}
function sayHiToGrandma(hello){
  if('hello'.toUpperCase()){
    return "YES INDEED!";
  }
  }
  function sayHiToGrandma(string){
  if (string === string.toLowerCase())
  return "I can't hear you!";
  else if (string === "I love you, Grandma.")
  return "I love you, too.";
  else if (string === string.toUpperCase())
  return "YES INDEED!";
}
 sayHiToGrandma("hello");
sayHiToGrandma("HELLO");
sayHiToGrandma("I love you, Grandma.");

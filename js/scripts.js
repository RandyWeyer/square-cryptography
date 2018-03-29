var evenSquare = false;
var sentenceLocation = 0;
var sentenceArray=[];
var squareSize = 0;
var output="";

var removeSpaces = function(str)  {
var result = str.split(' ').join('');
  return result;
}

var findSquareSize = function(str) {
  var squareRootSentence = Math.sqrt(str.length);
  if (squareRootSentence % 1 == 0) {
    evenSquare = true;
    return (Math.sqrt(str.length));
  } else {
    return (Math.floor(Math.sqrt(str.length)));
  }

}

var joinWithSpaces = function(sentenceArray) {
  for (i=0; i<sentenceArray.length; i++) {
    output+=sentenceArray[i]
    output+= sentenceArray[i+squareSize]
    console.log(output);
  }
  return output;
}

var cryptoSquare = function(sentence) {

  var noSpaces = removeSpaces(sentence);

  console.log(noSpaces);

  squareSize = findSquareSize(noSpaces);

    console.log(sentenceArray);

  if (evenSquare == true) {
    for (i=0; i<(noSpaces.length); i++) {
        console.log(sentenceLocation);
        sentenceArray[i] = noSpaces.charAt(sentenceLocation);
        sentenceLocation += 1;
    }
  } else {
    for (i=0; i<(noSpaces.length); i++) {
        console.log(sentenceLocation);
        sentenceArray[i] = noSpaces.charAt(sentenceLocation);
        sentenceLocation += 1;
    }
  }
  console.log(sentenceArray);

  var results = joinWithSpaces(sentenceArray);

  return results;
}

$(document).ready(function(event) {

  $("#cryptoSquare").submit(function(event){
    event.preventDefault();

    var userInput = $("#user-input").val();

    var results = cryptoSquare(userInput);

    $("#results").text(results);
  });
});

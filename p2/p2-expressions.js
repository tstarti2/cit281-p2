/*
    CIT 281 Project 2
    Name: Tyler Startin
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  // Returns a single, random, lowercase letter from the alphabet constant
  const getRandomLetter = function() {
    return alphabet[getRandomInteger(1, alphabet.length)];
};

  for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += getRandomLetter;
  }
  
// Returns a random string with a length between minLength (inclusive) and maxLength (inclusive)
const getRandomString = function(minLength, maxLength) {
    const length = getRandomInteger(minLength, maxLength + 1);
    let result = "";
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return result;
};

// Returns getRandomString() in ascending order
const getSortedString = function(string) {
    return [...string].sort().join("");
};


console.log(getSortedString(getRandomString(10,20)));


// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const polybiusCipherArray = [
    ['a','f','l','q','v'],
    ['b','g','m','r','w'],
    ['c','h','n','s','x'],
    ['d','i/j','o','t','y'],
    ['e','k','p','u','z']
  ];
  const pCO = polybiusCipherArray;
  // Just to have a shorthand.

  function polybiusEncode(input) {
    let returnString = '';
    for (let i = 0; i < input.length; i++) {
      const letter = input[i];

      if (letter === 'j' || letter === 'i') {
        returnString += '42';
      } else if (letter === ' ') {
        returnString += ' ';
      } else {
        // Now, we iterate through pCO. 2d array, so 2 lööps.
        for (let j = 0; j < 5; j++) {
          for (let k = 0; k < 5; k++) {
            if (pCO[j][k] === letter) {
              returnString += (j+1).toString() + (k+1).toString();
            }
          }
        }
      }
    }
    return returnString;
  }

  function polybiusDecode(input) {

    let returnString = '';
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        returnString += ' ';
      } else if (input[i+1] === undefined) {
        return false;
      } else {
        const firstIndex = parseInt(input[i])-1;
        const secondIndex = parseInt(input[i+1])-1;
        returnString += (pCO[firstIndex][secondIndex]).toString();
        i++;
      }
    }

    return returnString;
  }

  function polybius(input, encode = true) {
    if (encode) {
      return polybiusEncode(input);
    } else {
      return polybiusDecode(input);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

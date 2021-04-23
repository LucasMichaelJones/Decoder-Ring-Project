// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function isLegitAlphabet(alphabet) {

    if (alphabet === undefined) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }

    let alphabetTracker = [alphabet[0]];
    for (let i = 1; i < alphabet.length; i++) {
      if (alphabetTracker.includes(alphabet[i])) {
        return false;
      }
    }
    return true; // :)

  }
  
  function substitution(input, alphabet, encode = true) {

    if ( !isLegitAlphabet(alphabet) ) {
      return false;
    } else {

      let resultString = '';
      let lowered = input.toLowerCase();

      if (!encode) {

        for (let i = 0; i < lowered.length; i++) {
          if (lowered[i] === ' ') {
            resultString += lowered[i];
          } else {
            for (let j = 0; j < alphabet.length; j++) {
              if (lowered[i] === alphabet[j]) {
                const asciiDesired = j+97;
                resultString += String.fromCharCode(asciiDesired);
                break;
              }
            }
          }
        }

        return resultString;

      } else {

        for (let i = 0; i < lowered.length; i++) {
          const asciiValue = lowered[i].charCodeAt();
          if (asciiValue > 96 && asciiValue < 123) {
            const index = asciiValue-97;
            resultString += alphabet[index];
          } else {
            resultString += lowered[i];
          }
        }

        return resultString;

      }
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

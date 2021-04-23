// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    if (!shift || shift === 0 || shift > 25 || shift < -25) {
      return false;
    }

    // Account for encoding or decoding.
    if (encode) {
      encodeValue = shift;
    } else {
      encodeValue = (0-shift);
    }


    let resultString = '';
    const lowerInput = input.toLowerCase();

    for (let i = 0; i < lowerInput.length; i++) {
      let asciiValue = lowerInput[i].charCodeAt();
      if (asciiValue > 96 && asciiValue < 123) {
        // If the ASCII code for asciiValue is a lowercase letter, shift
        asciiValue += encodeValue;
        if (!(asciiValue > 96 && asciiValue < 123)) {
          // If the ASCII code for asciiValue is NOT a lowercase letter, fix
          if (asciiValue <= 96) {
            asciiValue += 26;
          } else {
            asciiValue += -26;            
          }
          
        }
      }
      const shiftedChar = String.fromCharCode(asciiValue);
      resultString += shiftedChar;
    }


    return resultString;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

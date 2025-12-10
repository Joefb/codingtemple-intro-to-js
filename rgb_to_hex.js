// RGB To Hex Conversion
// 5 kyu
// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
//
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// Examples (input --> output):
//
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

// Pseudo code
// Im going to use a for loop for practice and fun!
// 1. create string
// 2. create array to hold nums
// 3. iterate array
// 4. if ele = 0 or ele < 0 concat 00 to string
// 5. if ele > 255 concat FF to string
// 6. else concat ele to string(16) to upper
// 7. return string

// After thoughts:
// This was a fun one. I was reminded that js functions return undefined if there
// is no return in the function. Also I had an issue with nums that started
// with 0. Like 05.toString(16) would not be 05 js cuts the 0 so its just 5.
// This was solved by a new function .padStart(2, "0"). This pads the start of
// a string with a "0". 2 is the target lenght of the string. If the string is
// not 2 chars then 0 is added to the start to make it 2 chars.

function rgb(r, g, b) {
  let hexString = "";
  let newArray = [r, g, b];

  for (i = 0; i <= newArray.length - 1; i++) {
    ele = newArray[i];

    if (ele < 0) {
      hexString += "00";
    } else if (ele > 255) {
      hexString += "FF"

    } else {
      hexString += ele.toString(16).padStart(2, "0").toUpperCase();
    }
  }

  return hexString;
}

console.log(rgb(255, 255, 200))
console.log(rgb(00, 05, 200))
console.log(rgb(0, 0, -20))
console.log(rgb(-10, -20, -10))

// Sentence Calculator
// 6 kyu
// https://www.codewars.com/kata/5970fce80ed776b94000008b/train/javascript
//
// Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:
//
//     Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
//     Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
//     Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
//     Other characters: 0 value
//
// Note: input will always be a string

// Psuedo code:
// I can use the index of the alphabet in a string then just add 1
// If the letter is capital then (index + 1) * 2
// To handle nums i can create a nums string or better yet look to see if theres a string function for it

// 1. Create sum var
// 2. Create alphabet var
// 3. Iterate string, 
//    - if ele is in alphabet then sum += index + 1
//    - if ele is capital and in alphabet then sum += (index + 1) * 2
//    - if ele in num then sum += ele index
// 4. Return sum

// After thoughts:
// It works.... but its just ugly looking code.
// Theres gotta be a better cleaner way. Ill submit
// and see how the pros did it in one line!!!!
// Ok! After looking how other people did it.....
// Not trying to toot my own horn but I like mine.
// Its readable and easy to see what the code is doing.

function lettersToNumbers(s) {
  let sum = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let nums = "0123456789";

  for (let i = 0; i <= s.length; i++) {
    letter = s[i];

    if (alphabet.includes(letter)) {
      sum += alphabet.indexOf(letter) + 1;
    }

    if (caps.includes(letter)) {
      sum += (caps.indexOf(letter) + 1) * 2;
    }

    if (nums.includes(letter)) {
      sum += nums.indexOf(letter);
    }
  }
    return sum;
}


console.log(lettersToNumbers("z")); // 170
console.log(lettersToNumbers("I Love You")); // 170
console.log(lettersToNumbers("ILove You")); // 170
console.log(lettersToNumbers("ARE YOU HUNGRY?")); // 356
console.log(lettersToNumbers("Give me 5!")); // 73
console.log(lettersToNumbers("oops, i did it again!")); // 152
console.log(lettersToNumbers("Give me 5!")); //, 73);
console.log(lettersToNumbers("Give me five!")) //, 110);

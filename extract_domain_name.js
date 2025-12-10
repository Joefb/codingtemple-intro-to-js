// Extract the domain name from a URL
// 5 kyu
// URL: https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

// Description:
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
// For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// 1. Split on 'http://'
// 2. Join on space
// 3. Split on 'https://'
// 4. Join on space
// 3. Split on .
// 4. If array[0] === 'www' then return array[1] trim spaces
//    Else return split array[0] trim spaces
//
// After thoughts: After submitting there is a handy string function
// called .replace()! I could have url.replace("http://", " ") then https:// and split on . to an array
// then returned index 0. I should have looked up javascript string functions
// Cool string function!

function domainName(url){
  let splitString = url.split("http://").join(" ").split("https://").join(" ").split(".");

  // Lets use a switch for fun and practice!
  switch(true) {
    case splitString[0].trim() === "www":
      return splitString[1].trim();

    default:
      return splitString[0].trim();
  }
}


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.cnet.com/carbonfive/raygun"))
console.log(domainName("www.xyz.ru"))
console.log(domainName("bob.ru"))
console.log(domainName("poop.ru/rocks"))
console.log(domainName("https://www.cnet.com/carbonfive/raygun"))

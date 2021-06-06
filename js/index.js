// Iteration 1: Names and Input
let hacker1 = "Gian";
let hacker2 = "Vagner";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals
let i = 0;
let num1 = hacker1.length;
let num2 = hacker2.length;
let num3 = (hacker1.length + hacker2.length) / 2;


if(hacker1.length > hacker2.length){
  console.log(`The driver has the longest name, it has ${num1} characters.`);
}else if (hacker1.length < hacker2.length){
  console.log(`It seems that the navigator has the longest name, it has ${num2} characters.`);
}else {
  console.log(`Wow, you both have equally long names, ${num3} characters!`);
}


// Iteration 3: Loops
let splitString = [];

for (let char = 0; char <= hacker1.length; char++) {
  splitString = hacker1.split("");
  splitString.join(' ').toUpperCase();
}


console.log(splitString.join(' ').toUpperCase());
let reverseArray = splitString.reverse();
console.log(reverseArray.join(''));


let result = (hacker1.localeCompare(hacker2));
    if (result == -1) {
  console.log("The driver's name goes first.")
}  else if (result == 1) {
  console.log("Yo, the navigator goes first definitely.")
}  else {
  console.log("What?! You both have the same name?")
}






// Bonus 1

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit nulla tincidunt purus porta malesuada. Nullam finibus scelerisque risus, a mattis magna. Curabitur metus nibh, scelerisque non ultrices sit amet, blandit sed elit. Donec vel urna posuere, consequat magna venenatis, pulvinar libero. Donec accumsan ultrices imperdiet. Quisque blandit ipsum magna, id laoreet turpis lobortis id. Vestibulum at dui sapien.
Donec quis dolor a eros vestibulum commodo. Nunc leo lacus, feugiat at elit a, laoreet luctus arcu. Vestibulum vehicula euismod nisi in accumsan. Vestibulum ac tortor mi. Sed id enim malesuada, venenatis tortor nec, posuere tortor. Maecenas blandit vehicula diam in imperdiet. Nunc tincidunt a nunc vel aliquam. Suspendisse ac ante eu nibh fermentum aliquet vitae aliquet mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod leo id felis semper, accumsan fermentum massa pharetra. Nam sem neque, interdum sit amet tincidunt at, bibendum nec ipsum. Etiam bibendum risus eget quam efficitur, in placerat lacus finibus. Aliquam vel massa ut elit scelerisque efficitur ut et elit. Proin nec semper neque, at consequat odio. Nam ac odio purus.
Pellentesque ac odio vehicula, ultrices ipsum eget, auctor neque. Cras sed est neque. Donec bibendum dolor libero, sit amet euismod sem congue vitae. Morbi molestie ac sapien nec lacinia. Nam ultrices, ligula et faucibus varius, sem mauris condimentum nibh, at rhoncus neque nisl nec nibh. Nulla tristique enim nunc, a congue orci imperdiet eget. Etiam mattis rhoncus diam nec sollicitudin. Etiam congue nunc quis urna vehicula, in malesuada nibh hendrerit. Pellentesque vel turpis et massa luctus cursus id quis libero. Vestibulum ornare elit vitae dolor aliquet, vel ornare purus tristique.`

function countWords(str) {
  let wordCount = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      wordCount++;
    }
  }
  
  return wordCount;
}

console.log(countWords(lorem))

function countSpecificWord(str) {
  const specificWord = 'et'
  let wordCount = 0;
  
  const wordArr = str.split(' ')
  
    for (let i = 0; i < str.wordArr; i++) {
    if (wordArr[i] === specificWord) {
      wordCount++;
    }
  }
  
  return wordCount;
}

console.log(countSpecificWord(lorem))

// Bonus 2

const phraseToCheck = "A man, a plan, a canal, Panama!"

function isPalindrome(str) {
  
  str = str.toLowerCase().replace(/[^A-Za-z]/g, '')
  
  console.log(str)
  
  for (let i = 0; i < str.length/2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false
    }
  }
  
  return true
}

console.log(isPalindrome(phraseToCheck))
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
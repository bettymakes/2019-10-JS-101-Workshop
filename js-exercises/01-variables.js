// Exercises: Variables
// Log something to the console!
console.log("Hello World!");

// 1a) Create a bank account variable
// One equal sign (=) is called an Assignment Operator
var bankAccountValue = 50;
bankAccountValue = 10000000;

const family = 5;
let fruits = 6;

// 1b) Create a statement that says "My bank account value is $x"
//     - Explore single & double quoted strings
//     - Bonus: Template literals
var singleQuotedString = 'A string made with single quotes';

var weather = 'I\'ts raining outside';
var doubleQuotedString = "It's raining outside";

var wisePhrase = "And Pluto said, \"Cats jump over the moon.\"";
var wisePhraseWorkAround = 'And Pluto said, "Cats jump over the moon."'


var bankStatement1 = "My bank account value is 50";
var bankStatement2 = "My bank account value is " + bankAccountValue + ". You're rich!" + family + "members" + fruits + " number of fruits";

// Templatet Literals
var bankStatement3 = `My bank account value is ${bankAccountValue}. You're rich! I have ${family} family members. I like ${fruits} different fruits. I like the number ${4 + 3}`;


// 2) Math'ing! We follow the rules of BEDMAS
var sum = 10 + 3;
var difference = 7 - 4;
var product = 10 * 10;
var quotient = 100 / 2;

var equation = 10 * 2 + 5; // 25
var equation2 = 10 * (2 + 5); // 70


// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.
var currentYear = 2019;
var birthYear = 1924;
var age = currentYear - birthYear;
var ageOutput = `They are ${age} years old.`

console.log(ageOutput);
console.log(`They are ${currentYear - birthYear} years old.`);


// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
var currentAge = 5;
var maxAge = 102;
var amountPerDay = 20;
var lifetimeAmount = (365 * amountPerDay) * (maxAge - currentAge);
var liftimeOutput = `You will need ${lifetimeAmount} to last you until the ripe old age of ${maxAge}.`;

console.log(liftimeOutput);


// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// (0°C × 9/5) + 32 = 32°F
var celcius = 16;
var cToF = (celcius * 9 / 5) + 32;
console.log(`${celcius}°C is ${cToF}°F`);

// (32°F − 32) × 5/9 = 0°C
var fahrenheit = 134;
var fToC = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit}°F is ${fToC}°C.`);







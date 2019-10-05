// Exercises: conditional logic

// Weather Forecaster
// If the temp is greater than 30 deg, "It's too hawt 🔥!"
// If the temp is greater than 0 deg, "It's just right!"
// If the temp is 0 or less, "Brr! It's cold!"

// Comparison Operators
// 10 > 4
// 10 < 4
// 10 <= 4
// 10 >= 4
// "10" == 10 This is a loose equality, we never want to use this
// "10" === 10 This is strick equality, it's what we always want to use

// && << AND operator
// || << OR operator


var temp = 45;

if (temp > 30) {
	console.log("It's hot!!!");
	// console.log("It's just right!");

}
else if (temp > 0) {
	console.log("It's just right!");
	// console.log("It's hot!!!");

}
else {
	console.log("It's cold!")
}



// EXERCISE: What number's bigger?

// Store your age in a variable
// Store your best friend's age in a variable
// Write an if/else statement that logs a message stating who is older
var myAge = 92;
var bestieAge = 105;

if (myAge > bestieAge) {
	console.log("I'm older than my bestie");
} 
else if (myAge < bestieAge) {
	console.log("My bestie is older than me");
}


// EXERCISE: Who's allowed on the ride?

// Store a rider's age in a variable
// Store the rider's height (in cm) in a variable
// Write a "compound" if/else statement that checks if the rider meets the minimum requirements and logs a message to the console
// Rider's need to be 150cm tall, and at least 13 years of age

var riderAge = 12;
var riderHeight = 160;

if (riderAge >= 13) {
	if (riderHeight >= 150) {
		console.log("You're allowed to ride!");
	} 
	else {
		// console.log("You can't ride");
		// console.log("Sorry, you're too short to ride.")
	}
} 
else {
	console.log("You can't ride");
	// console.log("Sorry, you're too young to ride");
}



if (riderAge >= 13 && riderHeight >= 150) {
	console.log("You can ride");
}
else {
	console.log("You can't ride");
}







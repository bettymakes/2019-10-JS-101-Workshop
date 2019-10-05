// Exercises: simple loops
console.log("We're looping now!!!");


// Introducing the FOR loop! 
// for(initial state; condition; iterator/incrementer)
// Print out numbers 0 to 9
console.log(0);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

// The many ways to increment by 1
// i = i + 1
// i += 1
// i++

for (var i = 0; i < 10; i++) {
	console.log(i);
}








// EXERCISE: Multiplication Tables

// Write a "for" loop that will iterate from 0 to 10. For each iteration of the 
// for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18).
// Expected output
// 0 * 9 = 0
// 1 * 9 = 9
// 2 * 9 = 18
// 3 * 9 = 27
// 4 * 9 = 36
// 5 * 9 = 45
// 6 * 9 = 54
// 7 * 9 = 63
// 8 * 9 = 72
// 9 * 9 = 81
// 10 * 9 = 90

for (var i = 0; i < 11; i++) {
	var result = i * 9;

	console.log(`${i} * 9 = ${result}`);
}




// EXERCISE: The even/odd reporter

// Write a "for" loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen 

// This formula checks for even numbers => <number> % 2 === 0 
// This formula checks for odd numbers => <number> % 2 === 1
// Let's understand why!








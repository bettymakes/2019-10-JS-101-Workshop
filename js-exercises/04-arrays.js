// Exercises: Arrays
console.log("We're on Arrays!!!");

// Create an array, store it in a variable
var veggies = ['tomato', 'cucumber', 'celery', 'carrot'];
                // 0         1           2         3

// Getting or accessing values from our array
// Say the name of our array with its position number
veggies[2]; // => "celery"

// Setting a new value
// To change/overwrite an existing value:
veggies[3] = 'pickle';

// To add NEW values I have two options:
// Option 1: through its position #
veggies[4] = 'blueberry';

// Option 2: use the Push function
veggies.push("betty");

// Tell us how many items are in an array
veggies.length // => 6



// EXERCISE: Your top movies

// Create an array that contains the titles of a few of your favourite movies.
var movies = ['Mean girls', 'Black Mirror', 'HighSchoolMusical 1', 'HighSchoolMusical 2', 'HighSchoolMusical 3', 'another movie'];

// Print the amount of movies in the array
movies.length // => 5

// Select the movie that you saw most recently from the array and store that into a variable.
movies[4] // => "HighSchoolMusical 3"

// Log the sentence to the console: "The most recent movie I saw was <movie>"
console.log(`The most recent move I saw was ${movies[4]}.`)



// EXERCISE: Applying loops to Arrays
// Log the sentence to the console for EVERY movie in your list:
// "One of my top favourite movies is: <movie>"
// Hint: You'll end up with 4-5 console.log statements
console.log(`One of my top favourite movies is: ${movies[0]}`);
console.log(`One of my top favourite movies is: ${movies[1]}`);
console.log(`One of my top favourite movies is: ${movies[2]}`);
console.log(`One of my top favourite movies is: ${movies[3]}`);
console.log(`One of my top favourite movies is: ${movies[4]}`);




// Using a for loop, perform the same operation as above
for (var i = 0; i < movies.length; i++) {
	console.log(`One of my top favourite movies is: ${movies[i]}`)
}










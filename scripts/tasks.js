console.log("We're in the home stretch!!");

// ============================================
// ✏️ Let's practice the building blocks
// ============================================
// 🧠 Before we get started on making the ToDo Application work,
// we'll need to work on some final fundamental concepts like
// Browser Events. 
//
// 🧠 This is where you'll begin to see the concepts in 
// the JS Exercises start coming together
// 
// 🧠 Most importantly, the code we'll be writing in this section
// is for 🏀 Practice ONLY 🏀. That means, we'll be commenting out
// the code after we write it. 
//
// 🚫 TL;DR
// Comment out the previous exercise when starting the next one


// 🏀 1. Get the browser to write to the console when someone clicks anywhere in the document
// document.addEventListener('click', function() {
// 	console.log("Document is clicked!");

// 	var heading = document.getElementById('heading');

// 	heading.innerText = "You've been hacked!!!";
// });


// 🏀 2. Change the text of the h1 that displays the page title when someone clicks anywhere in the page



// 🏀 3. Display an alert printing the name of the task
//       when someone clicks any of the tasks
// Hint: We'll need to use `this` keyword
// Bonus: Come back and look at the `event` object, time permitting

// document.getElementsByClassName('task')[0].addEventListener('click', function)
// document.getElementsByClassName('task')[1].addEventListener('click', function)
// document.getElementsByClassName('task')[2].addEventListener('click', function)
// document.getElementsByClassName('task')[3].addEventListener('click', function)
// document.getElementsByClassName('task')[4].addEventListener('click', function)

// var tasks = document.getElementsByClassName('task');

// for(var i = 0; i < tasks.length; i++) {
// 	tasks[i].addEventListener('click', function(event) {
// 		// console.log(event)
// 		alert(`${event.target.innerText}`);
// 	});
// }


// 🏀 4 => (Refactor code above)
// 4a. Write a function that displays an alert
// 4b. Run the function only when any task is clicked

// function handleClickingListItem(event) {
// 	// console.log(event)
// 	alert(`${event.target.innerText}`);
// }

// var tasks = document.getElementsByClassName('task');

// for(var i = 0; i < tasks.length; i++) {
// 	tasks[i].addEventListener('click', handleClickingListItem);
// }




// ============================================
// 🏁 Let's get down to business
// ============================================

// ✅ Now that we've put all the building blocks together ...
// Let's start working on the ToDo Application and get it
// to do what we set out to accomplish:
// 1️⃣ Application marks tasks as complete when clicked
// 2️⃣ Application can mark tasks as incomplete when clicked again
// 3️⃣ Application updates the count of completed tasks


// ✅ Write a function that updates the counter based on 
//    which tasks are completed
// Hint: Start with pseudo-coding
// 1. Get the counter element (target the element with id COUNTER)
// 2. Get the count of the total tasks (target elements with class TASK)
// 3. Get the count of completed tasks (target elements with class IS-COMPLETE)
// 4. Subtract Total Tasks with Completed Tasks to get Remaining Tasks
// 5. Change the inner text of the Counter Element to be Remaining Tasks
// 6. Call the updateCounter function

function updateCounter() {
	var counterEle = document.getElementById('counter');
	var totalTasksCount = document.getElementsByClassName('task').length;
	var completedTasksCount = document.getElementsByClassName('is-complete').length;

	var remainingTasksCount = totalTasksCount - completedTasksCount;

	counterEle.innerText = remainingTasksCount;
}



// ✅ Run the function you just wrote to update the counter
updateCounter();



// ✅ Add an event listener to each of the tasks which will 
//    toggle the 'is-complete' css class when clicked
// Hint: Start with pseudo-coding
// 1. Get all the tasks (target elements with class TASK)
// 2. Create a loop to go through all tasks, adding a click event listener to each
	// 3. Check if task is completed:
		// 4. IF IT IS COMPLETED -- remove the is-complete class
		// 5. IF IT NOT COMPLETED -- add the is-complete class 

var taskEles = document.getElementsByClassName('task');

for (var i = 0; i < taskEles.length; i++) {
	taskEles[i].addEventListener('click', function() {
		if (this.classList.contains('is-complete')) {
			this.classList.remove('is-complete');
		}
		else {
			this.classList.add('is-complete');
		}

		updateCounter();
	});
}





// ============================================
// 🤔 Other thoughts. Keep going!
// ============================================
// 🔘 How can you add more items to the list?
// 🔘 Instead of marking the items as `incomplete`, can
//    we just delete the task altogether?
// 🔘 Instead of counting the remaining tasks, can we count
//    how many tasks we've completed?


// ============================================
// 📝 Final notes
// ============================================
// How do we feel? What have we learned?
// - A lot! Our brains hurt!! 
// - Challenge: Go back and review our code in a few days 
//   from now, you'll be surprised how much more makes sense

// Where else can we write our code?
// - Use any text editors (e.g. Sublime, Atom, VS Code)
// - Create the files on your computer, the file extensions matter:
// - HTML extension => .html        (eg. about.html)
// - CSS extension => .css          (eg. about.css)
// - JavaScript extension => .js    (eg. about.js)


// ============================================
// 📝 Resources
// ============================================
// MDN Browser Events Reference
// https://developer.mozilla.org/en-US/docs/Web/Events

// Today's Slide Deck
// https://docs.google.com/presentation/d/1wZZubgHxDqKtnRRrMZlO-bdWbAG8hq9OjEPGJERmgK0/edit?usp=sharing




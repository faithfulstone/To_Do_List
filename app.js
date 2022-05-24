// let maximumNum = parseInt(prompt("Welcome! Enter your max number:"));
// while (!maximumNum) {
//     maximumNum = parseInt(prompt("Please Enter an actual number"));
// }

// let correctAnswer = Math.floor((Math.random() * maximumNum) + 1);
// console.log(correctAnswer);

// let guess = parseInt(prompt("Enter your first guess"));
// let attempts = 1;

//  while ( parseInt(guess) != correctAnswer ) {
//      if (guess === 'q') break;
//      attempts++;
//      if (guess > correctAnswer) {
//          guess = prompt("Too high! Enter a new guess:");
//      } else {
//          guess = prompt("Too low! Enter a new guess:");
//      }
//  }

//  if (guess === 'q') {
//      console.log("You're a quitter");
//  }else {
//     console.log(`you got it! It took you ${attempts} tries!`);
//  }

// const testScores = {
//     keenan: 80,
//     damon: 67,
//     kim: 89,
//     shawn: 91,
//     marlon: 72,
//     dwayne: 77,
//     nadia: 83,
//     elvira: 97,
//     diedre: 81,
//     vonnie: 60
// }

// let total = 0;
// let students = 0;
// for(let score of Object.values(testScores)) {
//     console.log(score);
//     total += score;
//     students++;

// }

// console.log(`The class average was ${total / students}`);



let input = prompt("Welcome, what would you like to do ");
const todos = ['Collect Eggs', 'Clean Cat Litter Box'];
while ( input != "Quit" && input != "q"){
    if( input === 'list') {
        console.log("********");
        for ( let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("********");
    } else if (input == "new"){
        const newTodo = prompt("Okay, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`)
    }else if (input === 'delete') {
        const index = prompt("Okay, enter an index to delete");
        const deleted = todos.splice(index, 1);
        console.log(`${deleted} has been deleted`);
    }
    input = prompt("Welcome, what would you like to do ");
    
}

console.log("You have quit");
// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
// console.log(cohort.split(""))

// a) Your answer: ['C', 'h', 'a', 'r', 'l', 'i', 'e', ' ', '2', '0', '2', '1']
// b) Verify and explain: when passed an empty string, the split() function will place each index of the string as its own index in an array


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student!
// b) Verify and explain: This function is using string interpolation to place the input into a custom string


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: The map method performs the given inline function on each index and returns an array of the results


// --------------------4) What will this log?

var oddsOnly = [11, 12, 13, 14, 15].filter(value => value % 2 === 0)
// console.log(oddsOnly)

// a) Your answer: [12, 14]
// b) Verify and explain: Despite the function being called oddsOnly, the filter method used is actually selecting all the even numbers


// --------------------5) What will this log?

class Learn {
  constructor(){
    this.student = "George",
    this.cohort = "Charlie",
    this.year = 2021
  }
}
var learnStudent = new Learn
// console.log(learnStudent)

// a) Your answer: {student: "George", cohort: "Charlie", year: 2021}
// b) Verify and explain: logging an instance of a class will return the properties/key-value pairs of that object, organized as an object

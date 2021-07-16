// ASSESSMENT 2: Coding practical questions with Jest

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 15
// Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
// Expected output: "-7 is not divisible by three"
describe('divByThree', () => {
  it('says 15 is divisible by three', () => {
    expect(divByThree(15)).toEqual('15 is divisible by three')
  })
  it('says 0 is divisible by three', () => {
    expect(divByThree(0)).toEqual('0 is divisible by three')
  })
  it('says -7 is not divisible by three', () => {
    expect(divByThree(-7)).toEqual('-7 is not divisible by three')
  })
})


// b) Create the function that makes the test pass.
const divByThree = int => int%3 == 0 ? `${int} is divisible by three` : `${int} is not divisible by three` //implicit return with one-line function



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]

var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

describe('capitalizeFirst', () => {
  it('capitalizes the first letter of each word in an array', () => {
    expect(capitalizeFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
    expect(capitalizeFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])
  })
})

// b) Create the function that makes the test pass.
// call toUpperCase() on the first letter of each entry
const capitalizeFirst = arr => {
  let answer = [] // to hold our solution
  let temp // to hold the capitalized form of the current iteration
  for(let word of arr){
    temp = word.split('')
    temp[0] = temp[0].toUpperCase()
    answer.push(temp.join(''))
  }
  return answer
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenge"
// Expected output: 2

describe('vowelIndex', () => {
  it('tells us the index of the first vowel', () => {
    expect(vowelIndex(vowelTester1)).toEqual(1)
    expect(vowelIndex(vowelTester2)).toEqual(0)
    expect(vowelIndex(vowelTester3)).toEqual(2)
  })
})

// b) Create the function that makes the test pass.
// convert input to array, loop through while using ['a', 'e', 'i', 'o', 'u'].includes(arr[i]). return first truthy response
const vowelIndex = str => {
  let arr = str.split('')
  for(let i=0; i<arr.length; i++){
    if(['a', 'e', 'i', 'o', 'u'].includes(arr[i])){ return i }
  }
}

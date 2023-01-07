'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriverLicense) console.log("I can drive :D")

// FUNCTIONS
// function logger() {
//     console.log("My name is Jonas");
// }

// // calling / running / invoking / executing
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('23');

// FUNCTION DECLARATIONS VS. EXPRESSIONS

// function declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// const age = calcAge1(1998);
// console.log(age)

// // function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1998);

// console.log(age, age2);

// ARROW FUNCTIONS
// function expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// // Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1998);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetirement(1991, 'Weston'));

// FUNCTIONS CALLING OTHER FUNCTIONS
// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     console.log(apples, oranges);
//     const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));

// REVIEWING FUNCTIONS

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// function yearsUntiRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} retires in ${retirement} years`;
//     } else {
//         console.log(`${firstName} has already retired.`)
//         return -1;

//     }

// }
// console.log(yearsUntiRetirement(1998, 'Weston'))
// console.log(yearsUntiRetirement(1950, 'Weston'))

// CODING CHALLENGE #1

// const calcAverage = (score1, score2, score3) => {
//     const avg = (score1 + score2 + score3) / 3
//     return avg;
// }

// function checkWinner(avgDolphins, avgKoalas) {
//     if (avgDolphins >= (avgKoalas * 2)) {
//         return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`
//     } else if (avgKoalas >= (avgDolphins * 2)) {
//         return `Koalas win (${avgKoalas} vs. ${avgDolphins})`
//     } else {
//         return 'No team wins.'
//     }
// }

// console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));

// // INTRO TO ARRAYS

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// // literal syntax
// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// // other way
// // const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends.length); // exact # of elements, not 0 based
// console.log(friends[friends.length - 1]) // get last entry

// friends[2] = 'Jay'; // quick replacement at index #2
// console.log(friends)

// const firstName = 'Jonas'
// const jonas = [firstName, 'S.', 2037 - 1991, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)

// // EXERCISE
// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }
// const years = [1990, 1967, 2002, 2010, 2018];

// // for (let i in years) {
// //     const age = calcAge(years[i]);
// //     console.log(age)
// // }

// const ages = []

// ARRAY METHODS

// const friends = ['Michael', 'Steven', 'Peter']
// const newLength = friends.push('Jay'); // adds to the end of the array, and returns the length of an array
// console.log(friends)
// console.log(newLength)

// friends.unshift('John'); // adds to the beginning of an array
// console.log(friends);

// // remove elements
// const popped = friends.pop(); // removes last element, returns popped element
// friends.shift(); // removes first element, returns removed element

// console.log(friends.indexOf('Steven')); // returns index of requested value

// console.log(friends)
// console.log(friends.includes('Steven')); // checks to see whether element is in the array(strict equality), returns boolean
// console.log(friends.includes('Bob'));

// if (friends.includes('Peter')) {
//     console.log('You have a friend called Peter')
// }

// CODING CHALLENGE #2

// let bill = 430;
// const tip = bill <= 300 && bill >= 50 ? .15 : .2;
// console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total is ${bill + (bill * tip)}
// `)

// function calcTip(bill) {
//     const tipPercent = bill <= 300 && bill >= 50 ? .15 : .2;
//     const tipValue = tipPercent * bill;
//     const total = (tipPercent * bill) + bill;
//     return [tipValue, total];
// }

// const bills = [125, 555, 44];
// const tips = [];
// const total = [];

// for (let i in bills) {
//     tips.push(calcTip(bills[i])[0])
//     total.push(calcTip(bills[i])[1])
// }

// console.log(tips, total)

// // INTRO TO OBJECTS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'S.',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// // DOT VS. BRACKET NOTATION

// console.log(jonas.lastName) // S.
// console.log(jonas['lastName']) // S. (for computation)

// const nameKey = 'Name';
// // console.log(jonas['first' + nameKey]);

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends')

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request. Choose between firstName, lastName, age, job, and friends')
// }

// jonas.location = 'Portugal'; // adding
// jonas['twitter'] = '@jonasschmedtman'; // adding
// console.log(jonas);

// // IN LECTURE CHALLENGE
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}.
// `)

// OBJECT METHODS

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'S.',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function (birthYear) { // version 1
//     //     return 2037 - birthYear;
//     // }


//     calcAge: function () { // version 2 (this keyword)
//         // console.log(this)
//         return 2037 - this.birthYear;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//     }

//     // calcAge: function () {    // setting properties on the fly
//     //     this.age = 2037 - this.birthYear
//     //     return this.age
//     // }
// };

// console.log(jonas.getSummary());
// console.log(jonas.calcAge());
// console.log(jonas['calcAge'](this));

// CODING CHALLENGE #3 OBJECTS

// const Mark = {
//     firstName: 'Mark',
//     lastName: 'Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2)
//         return this.bmi;
//     }
// }

// const John = {
//     firstName: 'John',
//     lastName: 'Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / (this.height ** 2)
//         return this.bmi;
//     }
// }

// John.calcBMI(); // method needs to be explicitly called to construct mark's bmi
// Mark.calcBMI(); // method needs to be explicitly called to construct mark's bmi
// console.log(Mark.bmi, John.bmi);

// if (Mark.bmi > John.bmi) {
//     console.log(`${Mark.firstName} ${Mark.lastName}'s BMI (${Mark.bmi}) is higher than John Smith's (${John.bmi})`)
// } else if (John.bmi > Mark.bmi) {
//     console.log(`${John.firstName} ${John.lastName}'s BMI (${John.bmi}) is higher than Mark Miller's (${Mark.bmi})`)
// }

// The FOR LOOP YAY!!

// console.log('Lifting weights rep 1')
// console.log('Lifting weights rep 2')
// console.log('Lifting weights rep 3')
// console.log('Lifting weights rep 4')
// console.log('Lifting weights rep 5')
// console.log('Lifting weights rep 6')
// console.log('Lifting weights rep 7')
// console.log('Lifting weights rep 8')

// for loop keeps running while condition is true
// for (let rep = 1; rep <= 10; rep++) {
//     // console.log(`Lifting weights rep ${rep}`);
// }

// const types = []
// const jonasArray = [
//     'Jonas',
//     'S.',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = 0; i < jonasArray.length; i++) {
//     // Reading from jonasArray
//     // console.log(jonasArray[i], typeof jonasArray[i])

//     // Filling types Array
//     // types[i] = typeof jonasArray[i];
//     types.push(typeof jonasArray[i])
// }
// // console.log(types)

// const years = [1991, 2007, 1969, 2020];
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// // console.log(ages)

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] !== 'string') continue; // exits current iteration
//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// console.log('--- BREAK WITH # ---')
// for (let i = 0; i < jonasArray.length; i++) {
//     if (typeof jonasArray[i] === 'number') break; // exits loop entirely
//     console.log(jonasArray[i], typeof jonasArray[i])
// }

// const jonasArray = [
//     'Jonas',
//     'S.',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven']
// ];

// for (let i = jonasArray.length - 1; i >= 0; i--) { // loops in reverse
//     console.log(jonasArray[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------STARTING EXERCISE---${exercise}-----`);
//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

//// WHILE LOOP
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }


// let rep = 1;
// while (rep <= 10) { // No counter needed, more versatile
//     //console.log(`While: Lifting weights repetition ${rep}`);
//     rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// //console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if (dice === 6) {
//         console.log('loop is about to end')
//     }
// }

// CODING CHALLENGE #4 loops
// accidentally completed in previous challenge

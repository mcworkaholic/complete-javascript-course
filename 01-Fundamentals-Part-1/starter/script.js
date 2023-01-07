/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";
console.log(firstName)
*/

/*
let JavascriptIsFun = true;
console.log(JavascriptIsFun);

console.log(typeof JavascriptIsFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'jonas');

JavascriptIsFun = 'YES!';
console.log(typeof JavascriptIsFun);
*/

/*
let age = 30;
age = 32;

const birthYear = 1991;

const now = 2037
const ageJonas = now - 1991;
const ageSara = now - 2018;


console.log(ageJonas, ageSara);

const firstName = 'Jonas';
const lastName = 'S.';
console.log(firstName + ' ' + lastName);
*/

/*
let x = 10 + 5; // 15
x += 10 // 25
x++; // x + 1
x--; // x - 1
console.log(x)

// comparison

console.log(ageJonas > ageSara);

const averageAge = (ageJonas + ageSara) / 2;
console.log(averageAge);
*/


//             Coding Challenge #1 & 2

// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 200;
// let johnHeight = 1.95;

// let markBMI = markMass / (markHeight * markHeight);
// let johnBMI = johnMass / (johnHeight * johnHeight);

// let higherBMI;

// if (markBMI > johnBMI) {
//     higherBMI = true;
//     console.log(`Mark has a higher BMI of ${markBMI}`)
//     console.log(`John\'s BMI is ${johnBMI}`)
// }
// if (johnBMI > markBMI) {
//     higherBMI = true;
//     console.log(`John has a higher BMI of ${johnBMI}`)
//     console.log(`Mark\'s BMI is ${markBMI}`)
// }
// else {
//     console.log(' Mark and John\'s BMI are equal.')
// }


// template literals

// const job = 'teacher';
// const year = 2037;
// const birthYear = 1991;
// let firstName = 'Jonas'
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;



// console.log(jonasNew);

// console.log(`string
// multiple
// lines`);

// const age = 17;


// if (age >= 18) {
//     console.log('Sara can start driving license')
// } else {
//     const yearsLeft = 18 - age;
//     console.log(` Sarah is too young. Wait another ${yearsLeft} years.`)
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century)

// type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(String(23));

// // type coercion
// console.log('I am ' + 23 + ' years old');
// console.log('23' - '10' - 3);
// console.log('23' * '2');

// truthy & falsy
// 5 falsy values: 0, '', undefined, null, NaN
// console.log(Boolean(0)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean('')); //false
// console.log(Boolean({})); //true
// console.log(Boolean('Jonas')); //true

// const money = 0;
// if (money) {
//     console.log('Don\'t spend it all')
// } else {
//     console.log('You should get a job!')
// }

// let height;
// if (height) {
//     console.log('Yay! Height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

// equality operators
// const age = 18;
// if (age === 18) { // exactly equal to (strict equality operator, does NOT perform type coercion)
//     console.log('You just became an adult.')
// }
// if (age == 18) { // equal to (loose equality operator, DOES perform type coercion)
//     console.log('You just became an adult.')
// }

// const favorite =
//     Number(prompt(" What's your favorite number?")); //type conversion
// console.log(favorite)
// console.log(typeof favorite) //string before the above conversion

// if (favorite === 23) { // '23' == 23
//     console.log(" Cool! 23 is an amazing number!")
// } else if (favorite === 7) {
//     console.log('7 is also a cool number')
// } else {
//     console.log("all numbers are cool.")
// }

// if (favorite !== 23) { // strict comparison, != : loose comparison
//     console.log("why not 23?")
// }

// Boolean Logic
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B
// const isTired = true; //C


// console.log(hasDriversLicense && hasGoodVision); //true
// console.log(hasDriversLicense || hasGoodVision); //true, one or the other
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log("Sara should drive.");
// } else {
//     console.log("Someone else should drive.")
// }

//             Coding Challenge #3

// let dScore1 = 96;
// let dScore2 = 108;
// let dScore3 = 89;
// let dScoreAvg = (dScore1 + dScore2 + dScore3) / 3;

// let kScore1 = 88;
// let kScore2 = 91;
// let kScore3 = 110;
// let kScoreAvg = (kScore1 + kScore2 + kScore3) / 3;

// if (kScoreAvg > dScoreAvg && kScoreAvg >= 100) {
//     console.log("Koala's have won the competition.")
// } else if (dScoreAvg > kScoreAvg && dScoreAvg >= 100) {
//     console.log("Dolphin's have won the competition.")
// } else if (dScoreAvg === kScoreAvg && (kScoreAvg && dScoreAvg >= 100)) {
//     console.log("The competition ends in a draw.")
// } else {
//     console.log("No one wins the competition. Score too low.")
// }

// switch statements

// const day = 'monday';

// switch (day) {
//     case 'monday': //day === 'monday'
//         console.log("Plan course structure");
//         console.log("Go to coding meetup");
//         break;
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log("record videos")
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('Enjoy the weekend!')
//     default:
//         console.log("Not a valid day!")
// }

// statements & expressions

// 3 + 4 // expression
// 1991 // expression
// true && false && !false // expression

// if (23 > 10) { // statement
//     const str = '23 is bigger';
// }

// ternary operator
// const age = 23;
// age >= 18 ? console.log('I like to drink wine.') :
//     console.log("I like to drink water.");

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink)

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

// coding challenge #4

// let bill = 430;
// const tip = bill <= 300 && bill >= 50 ? .15 : .2;
// console.log(`The bill was ${bill}, the tip was ${bill * tip}, and the total is ${bill + (bill * tip)}
// `)




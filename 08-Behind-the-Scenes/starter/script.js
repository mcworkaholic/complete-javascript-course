'use strict';


// function calcAge(birthYear) {
//     const age = 2037 - birthYear
    
//     function printAge() {
//        const output = `You are ${age}, born in ${birthYear}`;
//        console.log(output)
//        if (birthYear >= 1981 && birthYear <= 1996) {
//         const str = `Oh, and you're a millenial`
//        }
//     }

//     printAge()

//     return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

//// THIS KEYWORD
// console.log(this); // window obj

const calcAge = function(birthYear) {
    // console.log(2037 - birthYear);
    // console.log(this); // undefined in strict mode
}

calcAge(1991);

const calcAgeArrow = birthYear => {
    // console.log(2037 - birthYear);
    // console.log(this); // window obj because arrow functions do not get this
};

calcAgeArrow(1991);


// const jonas = {
//     year: 1991,
//     calcAge: function() {
//         console.log(2037 - this.year)
//     }
// }
// jonas.calcAge(); //46

// const matilda = {
//     year: 2017,
// }

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge(); //20

// const f = jonas.calcAge;
// f(); // undefined

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(2037 - this.year)
    },
    greet: () => console.log(`Hey ${this.firstName}`), // undefined
}
jonas.greet();

// Copying objects

const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
console.log(jessica2)
console.log(jessicaCopy)


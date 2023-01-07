'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const openingHours = {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };





  // Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // ES6 enhanced object literals
  // openingHours: openingHours =
  openingHours,
  order: function(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    // console.log(` Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time} `)
  },

  

  orderPasta: function (ing1, ing2, ing3){
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`)
  },
  orderPizza: function(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient)
    // console.log(otherIngredients)
  },
};

const rest2 = {
  name: 'Capri',
  numGuests: 20,
}

const rest1 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// 10 guests if numGuests is falsy, (short circuiting)
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator 
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// replaces if value is truthy
rest1.owner = rest1.owner && '<ANONYMOUS>' //=
rest1.owner &&= '<ANONYMOUS>'


// console.log(rest1)
// console.log(rest2)






restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

//// SPREAD OPERATOR
const arr0 = [7, 8, 9]
const badNewArr = [1, 2, arr0[0], arr0[1], arr0[2]];
// console.log(badNewArr);
const goodNewArr = [1, 2, ...arr0];
// console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
// console.log(newMenu);

// SPREAD, because on right side of =
const arr1 = [1, 2, ... [3, 4]]

// REST, because on LEFT side of =
const [u, w, ...others] = [1, 2, 3, 4, 5]
// console.log(u, w, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays} = restaurant.openingHours;
// console.log(weekdays);

// Functions
const add = function (...numbers) {
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// console.log(sum)
}
add(2, 3) // 5
add(5, 3, 7, 2) // 17

const s = [23, 5, 7]
add(...s) // 35



//// COPY ARRAY
const mainMenuCopy = [...restaurant.mainMenu];

//// JOIN ARRAYS
const menu0 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu0);

//// ITERABLES: arrays, strings, maps, sets. NOT Objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
// console.log(letters);

// const ingredients = [prompt("Lets's make pasta! Ingredient 1?")
// , prompt("Lets's make pasta! Ingredient 2?")
// , prompt("Lets's make pasta! Ingredient 3?")];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients)

const arr = [2, 3, 4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

const [x, y, z] = arr; // destructuring
// console.log(x, y, z);
// console.log(arr);

let [main, , secondary] = restaurant.categories; // , skips element
// console.log(main, secondary);
// switching variables
[main, secondary] = [secondary, main]

// retrieve 2 return values
const [starter, mainCourse] = restaurant.order(2, 0); 
// console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
const [p=1, q=1, r=1] = [8, 9]
// console.log(p, q, r); // undefined

//// DESTRUCTURING OBJECTS

// const {
//   name, 
//   openingHours,
//   categories
// } = restaurant;

// console.log(name, openingHours, categories);

const {
  name: restaurantNAme, 
  openingHours: hours, 
  categories: tags
} = restaurant;

// console.log(restaurantNAme, hours, tags);
 //// Default Values
const { menu = [], starterMenu: starters = []} = restaurant
// console.log(menu, starters);

//// Mutating Variables
let a = 111;
let b = 999;
const obj = { a: 23, b:7, c: 14};
({a, b} = obj)
// console.log(a, b);

//// Nested objects
const {fri: {open, close}} = openingHours
// console.log(open, close);


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  }

let gk;
let fieldPlayers;
const players1 = [gk=game.players[0][0], fieldPlayers=[...game.players[0]]]
const players2 = [...game.players[1]]
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(gk, fieldPlayers);
console.log(allPlayers)

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu2) { // for of loop
  console.log(item)
}

for (const [i, el] of menu2.entries()) { // gives index of item
  // console.log(item)
  console.log(`${i + 1}: ${el}`)
}

// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon){
  console.log(restaurant.openingHours.mon.open);
}

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

// SETS

// NO indexes or need for retrieval
// Only makes sense for checking for .has

const ordersSet = new Set ([ // No duplicates
  'Pasta',
  'Pizza',
  'Burger',
  'Pizza',
  'Burger',
])

console.log(ordersSet)
ordersSet.add('Garlic Bread')
// ordersSet.clear()
console.log(ordersSet.size) // length
console.log(ordersSet.has('Burger')) // boolean
console.log(ordersSet.delete('Burger'))
console.log(ordersSet.has('Burger'))
console.log(ordersSet.size) // length

for ( const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter', 'Manager']
const staffSet = new Set(staff);

// Maps
const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1 , 'Firenze, Italy')
rest.set(2, 'Lisbon, Portugal')

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
.set('open', 11)
.set('close', 23)
.set(true, 'We are open')
.set(false, 'We are closed');

// retrieving mapped values
console.log(rest.get('name'))
console.log(rest.get(1))
console.log(rest.get(2))

const time = 21;
rest.get(time > rest.get('open') && time < rest.get('close'))

console.log(rest.has('categories'))

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 😍'],
  [false, 'Try again!'],
]);
console.log(question)

// Convert object to map
console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
console.log(hoursMap)

// Quiz App
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`)
}
const answer = Number(prompt('Your answer'));
if (answer === question.get('correct')) {
  console.log(question.get(true))
} else {
  console.log(question.get(false))
}

// CONVERT MAP TO ARRAY
console.log([...question])

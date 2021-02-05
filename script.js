'use strict';
// LECTURE: Values and Variables
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let country;
let continent;
let population;

const setValues = (country, continent, population) => {
  country = country;
  continent = continent;
  population = population;

  console.log(`${country}, ${continent}, ${population},`);
};

setValues('United States of America', 'North America', 4000000000); */

// LECTURE: Data Types
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let isIsland = true;
console.log(typeof isIsland); */

/* console.log(typeof null); // Returns object??? */
/* console.log(typeof NaN); // Returns number??? */

// LECTURE: let, const and var
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const language = 'English';
language = 'French'; */

// LECTURE: Basic Operators
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* console.log(10 + 10 / 2);
console.log((10 + 10) / 2); */

// mass / height ** 2

/* let mark = { weight: 78, height: 1.69 };
let john = { weight: 92, height: 1.95 };
let thomas = { weight: 91.6257, height: 1.7907 };

const calcBmiExp = (weight, height) => {
  return weight / height ** 2;
};

const calcBmiMult = (weight, height) => {
  return weight / (height * height);
};

console.log('Mark' + ': ' + calcBmiMult(mark.weight, mark.height));
console.log('John' + ': ' + calcBmiMult(john.weight, john.height));

const higherBMI = (person1, person1BMI, person2, person2BMI) => {
  if (person1BMI < person2BMI) {
    console.log(`${person2} has a higher BMI than ${person1}`);
  } else {
    console.log(`${person1} has a higher BMI than ${person2}`);
  }
};

higherBMI(
  'Mark',
  calcBmiExp(mark.weight, mark.height),
  'John',
  calcBmiExp(john.weight, john.height)
); */

// LECTURE: Strings and Template Literal
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const literal = `asdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfas \n dfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasd
f
a
s
dfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadfasdfasdfsadf`;

console.log(literal); */

/* console.log(String(undefined + 'hello' + 43 ** 2)); */

// LECTURE: Taking Decisions: if / else Statements
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// LECTURE: Type Conversion and Coercion
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* console.log('10' < '5'); */
/* let n = '1' + 1;
n -= 1;
console.log(n); // 10 */

/* const age = 18;
if (age === 18) console.log('You just became an adult!');
 */

// LECTURE: Challenge: Dolphins vs Koalas
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* const scores = {
  dolpins: [96, 108, 89],
  koalas: [88, 91, 110],
  dolpins2: [97, 112, 101],
  koalas2: [109, 95, 123],
  dolpins3: [97, 112, 101],
  koalas3: [109, 95, 106],
};

const calcAverage = (numArr) => {
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total = total + numArr[i];
  }
  return total / numArr.length;
};

console.log(`Dolphins Average Score: ${calcAverage(scores.dolpins)}
Koalas Average Score: ${calcAverage(scores.koalas)}
-----------------------------------------`);

const compareScores = (team1, num1, team2, num2) => {
  if (num1 === num2) {
    if (num1 >= 100) {
      console.log(
        `It is a draw! Both teams scored the same amount of points on average at ${num1}!`
      );
    } else {
      console.log(
        `Both teams scored ${num1}. That is not enough to win, so both teams lose!`
      );
    }
  } else if (num1 > num2) {
    if (num1 > 100) {
      console.log(
        `${team1} wins! Their average score of ${num1} is higher than the opponent's ${num2}`
      );
    } else {
      console.log(
        `${team1} scored more points, but not enough to win! Both teams lose!`
      );
    }
  } else {
    if (num2 > 100) {
      console.log(
        `${team2} wins! Their average score of ${num2} is higher than the opponent's ${num1}`
      );
    } else {
      console.log(
        `${team2} scored more points, but not enough to win! Both teams lose!`
      );
    }
  }
};

compareScores(
  'Dolphins',
  calcAverage(scores.dolpins3),
  'Koalas',
  calcAverage(scores.koalas3)
); */

// LECTURE: Switch
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const day = 'Monday';

switch (day) {
  case 'monday':
  case 'Monday':
    console.log('It is Monday');
    break; // Break the code, without it you would execute the next case
  case 'tuesday':
  case 'Tuesday':
    console.log('It is Tuesday');
    break;
  case 'wednesday':
  case 'Wednesday':
    console.log('It is Wednesday');
    break;
  case 'thursday':
  case 'Thursday':
    console.log('It is thursday');
    break;
  case 'friday':
  case 'Friday':
    console.log('It is Friday');
    break;
  case 'saturday':
  case 'sunday':
  case 'Saturday':
  case 'Sunday':
    console.log('It is the weekend!');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday' || day === 'Monday') {
  console.log('It is Monday');
} else if (day === 'tuesday' || day === 'Tuesday') {
  console.log('It is Tuesday');
} else if (day === 'wednesday' || day === 'Wednesday') {
  console.log('It is Wednesday');
} else if (day === 'thursday' || day === 'Thursday') {
  console.log('It is Thursday');
} else if (day === 'Friday' || day === 'Friday') {
  console.log('It is Friday');
} else if (
  day === 'saturday' ||
  day === 'sunday' ||
  day === 'Saturday' ||
  day === 'Sunday'
) {
  console.log('It is the weekend!');
} else {
  console.log('Not a valid day!');
} */

// LECTURE: Ternary Operator
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const age = 21;

// A statement because it stored a value into drink, but after = is an expression that produces one of 2 values, 'beer' or 'water';
const drink = age >= 21 ? 'beer' : 'water';
console.log(drink); */

// LECTURE: Calculation Tips
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const bills = [275, 40, 430];

const calcPercent = (percent, num) => {
  return (percent / 100) * num;
};

const calcTip = (bill) => {
  return bill > 50 && bill < 300
    ? `The bill was $${bill}, the tip should be 15%, so $${calcPercent(
        15,
        bill
      )}, as the bill was between $50 and $300. The total cost out of pocket is $${
        bill + calcPercent(15, bill)
      }`
    : `The bill was $${bill}, the tip should be 20%, so $${calcPercent(
        20,
        bill
      )}, as the bill was NOT between $50 and $300. The total cost out of pocket is $${
        bill + calcPercent(20, bill)
      }`;
};

const tip =
  bills[0] > 50 && bills[0] < 300
    ? bills[0] * (15 / 100)
    : bills[0] * (20 / 100);

console.log(calcTip(bills[0]));
//console.log(calcTip(bills[1]));
//console.log(calcTip(bills[2]));
console.log(tip); */

// LECTURE: Strict Mode
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* let hasDriversLiscense = false;
const passedTest = true;

if (passedTest) hasDriverLiscense = true; // There is a typo here, but without strict mode there would be no error and we wouldn't know why the next line isn't logging to the console.
if (hasDriversLiscense) console.log('I can drive!'); */

/* const func = () => {
  console.log('Yes hello hi');
};
console.log(func); */

// Function Declaration
/* function calcAge(birthYear) {
  return 2021 - birthYear;
}

// Function Expression
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

// Arrow Function
const calcAge3 = (birthYear) => 2021 - birthYear;

console.log(calcAge(1997));
console.log(calcAge2(1997));
console.log(calcAge3(1997)); */

/* const func = function (string) {
  return string;
};

console.log(func('hi'));
console.log(func);
console.log(typeof func); */

// LECTURE: Dolphins vs Koalas 2!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const scores = {
  dolpins: [44, 23, 71],
  koalas: [85, 54, 41],
  dolpins2: [85, 54, 71],
  koalas2: [23, 34, 27],
};

const calcAverage = (numArr) => {
  let total = 0;
  for (let i = 0; i < numArr.length; i++) {
    total = total + numArr[i];
  }
  return total / numArr.length;
};

const checkWinner = (dolphinsAvg, koalasAvg) => {
  if (dolphinsAvg > koalasAvg) {
    console.log('Dolphins scored more points.');
    if (dolphinsAvg > koalasAvg * 2) {
      console.log(`Dolphins win! (${dolphinsAvg} - ${koalasAvg})`);
    } else {
      console.log('There is no winner.');
    }
  } else {
    console.log('Koalas scored more points.');
    if (koalasAvg > dolphinsAvg * 2) {
      console.log(`Koalas win! (${koalasAvg} - ${dolphinsAvg})`);
    } else {
      console.log('There is no winner.');
    }
  }
};

console.log(calcAverage(scores.dolpins2));
console.log(calcAverage(scores.koalas2));

checkWinner(calcAverage(scores.dolpins2), calcAverage(scores.koalas2)); */

/* const friends = ['Ethan', 'Marilyn', 'Maria'];
const newFriends = ['Ethan', 'Marilyn', 'Maria'] + 'Andy';

console.log(newFriends); */

/*

const interestedIn = prompt(
  'What do you want to know about Thomas? Type either firstName, lastName, or age.'
);

console.log(
  thomas[interestedIn]
    ? thomas[interestedIn]
    : 'That was not one of the options! Type either firstName, lastName, or age.'
); */

// Thomas has 3 friends, and his best friend is called Ethan.

/* const thomas = {
  firstName: 'Thomas',
  lastName: 'Nelson',
  age: 23,
  friends: ['Ethan', 'Marilyn', 'Fernando'],
};

console.log(
  `${thomas.firstName} has ${thomas.friends.length} friends, and his best friend is ${thomas.friends[0]}.`
); */

/* const thomas = {
  firstName: 'Thomas',
  lastName: 'Nelson',
  birthYear: 1997,
  friends: ['Ethan', 'Marilyn', 'Fernando'],
  // calcAge: (birthYear) => 2021 - birthYear,
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  hasDriverLiscense: true,
  job: 'developer',

  getSummary: function () {
    return `${this.firstName} ${
      this.lastName
    } is a ${this.calcAge()} year old ${this.job} who ${
      this.hasDriverLiscense
        ? 'has a drivers liscense.'
        : 'does not have a drivers liscense.'
    }`;
  },
};

console.log(thomas.getSummary()); */

/* const mark = {
  name: 'Mark Miller',
  weight: 75,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  name: 'John Smith',
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.weight / this.height ** 2;
    return this.bmi;
  },
};

const higherBMI = (person1, person1BMI, person2, person2BMI) => {
  if (person1BMI < person2BMI) {
    console.log(
      `${person2}'s BMI (${person2BMI}) is higher than ${person1}'s (${person1BMI})`
    );
  } else if (person1BMI > person2BMI) {
    console.log(
      `${person1}'s BMI (${person1BMI}) is higher than ${person2}'s (${person2BMI})`
    );
  } else {
    console.log(`${person1} and ${person2} have the same BMI (${person1BMI})`);
  }
};

higherBMI(mark.name, mark.calcBMI(), john.name, john.calcBMI()); */

/* const stuff = [
  'Apple',
  42,
  'Her Majesty, The Queen',
  [1, 2, 3],
  420.69,
  true,
  'string',
  undefined,
  null,
  '9999',
]; */

/* for (let thing = 0; thing < stuff.length; thing++) {
  if (typeof stuff[thing] === 'object') break;

  console.log(stuff[thing], typeof stuff[thing]);
} */

/* for (let i = stuff.length - 1; i >= 0; i--) {
  console.log(i, stuff[i]);
} */

/* for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`Exercise Set ${exercise} ---------------`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise rep ${rep}`);
  }
} */

/* let dice = Math.trunc(Math.random() * 6) + 1; // Number from 1 - 6
let maxRoll = 6;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // Set the dice to something else
  // If it was set to 6, this if condition will finally pass and log that you got a 6, after which this while loop won't run any longer.
  if (dice === 6) {
    console.log(`You finally rolled a 6! Loop will now end.`);
  }
} */

/* const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]; */
/* 
const calcAmplitude = (arr) => {
  let max = 0;
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;

    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }
  console.log(max, min);
  return max - min;
};

console.log(calcAmplitude(temperatures)); */

/* const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

// We need to know the index+1 (the day from today) and the temp (value in index);
// With that information, we have to construct a string that can be as long as it needs to be to display that info

const displayForecast = (arr) => {
  let msg = '...';
  for (let i = 0; i < arr.length; i++) {
    msg += ` ${arr[i]}°C in ${i + 1} days ...`;
  }
  return msg;
};

console.log(displayForecast(temperatures2)); */

// We don't have access to this in node.js because this JavaScript Runtime does not have access to the Web API's like the browser's does
// console.log(document.querySelector('.js-practice').textContent);

/* function func(bar) {
  const thing = 'potatoes';
  console.log(this.thing);
  console.log(typeof bar);
}
func('hi');
 */

/* const myName = 'Thomas';

function first() {
  const age = 24;

  if (age) {
    const foo = 'foo';
    var bar = 'bar';
  }

  function second() {
    const job = 'bum';

    console.log(`${myName} is a ${age} year old ${job}
    ${bar} -=-=- ${bar}`);
  }

  second();
}

first(); */

// Top-level code so it is available as a global variable because it was created in the Global Execution Context
/* function calcAge(birthYear) {
  const age = 2021 - birthYear;

  function printAge() {
    const output = `You are ${firstName}, age ${age}, born in ${birthYear}`;
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Thomas';
console.log(calcAge(1997)); */

/* console.log(foo);
var foo = 'foo'; */

/* console.log(one1());
function one1() {
  return 'one1';
} */

/* console.log(two2());
const two2 = function () {
  return 'two2';
}; */

// console.log(me);
// console.log(job);
// console.log(age);

/* console.log(addExpr(1, 1));

var me = 'Thomas';
let job = 'unemployed';
const age = '24';

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = () => a + b; */

/* if (!numProducts) deleteShoppingCart();
// All products will be deleted because of hoisting (numProducts is undefined in the creation phase)

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
} */

/* console.log(!undefined === true ? true : false); */

/* var x = 1;
let y = 2;
const z = 3;
 */

/* let firstName = 'Aiyuk';

const thomas = {
  firstName: 'Thomas',
  year: 1997,
  calcAge: function () {
    // console.log(this);
    console.log(2021 - this.year);

    const isMillenial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

thomas.greet();
thomas.calcAge(); */

/* document.querySelector('.js-practice').addEventListener('click', () => {
  console.log(this);
}); */

/* let age = 24;
let oldAge = age;
age = 25;

console.log(age);
console.log(oldAge);

const me = {
  name: 'Thomas',
  age: 24,
};
const friend = me;
friend.age = 54;

console.log(`Friend: ${friend.age}`);
console.log(`Me: ${me.age}`); */

// PRIMITIVE TYPES
/* let lastName = 'Aiyuk';
let oldLastName = lastName;
lastName = 'Kinlaw';
console.log(lastName, oldLastName);
// RESULT: Kinlaw Aiyuk

// REFERENCE TYPES
const brandon = {
  firstName: 'Brandon',
  lastName: 'Aiyuk',
  age: 22,
};
const marriedBrandon = brandon;
marriedBrandon.lastName = 'Kinlaw';
console.log(`Before marriage:`, brandon);
console.log(`After marriage:`, marriedBrandon); */
// RESULT:
// Before marriage: {firstName: 'Brandon', lastName: 'Kinlaw', age: 22}
// After marriage: {firstName: 'Brandon', lastName: 'Kinlaw', age: 22}

// What is happening here?
/* 

Primitive types:
- Creation phase begins and lastName, oldLastName are set to uninitialized.
- Execution phase begins

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Array Destructuring

/* restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  mainIndex: 2,
  starterIndex: 2,
  extraOrder: 1,
}); */

/* const { name, openingHours, categories } = restaurant;

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c); */

/* const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

/* let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
console.log(a, b); */

/* console.log(openingHours, name, categories); */

/* const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); */

/* let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

let x = 'X';
let y = 'Y';
let z = 'Z';

console.log(x, y, z);
const xyz = { x, y, z };
console.log(xyz);
({ a: x, b: y, c: z, d: q = 3 } = { a: 1, b: 2, c: 3 });
console.log(x, y, z, d); */

/* console.log(a, b);
({ a, b } = obj);
console.log(a, b); */

/* const {
  mainMenu: main,
  starterMenu: starters,
  categories = [],
  desserts = [],
} = restaurant;
console.log(main, starters, categories, desserts); */

/* // Returns an array of two values
restaurant.order(2, 0);
// Sets the two values returned from the array to their own variables
let [starter, main] = restaurant.order(2, 0);
// This is how to return variables from an array using destructuring
console.log(starter, main);

const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;

const [a, , [b, c]] = nested;
console.log(a, b, c); */

/* const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr; */

// let [main, , secondary] = restaurant.categories;
/* console.log(main, secondary);

// How to switch 2 values before destructuring
const temp = main; // Temporarily store the first main value
main = secondary; // With main safely backed up, change it to secondary
secondary = temp; // Main has been overwritted so both are secondary, but using the temporary store of main we set secondary to main, so they have successfully been flipped
console.log(main, secondary); */

// Switch two values with destructuring
// console.log(main, secondary);
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

/* const restaurant = {
  name: 'Bubba Gump',
  location: 'Via Di Olivia St. Henderson, Nevada',
  categories: ['Seafood', 'All-American', 'Pasta', 'Vegetarian'],
  starterMenu: [
    'Calamari',
    'Clam Chowder',
    'Mozzarella Sticks',
    'Garlic Bread',
  ],
  mainMenu: [
    'Bacon Cheeseburger',
    "Bucket O' Shrimp",
    'Fish & Chips',
    'Chicken Skillet',
  ],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  // Pass in the index number of the item you want to order
  order: function (starterIndex, mainIndex) {
    // Return the item at the given index as the customer order
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00',
    address = 'Pickup Location',
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `You delivery of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will arrive at ${address} at ${time}`
    );
  },
}; */

/* const arr = [7, 8, 9];
// Adding two new values to the start of the arr
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [...arr, 10, 11];
console.log(goodNewArr);

const newMenu = [...restaurant.mainMenu, 'Chicken & Waffles'];
console.log(newMenu); */

// The spread operator does not assign new variables the way that destructuring does, so you can only use it in a spot where it is directly needed and only in a situation where you would otherwise have to write a bunch of values seperated by commas (this is the ONLY place to use the spread operator)

// const mainMenuCopy = restaurant.mainMenu;
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);

/* const restaurant = {
  name: 'Bubba Gump',
  location: 'Via Di Olivia St. Henderson, Nevada',
  categories: ['Seafood', 'All-American', 'Pasta', 'Vegetarian'],
  starterMenu: [
    'Calamari',
    'Clam Chowder',
    'Mozzarella Sticks',
    'Garlic Bread',
  ],
  mainMenu: [
    'Bacon Cheeseburger',
    "Bucket O' Shrimp",
    'Fish & Chips',
    'Chicken Skillet',
  ],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  // Pass in the index number of the item you want to order
  order: function (starterIndex, mainIndex) {
    // Return the item at the given index as the customer order
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = '20:00',
    address = 'Pickup Location',
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `You delivery of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will arrive at ${address} at ${time}`
    );
  },
}; */

// We are mutating the first value of the mainMenuCopy array, however, since all objects (arrays included) are reference types (meaning when you make a copy, you are not copying the actual value, you are copying the reference to the same value stored in memory), when we mutate what seems to be the copy, we mutate the actual value for which all copies of the reference point to, so it changes for the original copy too. Primitive values are fixed in size and space in memory, so they can be afforded their own space in memory can can be passed by value, in which this problem would never occur.
// mainMenuCopy[0] = 'Ice Cream Sundae';
// console.log(mainMenuCopy);
// console.log(restaurant.mainMenu);

// A solution is to make a shallow copy, meaning actually assigning a new variable the identical contents of the array to be copies
/* const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
console.log(restaurant.mainMenu);

mainMenuCopy[0] = 'Rocky Road Ice Cream';
console.log(mainMenuCopy);
console.log(restaurant.mainMenu); */

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [6, 7, 8, 9, 10];

/* const joined = [...arr1, ...arr2]; */

// const bills = [275, 40, 430];
// let tips = [];

// for (let i = 0; i < bills.length; i++) {
// tips.push(
// bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2
// );
// }

// console.log(tips);

// Iterables: arrays, strings, maps, sets. NOT objects
// const str = 'Thomas';
// const letters = [...str, ' Nelson'];
// console.log(letters);

/* const restaurantCopy = {
  foundedIn: '2001',
  ...restaurant,
  founder: 'Forrest Gump',
};
console.log(restaurantCopy); */

/* const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Let's make pasta! Ingredient 2?"),
  prompt("Let's make pasta! Ingredient 3?"),
];

restaurant.orderPasta(...ingredients); */

/* console.log(+'13'); */

// SPREAD operator, because ... on RIGHT side of ASSIGNMENT operator (=)
// const arr = [1, 2, ...[3, 4]];
// RESULT: [1, 2, 3, 4]
// console.log(arr);

// REST operator, because ... on LEFT side of ASSIGNMENT operator (=)
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// RESULT: a, b, [3, 4, 5];
// console.log(a, b, others);

/* const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood); */

// Onjects rest
/* const { sat: weekend, ...weekdays } = restaurant.openingHours;
console.log(weekdays);
console.log(weekend); */

/* const add = (...nums) => {
  let sum = 0; // Accumulator
  for (let i = 0; i < nums.length; i++) sum += nums[i];
  return sum;
};

const numbers = [2, 43, 11, 30];
console.log(add(...numbers)); */

/* restaurant.orderPizza('pepperoni', 'basil', 'bacon', 'ground beef'); */

// Logical operators can: Use ANY data type, return ANY data type, and so short-circut evaluation (short-circuiting)

// With ||, it will return the first truthy value, else it will return the last value (kind of like a default value), which means no short-circuiting occured
/* console.log(2 || 'Thomas'); //2
console.log('' || 'Thomas'); //'Thomas'
console.log(true || 0); //true
console.log(undefined || null); //null */

// With &&, it will return the first falsy value, else it will return the last value (kind of like a default value), which means no short-circuiting occured (opposite of ||)
/* console.log(null && 0 && undefined && '' && 'Thomas');
console.log('Thomas' && 100 && true && '' && 'Thomas');
console.log(false && false && false && '' && 'Thomas');
console.log(true && true && true && '0' && 'Thomas'); */

// restaurant.orderPizza && restaurant.orderPizza('cheese', 'lemon');

// Football Betting App
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* const game = {
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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Create one player array for each team (variables 'players1' and 'players2')
const [players1, players2] = game.players;
console.log(players1, players2);
console.log(
  '================================================================================================================'
);

// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
console.log(
  '================================================================================================================'
);

// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
console.log(
  '================================================================================================================'
);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
console.log(
  '================================================================================================================'
);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);
console.log(
  '================================================================================================================'
);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  players.forEach((player) => console.log(player));
  console.log(players.length);
};
printGoals(...game.scored);
console.log(
  '================================================================================================================'
);

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team 1 is more likely to win.');
team1 > team2 && console.log('Team 2 is more likely to win.');
console.log(
  '================================================================================================================'
); */

/* const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const [i, item] of menu.entries()) {
  console.log(`${i + 1}: ${item}`);
} */

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Enhanced object literals: Computing a property name
const openingHours = {
  [weekdays[3]]: {
    // thu
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    // fri
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    // sat
    open: 0, // 12am
    close: 24,
  },
};

const restaurant = {
  name: 'Bubba Gump',
  location: 'Via Di Olivia St. Henderson, Nevada',
  categories: ['Seafood', 'All-American', 'Pasta', 'Vegetarian'],
  starterMenu: [
    'Calamari',
    'Clam Chowder',
    'Mozzarella Sticks',
    'Garlic Bread',
  ],
  mainMenu: [
    'Bacon Cheeseburger',
    "Bucket O' Shrimp",
    'Fish & Chips',
    'Chicken Skillet',
  ],
  // Enhanced object literals: saving a variable into a proprty
  openingHours,

  // Pass in the index number of the item you want to order
  order(starterIndex, mainIndex) {
    // Return the item at the given index as the customer order
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Enhanced object literals: shorthand way to define methods
  orderDelivery({
    time = '20:00',
    address = 'Pickup Location',
    mainIndex = 0,
    starterIndex = 0,
  }) {
    console.log(
      `You delivery of ${this.mainMenu[mainIndex]} and ${this.starterMenu[starterIndex]} will arrive at ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...optionalIngredients) {
    console.log(
      `Here is your ${mainIngredient} pizza${
        optionalIngredients.length > 0 ? ` with: ${optionalIngredients}!` : '!'
      }`
    );
  },
};

// We can check the value of the thu object of the openingHours object
// console.log(restaurant.openingHours.thu);

// What if we want the mon object? What if a day doesn't exist but the we don't know that?
// console.log(restaurant.openingHours.mon); // undefined (which is ok, but what if we want to access a properties value of mon?)

// What if we want a further property value?
// Ask if mon exists, and only then do you ask for the further property value (otherwise we would get undefined and try to access open of undefined, which throws an error)
// if (restaurant.openingHours.mon) {
// console.log(restaurant.openingHours.mon.open);
// } else {
// console.log(
// 'Sorry, there is no data for that day. The restaurant is probably closed.'
// );
// }

// So the crux of the problem is when you have to access nested values in an object but you do not know whether those values even exists, and if you try to do so, you will get an error of trying to access something of undefined, since the previous object didn't exist. You could use nested if/else statements, but there is a better way...

// One way is the following:
// if (
// restaurant &&
// restaurant.openingHours &&
// restaurant.openingHours.mon &&
// restaurant.openingHours.mon.open
// Using && short-circuiting to check if something exists, and if so if the nested property exists, and if so... etc... (since && returns false if ANY operand is false, if none are then it will return the last value, and thus equate to truthy for the sake of the if else conditional)
// ) {
// console.log(`Opening hour: ${restaurant.openingHours.mon.open}`);
// }

// This works, but can be a huge pain in deeply nested objects. There is a solution that will always return undefined in the case of something in the chain not existing, which is alright because at least that will not throw an error, as seen in the first example above when accessing mon

// Enter -> Optional Chaining (ES2020)
/* console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open); */

/* const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']; */

/* for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
} */

/* console.log(restaurant.orderDelivery?.(0, 1) ?? 'ERR: Method does not exist'); */

// Arrays
// const users = [{ name: 'Thomas', email: 'thnlsn@gmail.com' }];
// console.log(users[0]?.name ?? 'User array empty');

/* let openStr = `We are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day}, `;
}
console.log(openStr); */

// Property KEYS
/* const properties = Object.keys(openingHours);
console.log(properties);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(
    `On the weekday ${day}, we open at ${open} and close at ${close}`
  );
} */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
console.log(
  '================================================================================================================'
);

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg /= Object.values(game.odds).length;
console.log(avg);
console.log(
  '================================================================================================================'
);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
/*    Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5 */
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
for (const [team, odd] of Object.entries(game.odds))
  console.log(
    `Odd of ${game[team] ? 'victory' : 'draw'} ${game[team] ?? '' - ''}: ${odd}`
  );
console.log(
  '================================================================================================================'
);

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
/*
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const scorers = {};
for (const scorer of game.scored)
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
console.log(scorers);

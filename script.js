'use strict';
console.log(
  '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
); /*     console.log(nums[prev]); */ /*     for (let [i, number] of nums) { */ /*     } */ /*   }); */ /* }; */ /* console.log(twoSum([2, 7, 11, 15], 9)); */ // Set it to the first index
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

/* const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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
}; */

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
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}; */

// Let's continue with our football betting app!

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
/* for (const [goal, player] of game.scored.entries()) {
  console.log(`Goal ${goal + 1}: ${player}`);
}
console.log(
  '================================================================================================================'
); */

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
/* let avg = 0;
for (const odd of Object.values(game.odds)) {
  avg += odd;
}
avg /= Object.values(game.odds).length;
console.log(avg);
console.log(
  '================================================================================================================'
); */

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
/*    Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5 */
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
/* for (const [team, odd] of Object.entries(game.odds))
  console.log(
    `Odd of ${game[team] ? 'victory' : 'draw'} ${game[team] ?? '' - ''}: ${odd}`
  );
console.log(
  '================================================================================================================'
); */

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
/*
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
/* const scorers = {};
for (const scorer of game.scored)
  scorers[scorer] ? scorers[scorer]++ : (scorers[scorer] = 1);
console.log(scorers); */

// Given 3 arguments of arrays, fill in all null values with numbers 1-9, however, you cannot reuse a number so each number 1-9

/* const args = [
  [null, 7, null],
  [5, null, 3],
  [null, null, null, null],
];

const unused = (nums) => {
  for (const num of nums) {
    if
  }
};

// Deconstruct the
const func = (...[args]) => {
  let usedNums = [];
  let availableNums = [];

  // First collect numbers we cannot use (they are already in the args) into an array:
  args.map((arr) => {
    // Check if num exists, if so, push that value to usedNums
    arr.forEach((num) => {
      if (num !== null) usedNums.push(num);
    });
  });
  console.log(usedNums);

  // Put numbers
};

// Calling the func with a spread collection of arrays, the first represents the upper array, the second the lower, and the last the sum total
func(args); */

/* 
        48 39 -1+1 --- 36 27 - 9
        87 96 +1-1 --- 72 81 - 9
        56 74 +2-2 --- 45 63 - 18
        63 27 -4+4 --- xx xx - 36
*/

/* // SET: Contains no dupicate values, can only take in an iterable
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet);
console.log(ordersSet.size); // How many elements are in the set? -- 3
console.log(ordersSet.has('Pizza')); // Does the set have 'Pizza'? -- true
console.log(ordersSet.has('Bread')); // Does the set have 'Bread'? -- false
ordersSet.add('Garlic Bread'); // Add an element to the set
ordersSet.add('Garlic Bread'); // Adding an element that already exists within the set will be ignored
ordersSet.delete('Risotto'); // Delete an element in the set
// ordersSet.clear(); // Clear the entire set
console.log(ordersSet);
// You cannot retrieve a value from a set (like how you can do arr[17] in an array) because all items are unique and only exist once, so there is no need to ever retrieve anything, rather to just check if it exists
// for (const order of ordersSet) console.log(order); // Sets can be looped through

// USE CASE FOR SET: Let's say we have an array of all the positions all employees have in a restaurant...
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff); // arrays are iterables so we can pass it in
console.log(staffUnique); // Now we have a list of all jobs currently filled, so the restaurant can see a basic overview of what jobs currently have *any number of* hands on deck
// What if we need it to be retrievable for some reason? Convert it back to an array...
console.log([...staffUnique]); // We spread the iterable (set) into a newly constructed array
// If we wanted to see how many positions there are total inside an array of jobs, we can convert it to a set and use the size property
console.log(new Set(staff).size);

console.log(new Set('thomasnelson').size); // 9 unique letters in my name */

/* const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

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

const rest = {
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
}; */

// MAP: A data structure that can be used to map values to keys
// Similar to objects, data is stored in key/value pairs, however in maps, the KEYS can have any type

/* const restaurant = new Map();
// The set method adds a new key/value pair AND returns the set immidiately.
restaurant.set('name', 'Bubba Gump');
restaurant.set(1, 'Los Angeles, California');
restaurant.set(2, 'Manila, Philippines');

// Because the set method returns the map, you can chain set methods and call them on another set, since it is in the end a value equal to the set itself
restaurant
  .set('categories', ['Seafood', 'All-American', 'Pasta', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open!')
  .set(false, 'We are closed.');

console.log(restaurant.get('name'));
console.log(restaurant.get(true));

console.log(restaurant);

const time = 21;
// Having a boolean as a map key can make for a clever way to retrive data...
console.log(
  // The logical expression here is either going to return true or false, if the time is greater than the open key value (11) AND less than the close key value (23), return true
  // This means that the value inside the initial restaurant.get(<key-to-search>) will be either true or false, which will then retrieve the value of the true or false keys
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('close')
  )
);

console.log(restaurant.has('categories')); // -- true
restaurant.delete(2); // delete the 2 key (and it's mapped value)
console.log(restaurant.size);

console.log(restaurant);

restaurant.set([1, 2], 'Test');
// Why doesn't this work?
console.log(restaurant.get([1, 2])); // RESULT = undefined */
// We have a key ([1, 2]), and we are trying to access it's value with the get() map method by passing in the array [1, 2] as the key to look for, but it does not work.
// The reason is that the moment we use the set() method, we have created that object (array) in memory with a reference to that exact one in the heap (example memory address: 1F72).
// The object [1, 2] in memory that the key is referencing is the one at memory address 1F72, but when we use the get() method, we pass in another object (array) that is the same in terms of value, but it now has it's own space in the heap with it's own reference to it (so like memory address 9E10).
// So when we try to use .get(), it is looking through the keys in map for object referenced at address 9E10, but it cannot find it, because it doesn't exist in the map. Rather the object with reference to memory address 1F72 is there.

/* const questionObj = {
  question: 'What is the best programming language in the world?',
  1: 'C',
  2: 'Java',
  3: 'JavaScript',
  correct: 3,
  true: 'Correct!',
  false: 'Try again!',
};
// Here is an object and below is a way to convert that object to a map
console.log(new Map(Object.entries(questionObj)));
// First it does Object.entries() on the object, turning it into an array of arrays with index 0 being their keys and index 1 being their values
// Then we create a map on that array to where the index 1 of each array becomes the key of the map, while index 1 becomes the value it is mapped to */

/* const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);
console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  typeof key === 'number' && console.log(`Option ${key}: ${value}`);
}
const answer = 3;
// First operand should convert to 1, 2, or 3 (number) and the second should convert to 3 (number), the correct number, which means the expression as a whole will convert to a boolean
console.log(question.get(question.get('correct') === answer)); */

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

/* const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
console.log(gameEvents);
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
const time = [...gameEvents.keys()].pop();
const avg = time / gameEvents.size;
console.log(`An event happened, on average, every ${avg} minutes`);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL
for (const [minute, event] of gameEvents)
  console.log(
    `[${minute <= 45 ? 'FIRST' : 'SECOND'} HALF] ${minute}: ${event}`
  ); */

/* const airline = 'TAP Air Portugal';
const plane = 'A320';

// You can access a letter at a certain index just like an array
console.log(plane[0]);
console.log(plane[2]);
console.log(plane[3]);

console.log(airline.length);
console.log(plane.length);

// Strings are 0 based like arrays
console.log(airline.indexOf('r')); // Index of the first occurence of the letter 'r'
console.log(airline.lastIndexOf('r')); // Index of the last occurence of the letter 'r'
console.log(airline.indexOf('Portugal')); // First index of the string searched within the string
console.log(airline.indexOf('portugal')); // Returns -1 if it does not exist

// String methods always return the new string they create, because string (primitive types) are immutable, so rather than changing them in memory, a new one is created.
console.log(airline.slice(4)); // The argument is the START parameter, so saving index 4, but cut everything before it, since it is the START of the new string
console.log(airline.slice(4, 7)); // The second argument is the END parameter, so it will cut index 7 and beyond, unlike the start parameter.
// Side note: The length of the new/returned string will always be the END parameter - START parameter

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Leaving out the END parameter will just return everything after the START parameter

console.log(airline.slice(-2)); // -START parameter, so it will go that many letters backward and include it and everything after
console.log(airline.slice(1, -1)); // Start at first index, end at -1 from the end

const checkMiddleSeat = function (seat) {
  const letter = seat.slice(-1); // Keep the last 1 character of the string
  letter === 'B' || letter === 'E'
    ? console.log('Middle seat!')
    : console.log('Eisle or window seat!');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('5E');

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// How would we fix this string if a passenger wrote it incorrectly?
const passengerName = 'tHoMaS'; // 'tHoMaS'
const passengerLower = passengerName.toLowerCase(); // Turn it all lowercase
const passengerCorrect = passengerLower[0]
  .toUpperCase()
  .concat(passengerLower.slice(1)); // Take the first index/letter and make it uppercase, then add to that the lowercase string without the first letter
console.log(passengerCorrect); // 'Thomas'

// Comparing emails
const email = 'hello@thomas.io';
const loginEmail = 'Hello@Thomas.Io \n'; // Emails are still valid with strange capitalization

const normalizedEmail = loginEmail.toLowerCase().trim(); // There is also trimStart() and trimEnd()
console.log(normalizedEmail === email);

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // Replace all occurences (global) of 'door' to 'gate'

// Some methods return booleans rather than the new string:
const airbus = 'Airbus A320neo';
console.log(airbus.includes('A320'));
console.log(airbus.includes('Boeing'));
console.log(airbus.startsWith('A'));
console.log(airbus.startsWith('Airb'));

if (airbus.startsWith('Airbus') && airbus.endsWith('neo')) {
  console.log('Part of the NEW Airbus family!');
}

const checkBaggage = function (items) {
  const string = items.toLowerCase();
  console.log(
    string.includes('knife') ||
      string.includes('gun') ||
      string.includes('food') ||
      string.includes('drink') ||
      string.includes('liquid')
      ? 'You are not allowed on board.'
      : 'Welcome aboard!'
  );
};
checkBaggage('I have a laptop, some food, and a pocket knife');
checkBaggage('Socks and a camera');
checkBaggage('Got some snacks and a gun for protection'); */

/* const pin = 1111;
const maxWithdraw = 50;

const requireCard = function (realCardNumber) {
  const cardGuess = prompt('please enter your card number');
  if (cardGuess === realCardNumber) {
    alert('Correct 💳');
    return true;
  } else {
    alert('incorrect try again later');
    return false;
  }
};
const withDraw = function (amount) {
  // withdraw money
  if (amount > maxWithdraw) {
    alert(`You cannot withdraw ${amount} try again later`);
    return;
  } else {
    alert(`successfuly withdrew ${amount}$`);
    moneyOut += amount;
    console.log(moneyOut); // log to the console how much money they have taken out
  }
};

const deposit = function (amount) {
  // deposit
};

const lottery = function (bidAmount) {
  // lottery
};

const pass = function () {
  // if pin correct
  alert('Correct pin ✔');

  // what would they like to do today
  alert('What would you like to do today?');

  const option = prompt('❓');
  // withdraw or deposit
  if (option === 'withdraw money') {
    // withdraw
    if (requireCard()) {
      alert('How much would you like to withdraw?');
      const withDrawAmount = prompt(
        'Enter an amount you will like to withdraw'
      );
      withDraw(withDrawAmount);
    } else {
      return;
    }
  } else if (option === 'deposit money') {
    // deposit
  } else if (option === 'play lottery') {
    // play lottery
  }
};
const myName = 'john';
const middleName = 'jan';
const fullName = `${myName} doe`;
const cardNumber = '4444 1111 6666 2222';

// personal information
const address = '123 drive';

let moneyIn; // refers to how much they have in their bank account right now
let moneyOut = 0; // refers to how much they have  out of their bank

alert(`Welcome back ${fullName} please enter your pin to continue`);
const pinGuess = prompt('Pin🔐');

if (Number(pinGuess) === pin) {
  pass();
} else if (Number(pinGuess) > 9999 || Number(pinGuess) < 1000) {
  alert('not a vaild pin format');
} else {
  alert('incorrect pin try again later');
} */

/* const str = 'a+very+long+nice+string+indeed';
console.log(str.split('+')); // Return an array of substrings seperated by a pattern/string used as the divider

const [firstName, lastName] = 'Thomas Nelson'.split(' '); // Seperate the string by a space to get the first and last name, and destructure the returned array into first and last variables.
console.log(firstName, lastName);

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' ')); // Take an array of values and join them into a string using the first parameter as the "glue" so to speak */

/* const passenger = 'jessica ann smith davis';

const capitalizeName = function (fullName) {
  let capitalizedName = [];
  for (const name of fullName.split(' ')) {
    // capitalizedName.push(name[0].toUpperCase() + name.slice(1));
    capitalizedName.push();
  }
  console.log(capitalizedName.join(' '));
};
capitalizeName(passenger);
capitalizeName('thomas harlon nelson'); */

// const message = 'Go to gate 23!';
// console.log(message.padStart(25, '|').padEnd(35, '|'));

/* const maskCreditCard = function (number) {
  const str = `${number}`;
  console.log(str.slice(-4).padStart(str.length, '*'));
};
maskCreditCard('123454323456'); */

// Repeat
/* const message = 'Bad weather... All departures delayed. ';
console.log(message.repeat(100)); */

/* const planeCount = (count) => {
  console.log(
    `We have ${count} planes waiting in the bay: ${'✈️ '.repeat(count)}`
  );
};
planeCount(10); */

/* document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const lower = text.toLowerCase().split('\n'); // Make everything lower case // Make an array of substrings of each line
  for (let i = 0; i < lower.length; i++) {
    const [first, second] = lower[i].trim().split('_');
    const camelCase = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(camelCase.padEnd(20) + '✅'.repeat(i + 1));
  }
}); */

// Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

// The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

// THIS TEST DATA (pasted to textarea)
/*
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure
*/

// SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
// underscoreCase      ✅
// firstName           ✅✅
// someVariable        ✅✅✅
// calculateAge        ✅✅✅✅
// delayedDeparture    ✅✅✅✅✅

// HINT 1: Remember which character defines a new line in the textarea 😉
// HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
// HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
// HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

// Afterwards, test with your own test data!

// GOOD LUCK 😀

// Data needed for a later exercise
/* const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const row of flights.split('+')) {
  const [status, start, end, time] = row.split(';');
  const output = `${status.includes('Delayed') ? '🛑' : ''}${status.replaceAll(
    '_',
    ' '
  )} from ${getCode(start)} to ${getCode(end)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44);
  console.log(output);

  let arr = [];
  //status
  arr.push(
    status.includes('Delayed')
      ? `🛑${status.replace(/_/g, ' ')}`
      : status.replace('_', '').replace('_', ' ')
  );
  //start
  arr.push(`from ${start.slice(0, 3).toUpperCase()} to`);
  //end
  arr.push(end.slice(0, 3).toUpperCase());
  //time
  arr.push(`(${time.replace(':', 'h')})`);
  console.log(arr.join(' ').padStart(44, ' '));
} */
/* const bookings = [];
let totalProfit = 0;

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199,
  profit = price * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  totalProfit += profit;
  bookings.push(booking);
};

console.log(createBooking('LH123', 57, 299));
console.log(bookings);
console.log(totalProfit); */

/* const flight = 'LH234';
const thomas = {
  name: 'Thomas Nelson',
  passport: 861215003,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 861215003) {
    console.log('CHECKED IN');
  } else {
    console.log('WRONG PASSPORT');
  }
}; */

// checkIn(flight, thomas);

// Original variables
// console.log(flight); // Will change -- because the argument is simply a copy of the reference to the object in the heap, so changing it in the function will change it outside the function
// console.log(thomas); // Won't change -- because since it is a copy of a primitive value, it will instead create a new spot in memory for the new value and not point to the same one as outside

/* const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(thomas); // passport value of thomas is changed inside the function, which changes it outside because reference types
console.log(thomas.passport); // new value
checkIn(flight, thomas); // fails the conditional because it uses the original passport which has been changed */

// Pass by value | Pass by reference
// JavaScript does not have passing by reference, only pass by value
// Yes, when we pass in objects, we are passing A reference, but that reference is a value. The value of the variable is a reference to the memory address of the value

// console.log({ foo: 'bar' } === { foo: 'bar' });

// First-Class Functions

/* const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [firstWord, ...otherWords] = str.split(' '); // Split a sentence into an array of words seperated by a space, then taking the REST of the words and packing them into an array
  return [firstWord.toUpperCase(), ...otherWords].join(' '); // Return array where the first index is the first word capitalized the rest are SPREAD out, then join them to one string
};

const transformer = function (str, cb) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${cb(str)}`);

  console.log(`Transformed by: ${cb.name}`);
};

transformer('JavaScript is the best!', oneWord); */

/* const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `flight: ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book('239', 'Thomas Nelson');
lufthansa.book('623', 'Ethan Santiago');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 613, 'James Earl');
console.log(eurowings); */

/* const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 553, 'James Francis');
console.log(swiss); */

// call() and apply() immidiately call the function given the thing 'this' should be bound to, and the arguments to pass into the function call()/apply() was a method of.
// bind() returns a new function where the 'this' keyword is already bound to the function it was a method of. From this point you can call the new function and 'this' will be bound correctly.

/* const bookEW = book.bind(eurowings); // Takes in the element that you want 'this' to be bound to
const bookLH = book.bind(lufthansa); // Takes in the element that you want 'this' to be bound to
const bookLX = book.bind(swiss); // Takes in the element that you want 'this' to be bound to
bookEW(432, 'Henry Cavill');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jimmy Garopollo');
bookEW23('George Kittle');

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}; */

/* document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); */

// Partial application
/* const addText = (rate, value) => value + value * rate;
console.log(addText(0.1, 200));

const addVAT = addText.bind(null, 0.23);
console.log(addText(0.23, 200));
console.log(addVAT(300));

const addTax = (rate) => {
  return function (value) {
    return value + value * rate;
  };
};

const addTaxRate = (rate) => (value) => value * 2 * rate;
console.log(addTaxRate(0.2)(400));

const addVAT2 = addTax(0.23);
console.log(addVAT2(300)); */

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.
// Here are your tasks:
/* const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
}; */
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
/*
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
*/

// 1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
/* poll.registerNewAnswer = function () {
  let prompt = '';
  for (const option of this.options) prompt += `\n${option}`;
  // Get answer
  const answer = Number(
    window.prompt.call(
      window,
      `${this.question}${prompt}\n(Write option number)`
    )
  );
  // Register answer
  if (typeof answer === 'number' && answer < 4) this.answers[answer] += 1;
  this.displayResults();
}; */

/* poll.registerNewAnswer = function () {
  // Get answer
  const answer = Number(
    prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    )
  );
  console.log(answer);
  // Register answer
  typeof answer === 'number' &&
    answer < this.answers.length &&
    this.answers[answer]++;
  this.displayResults();
}; */

/* poll.registerNewAnswer = function () {
  let choices = '';
  for (const option of this.options) choices += `\n${option}`;
  // Get answer
  const answer = Number(
    prompt(`${this.question}${choices}\n(Write option number)`)
  );
  // Register answer
  if (typeof answer === 'number' && answer < this.answers.length)
    this.answers[answer] += 1;
  this.displayResults();
  this.displayResults('string');
}; */

// 2. Call this method whenever the user clicks the "Answer poll" button.
/* document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll)); */

// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
/* poll.displayResults = function (type = 'array') {
  switch (type) {
    case 'string':
      console.log(`Poll results are ${this.answers.join(', ')}`);
      break;
    default:
      console.log(this.answers);
  }
}; */

// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
// HINT: Use many of the tools you learned about in this and the last section 😉
// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// answers: [5, 2, 3],
// answers: [1, 5, 3, 9, 6, 1],

/* poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string'); */

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
// GOOD LUCK 😀

// IIFE
/* const runOnce = function () {
  console.log('This will run once and never again');
};
runOnce(); // Not true neccessarily, you CAN call it again if you want

(function () {
  console.log('Never run again');
})();

(() => console.log('Also ever run again'))();

{
  const isPrivate = 23;
} */

// C-C-C-CLOSURES!!!
/* const secureBooking = function () {
  let obj = { num: 0 };
  console.log(obj);

  return function () {
    obj.num++;
    console.log(obj);
  };
};

const booker = secureBooking();

booker(); // output: 1
secureBooking(); // output: { num: 0 }
booker(); // output: 2
secureBooking(); // output: { num: 0 }
booker(); // output: 3
secureBooking(); // output: { num: 0 }
booker(); // output: 4
secureBooking(); // output: { num: 0 } */

// booker only retains the reference to passengerCount as it was when const booker was created, and it will keep that forever throughout the applications run time

// Level 1
// Global Execution Context enters the stack
// Scans the document and hoists all function declarations and vars
// VE: secureBooking = <function>
// booker is set to secureBooking, which is called... +++

// Level 2 (secureBooking)
// secureBooking Execution Context enters the stack, pausing the Global Execution Context
// Scan the function body and hoists all function declarations and vars
// VE: passengerCount = 0
// Scope Chain: VE + secureBooking
// <function> is returned, which will be stored in the booker variable
// secureBooking Execution Contexts pops off the stack... ---

// Level 1
// Global Execution Context resumes the execution phase that was paused
// VE: secureBooking = <function> AND booker = <function>
// booker() is called... +++

// Level 2 (booker)
// booker EC enters the stack
// Scan the function body, etc.
// Scope Chain: VE + nothing..?
// WE & Scope Chain of birth place (secureBooking): *passengerCount = 0, secureBooking, booker

/* let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g(); */

/* const boardPassengers = function (n, wait) {
  let perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassengers(180, 2); */

/*
boardPassengers is executed and perGroup is assigned, setTimeout begins, and the console.log all happen instantly.
2 seconds later, the anonymous callback function of setTimeout is run
At this point, boardPassengers is OFF the stack, and the anonymous functions is the only thing on the stack
It has a variable environment of the boardPassengers function, but that's it.
It is able to log perGroup and the n argument, because those were in the variable environment of the function it was created in.
*/

/* 
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/

/* (function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function toBlue() {
    header.style.color = 'blue';
  });
})(); */

// After Global EC does stuff etc.
// We get to the IIFE, which is immidiately invoked and the EC is put on the stack.
// The VE of IIFE is header* object
// addEventListener is invoked, and at that moment toBlue is created ---> CLOSURE CREATED HERE (reference to header* object)
// IIFE pops off the stack and is gone forever, garbage collection likely sweeps up header and everything else in it's VE
// ... ... ...
// I click on the body, which has been waiting for a click event, at which point toBlue() is invoked
// It checks it's variable environment for the header* object -> it is not there
// It checks it's closure to find the header* object, with a style.color of red, as it was the moment toBlue() was created, and assigns it red.

// Data
/* const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin'); */

/* let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE: DOES NOT MUTATE, instead returns an updated array
console.log('.slice()');
console.log(arr.slice(2));
console.log(arr.slice(2, 4)); // End parameter is NOT included in the new array
console.log(arr.slice(-1)); // -1 is the last element of the array
console.log(arr.slice(1, -1)); // -1 is the last element of the array
console.log(arr.slice(-5, 5)); // -1 is the last element of the array
console.log(arr.slice()); // -1 is the last element of the array

// SPLICE: MUTATES, but also returns in an array, the elements spliced from the original array
console.log('\n.splice()');
console.log(arr.splice(-1)); // Start at -1 index from the end (so the last index) and remove the rest, so just the last element
console.log(arr.splice(1, 2)); // Start at index 1, and span 2 elements (so essentially index 1 to 2), then return the removed elements.
console.log(arr); // The original array is mutated to contain the array without the spliced elements

// REVERSE: MUTATES, but also returns the updated array
console.log('\n.splice()');
let arr2 = ['j', 'i', 'h', 'g', 'f'];
arr2.reverse();
console.log(arr2);

// CONCAT: DOES NOT MUTATE, instead returns the updated array
const letters = arr.concat(arr2); // Take arr and push the entirety of arr2 onto it
console.log(letters);
console.log([...arr, ...arr2]); // This accomplishes the exact same thing, including not mutating the original array

// JOIN: DOES NOT MUTATE, instead returns a string with each index joined by the argument
console.log(letters.join('~')); // OUTPUT: 'a~d~f~g~h~i~j' */

/////////////////////////////////////////////////
/////////////////////////////////////////////////

/* const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'PND', 'PSP', 'USD']); */

/////////////////////////////////////////////////

/* currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
}); */

/* console.log(currenciesUnique);
currenciesUnique.forEach((currency, _, map) => {
  console.log(`${key}: ${currency}`);
}); */

/* for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i}: Deposit of $${movement}`);
  } else {
    console.log(`Movement ${i}: Withdrawal of $${Math.abs(movement)}`);
  }
} */

// ForEach
/* console.log('\n||| ForEach method |||');
movements.forEach(function (movement, i, arr) {
  if (movement > 0) {
    console.log(`Deposit: $${movement}`);
  } else {
    console.log(`Withdrawal: $${Math.abs(movement)}`);
  }
}); */

/* console.log([1, 2, 3, 4, 5, 6, 7]);
console.log(new Array(1, 2, 3, 4, 5, 6, 7)); */

/* const newArr = new Array(5).fill(1, 2, 4);
console.log(newArr); */

// Array constructor (not function)
/* const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z); */

/* const randDice = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(randDice); */

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));

/* const account1 = {
  owner: 'Thomas Nelson',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Emily Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Grant Adelson Clark',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sophia Madison',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4]; */

/* ////// Array exercise #1
const bankDepositSum = accounts
  .flatMap((acct) => acct.movements)
  .filter((mov) => mov > 0)
  .reduce((acc, deposit) => acc + deposit);
console.log(bankDepositSum); */

/* // Just with reduce
const bankDepositSumReduce = accounts.reduce((accumulator, { movements }) => {
  movements.forEach((mov) => (mov > 0 ? (accumulator += mov) : accumulator));
  return accumulator;
}, 0);
console.log(bankDepositSum); */

////// Array exercise #2
/* const numDeposits1000 = accounts
  .flatMap((acct) => acct.movements)
  .filter((mov) => mov > 0)
  .reduce((count, deposit) => (deposit >= 1000 ? ++count : count), 0);
console.log(numDeposits1000); */

// Array exercise #3
/* const { deposits, withdrawals } = accounts
  .flatMap((acct) => acct.movements)
  .reduce(
    (acc, mov) => {
      acc[mov > 0 ? 'deposits' : 'withdrawals'] += mov;
      return acc;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals); */

// Array exercise #4
/* const titleCase = function (title) {
  const exceptions = [
    'a',
    'is',
    'the',
    'and',
    'as',
    'for',
    'but',
    'if',
    'nor',
    'not',
    'so',
    'yet',
    'an',
    'of',
    'it',
    'on',
    'in',
    'with',
  ];
  return title
    .toLowerCase()
    .split(' ')
    .map((word, i) =>
      i === 0 || !exceptions.includes(word)
        ? word[0].toUpperCase() + word.slice(1)
        : word
    )
    .join(' ');
};
console.log(titleCase('tHE LAST of THE mOhiCAnS')); */

/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
dogs.forEach((dog) => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});
console.log(dogs);

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little.
const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahDog);
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  } food!`
);

// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
const [ownersEatTooMuch, ownersEatTooLittle] = dogs.reduce(
  (acc, { curFood, recommendedFood, owners }) => {
    acc[curFood > recommendedFood ? 0 : 1].push(...owners);
    return acc;
  },
  [[], []]
);
console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dog's eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dog's eat too little!`);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
console.log(dogs.some((dog) => dog.curFood === dog.recommendedFood));

// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
console.log(
  dogs.some(
    ({ curFood, recommendedFood }) =>
      curFood > recommendedFood - recommendedFood / 10 &&
      curFood < recommendedFood + recommendedFood / 10
  )
);

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
const eatingOkay = dogs.filter(
  ({ curFood, recommendedFood }) =>
    curFood > recommendedFood - recommendedFood / 10 &&
    curFood < recommendedFood + recommendedFood / 10
);
console.log(eatingOkay);

// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const sorted = dogs
  .slice()
  .sort(({ recommendedFood: a }, { recommendedFood: b }) => a - b);
console.log(sorted); */

/* var twoSum = function (nums, target) { */
/*   // Save reference to index of prev */
/*   let prev; */
/*  */
/*   // If any number */
/*   nums.some((num, index) => { */
/*     if (prev === undefined) prev = inde */

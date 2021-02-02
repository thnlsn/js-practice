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
let lastName = 'Aiyuk';
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
console.log(`After marriage:`, marriedBrandon);
// RESULT:
// Before marriage: {firstName: 'Brandon', lastName: 'Kinlaw', age: 22}
// After marriage: {firstName: 'Brandon', lastName: 'Kinlaw', age: 22}

// What is happening here?
/* 

Primitive types:
- Creation phase begins and lastName, oldLastName are set to uninitialized.
- Execution phase begins

*/

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

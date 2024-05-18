// 1. Grade calculator

const phitron_grade_calculator = (marks) => {
  if (marks >= 90) return "A";
  else if (marks >= 86 && marks < 90) return "A-";
  else if (marks >= 82 && marks < 86) return "B+";
  else if (marks >= 78 && marks < 82) return "B";
  else if (marks >= 74 && marks < 78) return "B-";
  else if (marks >= 70 && marks < 74) return "C+";
  else if (marks >= 66 && marks < 70) return "C";
  else if (marks >= 62 && marks < 66) return "C-";
  else if (marks >= 58 && marks < 62) return "D+";
  else if (marks >= 55 && marks < 58) return "D";
  else if (marks < 55) return "F";
};

let marks = 42;
console.log(phitron_grade_calculator(marks), "Grade");

// 2. A program to find if the number is even or odd

function odd_even_checker(num) {
  if (num % 2 == 0) console.log(`${num} is even`);
  else console.log(`${num} is odd`);
}

odd_even_checker(6);

// 3. sorting values in an array

let num_array = [
  1, 2, 16, 17, 18, 19, 20, 3, 9, 10, 11, 12, 13, 4, 5, 6, 7, 8, 14, 15,
];

// ascending sorting
num_array.sort(function (a, b) {
  return a - b;
});
console.log(num_array);

// 4. A program to find if the year is a leap year or not

/* note:
A year is a leap year if the following conditions are satisfied:
* The year is a multiple of 400.
* The year is a multiple of 4 and not a multiple of 100. */

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
    console.log(`${year} is a leap year`);
  else console.log(`${year} is not a leap year`);
}

// checking
isLeapYear(2008);
isLeapYear(2009);
isLeapYear(2010);
isLeapYear(2011);
isLeapYear(2012);
isLeapYear(2013);
isLeapYear(2014);

// 5. from 1-50, finding all the numbers those are divisible by 3 & 5
for (let i = 1; i < 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) console.log(i);
}

// 6. finding the largest name from friends array
var friends = ["rahim", "karim", "abdul", "sajjad", "heroAlom"];

function longestName(friends) {
  let name = friends[0];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length > name.length) name = friends[i];
  }
  return name;
}

console.log(longestName(friends));

// 7. Finding unique numbers

var number = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10];

let unique_num = [];

// Count variable is used to add the new unique value only once in the outputArray.
let count = 0;
// Start variable is used to set true if a repeated duplicate value is already encountered in the output array.
let alreadyInserted = false;

for (let i = 0; i < number.length; i++) {
  for (let j = 0; j < number.length; j++) {
    if (number[i] == unique_num[j]) {
      alreadyInserted = true;
    }
  }
  count++;

  if (alreadyInserted == false && count == 1) {
    unique_num.push(number[i]);
  }
  alreadyInserted = false;
  count = 0;
}

console.log(unique_num);

// 8. finding the maximum number from 'number' array
console.log(Math.max(...number));

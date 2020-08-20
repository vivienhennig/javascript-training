//---------------------//
//-------- 1 ----------//
//---------------------//
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result. Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0). If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    let wordArray = words.split(' ');
    let resArray = [];
    
    wordArray.forEach(word => {
      let num = word.split('').sort();
      resArray[num[0] - 1] = word;
    });
    
    if (resArray.length > 0) {
      return resArray.join(' ');
    } else {
      return '';
    };
};

order('is2 Thi1s T4est 3a'); // 'Thi1s is2 3a T4est'
order('4of Fo1r pe6ople g3ood th5e the2') // 'Fo1r the2 g3ood 4of th5e pe6ople'
order('') // ''

//---------------------//
//-------- 2 ----------//
//---------------------//

// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers. Implement a function that checks if something is a palindrome.

function isPalindrome(line) {
  let newLine = line.toString();
  for (let i = 0; i < newLine.length; i++) {
      if (newLine[i] !== newLine[newLine.length - (i + 1)]) {
       return false;
      };
  };
  return true;
};

isPalindrome('anna'); // true
isPalindrome('max'); // false
isPalindrome(12321); // true
isPalindrome(124356); // false

//---------------------//
//-------- 3 ----------//
//---------------------//

// There is a bus moving in the city, and it takes and drop some people in each bus stop. You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop. Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D  Take a look on the test cases. Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative. The second value in the first integer array is 0, since the bus is empty in the first bus stop.

function bus(busStops) {
  let peopleInBus = 0;
  for (let i = 0; i < busStops.length; i++) {
    peopleInBus += busStops[i][0];
    peopleInBus -= busStops[i][1];
  };
  return peopleInBus;
};

bus([[1, 3], [4, 0], [10,7]]);

//---------------------//
//-------- 4 ----------//
//---------------------//

// The drawing below gives an idea of how to cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different). Can you translate this drawing into an algorithm? You will be given two dimensions:  a positive integer length (parameter named lng) and  a positive integer width (parameter named wdth). You will return an array or a string (depending on the language; Shell bash, PowerShell and Fortran return a string) with the size of each of the squares.

function sqInRect(lng, wdth){
  let result = [];
  if (lng === wdth) {
    return null;
  };
  while (wdth > 0 && lng > 0) {
    if (wdth > lng) {
      result.push(lng);
      wdth -= lng;
    } else {
      result.push(wdth);
      lng -= wdth;
    };
  };
  return result;
};

sqInRect(5, 5);
sqInRect(5, 3);
sqInRect(3, 5);
sqInRect(20, 14);

//---------------------//
//-------- 5 ----------//
//---------------------//

// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

function zeros (n) {
  if (n === 0) return n;
  let result = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num % 5 === 0) {
      num /= 5;
      result += 1;
    };
  };
  return result;
};

zeros(0);
zeros(5);
zeros(7);
zeros(30);

//---------------------//
//-------- 6 ----------//
//---------------------//

// Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].

function spacey(array){
  let word = array[0];
  let result = [word];
  for (let i = 1; i < array.length; i++) {
    word += array[i];
    result.push(word);
  };
  return result;
};

spacey(['kevin', 'has','no','space']);
spacey(['this','cheese','has','no','holes']);

//---------------------//
//-------- 7 ----------//
//---------------------//

// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!
// Therefore you need a method, which returns the smallest unused ID for your next new data item..
// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

function nextId(ids){
  let smallest = 0;
  while (ids.includes(smallest)) smallest++;
  return smallest;
};

nextId([0,1,2,3,5]);
nextId([0,1,2,3,4,5,6,7,8,9,10])
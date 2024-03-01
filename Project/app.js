// 1. Calculate the sum of numbers within an array.

const numbers = [20, 10, 30, 40];
    let sum = 0;
    for (let n = 0; n < numbers.length; n = n + 1) {
        sum += numbers[n];
    }

console.log('The sum of numbers in the array is:', sum);


// 2. Create a length converter function.

 function convertLength(metres){
    const centimeters = metres * 200;
    return centimeters;
 }

 const centimetersValue = convertLength(100)

 console.log('The answer is', centimetersValue);

 // 3. Print all even numbers from 0-100.

 const number = 100 

 for (let number = 1; number <=100; number = number+1) {
 if (number % 2 === 0) {
     console.log(number);
   } 
}

// 4. Print a table containing multiplication table.

let table = 2;
let count = 12;
for (let m = 1; m <= count; m = m + 1) {
    
console.log(table, 'x', m, '=', table * m);

}

 // 5. Create a function that reverses an array.

 function reverseArray(arr) {
    let reversed = [];
    for (let r = arr.length -1; r >= 0; r = r -1) {
        reversed.push(arr[r]);
    }  
    return reversed;
 }

 let words = ['Kuma', 'Boat', 'Your', 'Row', 'Row', 'Row'];
 let reversedWords = reverseArray(words);

 console.log(reversedWords);

 // 6. Sort an array of strings in alphabetical order.

function sortStrings(strArr){ 
    let sortedStrings = strArr.sort(); 
    return sortedStrings;
}
let stringArray = ["Gracie", "Buggy", "Liam", "Aurora"];
let sortedStringArray = sortStrings(stringArray);
console.log(sortedStringArray); 

// 7. Sort an array of numbers in descending order.

function sortArrayDescending(nums) {
    let sortedNums = nums.sort((a, b) => b-a);
    return sortedNums;
}

let numberArray = [12, 5, 9, 42, 4, 6];
let sortedNumberArray = sortArrayDescending(numberArray);
console.log(sortedNumberArray);

// 8. Return a Boolean if a number is divisible by 10.

function isDivisibleBy10(num) {
    if (num % 10 === 0) {
      return true;
    } else {
      return false;
    }
}

console.log(isDivisibleBy10(50));

// 9. Return the number of vowels in a string.

function countVowels(str) {
    let vowelCount = 0;
    for (let v=0; v<str.length; v= v + 1) {
        if (str[v] == 'a' || str[v] == 'e' || str[v] == 'o' || str[v] == 'i' || str[v] == 'u'){
            vowelCount= vowelCount + 1;
        }
    }
    return vowelCount;
}

console.log(countVowels("Good Morning")); 

// 10. Create a function that filters out negative numbers.

function filterPositiveNumbers(arr){
    let positiveArr = arr.filter(num => num >= 0);
    return positiveArr;
}

let myNumArray = [-3,-7,-1,0,5,12,8];
console.log(filterPositiveNumbers(myNumArray)) // Output: [5,  12, 8]



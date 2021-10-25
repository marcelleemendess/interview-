//1) Given a string s consisting of small English letters, find and
// return the first instance of a non - repeating character in it.
// If there is no such character, return '_'.

//Example:
// For s = "abacabad", the output should be firstNotRepeatingCharacter(s) = 'c'.
// There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
// For s = "abacabaabacaba", the output should be firstNotRepeatingCharacter(s) = '_'. There are no characters in this string that do not repeat.

//s = "abacabad" -> d index 7

//There are two steps for the solution
//first: create a empty obj and populate with key(a) -> value(1) of the string
// loop through each item of the string and add 1 if the key repeat ex: {[a=1],[b=1],[c=1],[a=2]}

//Second: then with other iteration, loop through the obj and find the first character with the value = 1

function firstNotRepeatingCharacter(s) {
    //set up empty object
    let obj = {}
    //loop through the string, populate object
    for (let item of s) { //if there is a key repeating  +1
        // if (obj[item]) {
        //     obj[item]++;
        // } else {
        //     obj[item] = 1;
        // }   
        obj[item] = obj[item] + 1 || 1;
    }
    console.log(obj);

    for (let item in obj) {
        if (obj[item] == 1) {
            return item;
        }
    }

    return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'))
// _______________________________________________________________________________________________
//2)
// Given a year, return the century it is in. 
// The first century spans from the year 1 up to and including the year 100,
//the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
    let centuryCount = 0;
    while (year > 0) {
        year = year -100;
        centuryCount = centuryCount + 1
    }
    return centuryCount
}

 //or

function centuryFromYear(year) {
    //The Math.ceil() function always rounds a number up to the next largest integer
    return Math.ceil(year/100)
}

// function centuryFromYear(year) { Not the best option
//     if (year / 100 == 0) {
//         return year / 100;
//     } else {
//         return Math.floor(year/100) +1
//    }
// }

console.log(centuryFromYear(2000))

//3)Given the string, check if it is a palindrome.
function checkPalindrome(inputString) {
    return inputString === inputString.split('').reverse().join('');
}

inputString = 'asd3na'

console.log(checkPalindrome(inputString))

//or, if it's not allow to use built-in functions

function checkPalindrome(inputString) {
    for( let i= 0; i <inputString.length; i++) {
            if (inputString[i] !== inputString[inputString.length - 1 -i]) {
                return false;
            }
    }
    return true
}


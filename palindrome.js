// string 
// function isPalindrome(str) {
// 	let j = str.length -1
// 	for (let i = 0; i < str.length ; i++) {
// 		if (str[i] != str[j]) {
// 			return "not palindrome";
// 		}
// 		j--;
// 	}
// 	return "palindrome";
// }

// let str1 = "racecar";


// console.log(isPalindrome(str1));

// number

function palindromeCheck(num) { 
	let numStr = num.toString(); 
	let result = numStr.split('').reverse().join(''); 
	return numStr === result; 
} 

console.log(palindromeCheck(121)); 




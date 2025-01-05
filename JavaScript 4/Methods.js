// 1. string 
// length 
// slices(start, end) 
// substring() 
// replace()
// replaceAll() 
// touppercase 
// tolowercase
// concat
// trim 
// trimstart
// trimEnd 
// var fname = " Aziz"
// var lname = "Amiraslanov " 
// H/ // console.log(fnamef2]) // console.log(fname.slice(0, 4)) 
// index 

// console.log(fname.substring(0, 4)) // start length

// console. log(fname. replace("]avascript" , "HTML"))

// console.log(fname.replaceAll("Javascript dersleri", "Css dersleri"))

// console.log(fname.toUpperCase()) 
// console. log(fname.toLowerCase()) 
// console. log(fname.concat(" lname)) 

// console.log(fname) 
// console.log(lname) 
// console. log("basliq:" + fname.trim()) 
// console.log("Sonluq:" + lname.trim()) 
// console.log(fname.trimstart())
//charAt (index)
//Split()
/*// String işlemleri
let str = "  JavaScript örneği  ";

//slice()
console.log(str.slice(2, 11)); // "JavaScript"

// substring()
console.log(str.substring(2, 11)); // "JavaScript"

// replace()
console.log(str.replace("örneği", "uygulaması")); // "  JavaScript uygulaması  "

// replaceAll()
let multiStr = "kod kod kod";
console.log(multiStr.replaceAll("kod", "JavaScript")); // "JavaScript JavaScript JavaScript"

// toUpperCase()
console.log(str.toUpperCase()); // "  JAVASCRIPT ÖRNEĞİ  "

// toLowerCase()
console.log(str.toLowerCase()); // "  javascript örneği  "

// concat()
let str1 = "Merhaba";
let str2 = "Dünya";
console.log(str1.concat(" ", str2)); // "Merhaba Dünya"

// trim()
console.log(str.trim()); // "JavaScript örneği"

// charAt()
console.log(str.charAt(5)); // "S"

// split()
console.log(str.split(" ")); // ["", "", "JavaScript", "örneği", "", ""]

// trimStart()
console.log(str.trimStart()); // "JavaScript örneği  "

// trimEnd()
console.log(str.trimEnd()); // "  JavaScript örneği"
// Number işlemleri
let num = 123.456;

// toString()
console.log(num.toString()); // "123.456"
// Array işlemleri
let arr = [1, 2, 3, 4, 5];

// pop()
arr.pop();
console.log(arr); // [1, 2, 3, 4]

// shift()
arr.shift();
console.log(arr); // [2, 3, 4]

// push()
arr.push(6);
console.log(arr); // [2, 3, 4, 6]

// unshift()
arr.unshift(0);
console.log(arr); // [0, 2, 3, 4, 6]

// join()
console.log(arr.join("-")); // "0-2-3-4-6"

// delete
delete arr[2];
console.log(arr); // [0, 2, undefined, 4, 6]

// null
arr[2] = null;
console.log(arr); // [0, 2, null, 4, 6]
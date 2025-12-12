/*
let str = "Hello  world"

let length= str.length
console.log("🚀 ~ length:", length)
*/

/*
let str = "Hello world"

// let subString = str.slice(2,5)
// let subString = str.substring(2,5)
console.log("🚀 ~ subString:", subString)

*/

/*
let str = "Hello world"

let newStr = str.concat("!!!","---")
console.log("🚀 ~ newStr:", newStr)
*/


/*
let str = "Hello world";

// let newStr = str.toUpperCase()
let newStr = str.toLowerCase();
console.log("🚀 ~ newStr:", newStr);

let name = "Urvish";

let searchName = "urvish";
console.log("------>", searchName.toLowerCase() === name.toLowerCase());
*/

/*
let str = "   Hello world    ";
let newStr = str.trim();
console.log("🚀 ~ newStr:", newStr)
*/

/*
let str = "Hello world";
// let index = str.indexOf("o",5);
// let index = str.lastIndexOf("o");
console.log("🚀 ~ index:", index)
*/

/*

let str = "Hello world, @ welcome / to the * world of JavaScript";

// let str2 = str.replace("world", "Universe");
// let str2 = str.replaceAll("world", "Universe");
// let str2 = str.replaceAll(/[@/*]/g, "----");
let str2 = str.replace(/[@/*]/g, "----");

console.log("🚀 ~ str:", str2)
*/


/*
let str = "Hello world, welcome to the world of JavaScript";

let availabe = str.includes("World");
console.log("🚀 ~ availabe:", availabe)
*/

/*
let str = "Hello world, welcome to the world of JavaScript";

let ans = str.startsWith(" Hello");
console.log("🚀 ~ ans:", ans)
*/

/*
let str = "Hello world,  welcome to the world of JavaScript";

// let arr = str.split("world");
// let arr = str.split(" ");
// let arr = str.split("");
console.log("🚀 ~ arr:", arr)

*/


// hello world => dlorw olleh
/*

let str ="hello world";
function reverseString(str){
    let reversedStr="";
    for(let i=str.length-1;i>=0;i--){
        reversedStr+=str[i];
    }
    return reversedStr;
}
let result=reverseString(str);
console.log("Reversed String:",result);
 */

// hello world => world hello
/*
let str ="hello world";
function reverseWordsInString(str){
    let words=str.split(" ");
    let reversedWords=words.reverse();
    let result=reversedWords.join(" ");
    return result;
}
let finalResult=reverseWordsInString(str);
console.log("Reversed Words String:",finalResult);
*/


// hello    world ji   !! => hello world ji !!
/*
let str ="hello    world ji   !!";
function removeExtraSpaces(str){
    let words=str.split(" ");
    let filteredWords=words.filter(word=>word!=="");
    let result=filteredWords.join(" ");
    return result;
}
let finalResult=removeExtraSpaces(str);
console.log("String with Extra Spaces Removed:",finalResult);
*/

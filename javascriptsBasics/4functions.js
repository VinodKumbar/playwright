/* 

What are the functions ? 
 Functions are block of code can be executed together by wrapping them in a module.

 */

 function add(a,b){
        return a+b
 }

 let sum = add(3,3)
 console.log(sum)

console.log("Function which do not have name are called as Anyonymus functions -- Funtion Expression - 1st Approach")
let sumOfIntegers = function (c,d){
    return c+d
}
console.log(sumOfIntegers(3,3))

console.log("2nd Approach - Fat Pipe")
let sumOfNumbers = (c,d) => c+d
console.log(sumOfNumbers(3,3))

console.log("About var keyword, whats the scope of var keyword'\n' 1- Global and 2-Functional level '\n' var can in re-declared")
var greet = "Evening"    // Global Level

if(1==1){
    var greet = "Afternoon"
    var greet = "Afternoon and Night"     // re-initalization
}
function scopre(){
    var greet = "Morning"   // Functional Level
}
console.log(greet)


console.log("About let keyword, whats the scope of var keyword'\n' 1- Global and 2-Block level '\n' and let can not be re-declared '\n' var and let can be re-intialized")
let greet1 = "Evening"    // Global Level
greet1 = "Night"            // re-initailzation
if(1==1){
    let greet1 = "Afternoon"  // Block Level 
}
function scopre(){
    let greet1 = "Morning"   // Block Level
}
console.log(greet1)


console.log("About const keyword, whats the scope of var keyword'\n' 1- Global and 2-Block level '\n' and const values can not be re-declared '\n' if try to re-declar then it will throw error - Assignment to constant variable")
// const greet2 = "Evening"    // Global Level
greet2 = "Evening" 
greet2 = "Night"            // re-initailzation
if(1==1){
    let greet2 = "Afternoon"  // Block Level 
}
function scopre(){
    let greet2 = "Morning"   // Block Level
}
console.log((greet2))


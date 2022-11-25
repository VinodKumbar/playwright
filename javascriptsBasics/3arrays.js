var marks = Array(6) // we cannot re-declare variable with let keyword but possible with var
var marks = new Array(20,40,35,12,37,100)
var marks = [20,40,35,12,37,100]

console.log("how to print the array")
console.log(marks)


console.log("how you can access the array value ") 
console.log(marks[2]) 


console.log("  how to assign the value to the array of specific index -> [20,40,35,14,37,100]") 
marks[3] = 14; 
console.log(marks) 


console.log("  how to find the length of the array -> 6") 
console.log(marks.length)


console.log(" append new element / value to the array -> [20,40,35,14,37,100,65]") 
marks.push(65)
console.log(marks) 


console.log("  how to delete the last element / value from the arry -> [20,40,35,14,37,100]") 
marks.pop()
console.log(marks) 


console.log("  how to add new element/value at the begining of the array -> [12, 20,40,35,14,37,100]") 
marks.unshift(12)
console.log(marks) 


console.log(" how you can get the index of the array value or element") 
marks.indexOf(100)
console.log(marks.indexOf(100)) 


console.log(" how to verify whether element present in array or not -> 120 is present in array or not") 
console.log(marks.includes(120))


console.log(" how to divide the array into Sub arrays") 
subMarks = marks.slice(2,5)
console.log(subMarks)


console.log(" how to print all the elements of array") 
for (let i=0; i<marks.length; i++){
    console.log(marks[i])
}


console.log(" Sum-up all the elements of array") 
var sum =0
for (let i=0; i<marks.length; i++){
    sum = sum+marks[i]
}
console.log(sum)

console.log("What are the array Functions ? -> reduce, filter & map")
console.log(" Sum-up all the elements of array usinsg reduce method") 

let totalMarks = marks.reduce((sum1, mark) => sum1 + mark, 0)
console.log(totalMarks)


console.log("Print only even numbers from array-> for loop and if condition '\n' create new array with evem numbers of scroes array [12,14,16]")
var scores = [12,13,14,16] 
var evenScores = []

for(let i=0; i<scores.length;i++){
    if(scores[i]%2==0){
        evenScores.push(scores[i])
    }
}
console.log(evenScores)


console.log("rint only even numbers from array->filter method") 
let newFilterScores = scores.filter(scores => scores%2 ==0)
console.log(newFilterScores)
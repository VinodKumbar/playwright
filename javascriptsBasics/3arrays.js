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


console.log("print only even numbers from array->filter method") 
let newFilterEvenScores = scores.filter(scores => scores%2 ==0)
console.log(newFilterEvenScores)


console.log("Mapping -> print only even numbers from array and multi[ly each value by 3 -> map method '\n' and sum-up the mapped array") 
let mappedArray = newFilterEvenScores.map(score => score*3)
console.log(mappedArray)
let totalValue = mappedArray.reduce((sum2, value) => sum2+value, 0)
console.log(totalValue)
 

console.log("how to cahin the reduce, filter and map methods and get the same results")
var scores1 = [12,13,14,16]
let sumValue = scores1.filter(score => score %2 ==0).map(score => score *3).reduce((sum2, value) => sum2+value, 0)
console.log(sumValue)



console.log("how to sort the Arrays which have string elemets/ values")
let fruits= ["banana", "mango", "pomegrante", "apple"]
fruits.sort()
console.log(fruits)

console.log("how to Revers sort the Arrays which have string elemets/ values")
fruits.reverse()
console.log(fruits)


console.log("how to sort the Arrays which have numbers elemets/ values")
let numbers=[12,003,19,16,14]
console.log(numbers.sort()) // sort() wont work with Numbers, so we need apply custo logic
console.log(" 1st approach")
numbers.sort(function(a,b){
    return a-b
})
console.log(numbers)

console.log ("2nd approach - bubble sort in asencindg order")
numbers.sort((a,b)=> a-b)
console.log(numbers)


console.log ("2nd approach - bubble sort in descending / reverse  order")
numbers.sort((a,b)=> b-a)
console.log(numbers)
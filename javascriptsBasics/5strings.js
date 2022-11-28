console.log("In String we have collections of Characters")
let day = "tuesday"
console.log("The length of String is : " + day.length)
console.log("The Sub string of substring is : " + day.slice(0,4))
console.log("How to access the 2nd charcter if string : " + day[1])
console.log("Split the String into 2 parts ? -> '\n' tue   day  '\n' and access the first part i.e tue ")
let splitDay = day.split("s")
console.log(splitDay[0].trim())



console.log("how to convert String into Number format and get the difference between to numbers '\n' and convert string back to Number")

let date = "23"
let nextDate = "27"
let diff = parseInt(nextDate) - parseInt(date)   // String to Numbers
console.log("String to Numbers : "+ diff)
date.toString()  // Numbers to String
console.log("Numbers to String : "+ date)



console.log("How to concatenate 2 string ")
let newQuote = day + " is Funday day"
console.log(newQuote)
console.log("the index of 'd' is : " + newQuote.indexOf("day"))
console.log("the index of 2nd 'd' is : " + newQuote.indexOf("day", 5))



console.log("WAP to check how many times day occured in string : Tuesday is Funday")
let count = 0
let value = newQuote.indexOf("day")
while(value!==-1){
    count ++
    value = newQuote.indexOf("day", value+1)
}
console.log("The Number of day occured in complete stting is  :"+count)
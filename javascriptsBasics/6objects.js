// Object is collection of properties

let person = {
    firstName : "Vinod",
    lastName  : "Kumbar",
          age : 24,
    fullName  : function(){                            // objects can have functions as property
        console.log(this.firstName  + " " + this.lastName)
    }

}

console.log("How to access the properties values of object using dot notation ? -> "+person.firstName)
console.log("How to access the properties values of object using array notation ? -> "+person['firstName'])
console.log("How to change the property value at run time ? -> ")
person.firstName = "Shree"
console.log("properties values of object that changed at Run time and print it using dot notation ? -> "+person.firstName)
person.gender = "female"
console.log("Add the new propery value at run time")
console.log(person)
console.log("Delete propery at run time")
delete person.gender
console.log(person)

console.log("How to chek whether propery is presnet in obeject or not ?_> '\n' is present - true if not present - false")
console.log("gender" in person)

console.log("How to iterate through object values or '\n' WAP to print all the values of the Javascript object")
for(let key in person){
    console.log(person[key])
}


console.log("How to cal the functions declared in objects")
console.log(person.fullName())
// classes have been introduced from ES6
// how to access the propert of any class - by create a object of class

module.exports =  class Person{
    age = 25                        // class proeprty
    get location(){
        return "Canada"
    }

    /*
       What is Constructor ?
        Constructor is a method which executes by default when you create object of the class
    */
    constructor(firstName, lastName){
        this.firstName = firstName                   // instance varibale or instance properties
        this.lastName = lastName    
    }

    // methods
    fullName(){
        console.log(this.firstName + " " + this.lastName)
    }
}

/* let person = new Person()
console.log(person.age)
console.log(person.location)



What is Constructor ?
Constructor is a method which executes by default when you create object of the class


let person1 = new Person("Vinod", "Kumbar")   // object person1 and person2 are called as objects or instance of the class
console.log(person1.fullName())
let person2 = new Person("Shree", "K")
console.log(person2.fullName())
*/
 
console.log("How to access the class methods and variabkes in other js file ? -> '\n' by using export methods i.e '\n' - module.export '\n' and use require method where you want to access class file ?")
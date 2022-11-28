const Person = require("./7classes")
/*

1. Inheritance is the Main pillar in Object Oriented Programming
2. One class can be inherit / acquire the properties, methods of anoter class
3. The class which inherits the properties of other is knows as SUbclass ( derived class, child class)
4. The class whose properties are inherited is known as Superclass or Parent class
5. Must user extends keyword to inherit to parent class
6. Must use require method 
7. If use constructor in subclass, then first constructor should be the parent class, constructor using Super keyword
*/

class Pet extends Person{
     
    get location(){                            // get location method has been overriden
        return "Bluecross"
    }

    //  call the parent class constructor
    constructor(firstName, lastName){
        super(firstName, lastName)
    }

}

let pet = new Pet("Rocky", "Oliver")
pet.fullName()
console.log(pet.location)

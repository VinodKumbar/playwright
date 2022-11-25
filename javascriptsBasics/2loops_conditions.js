const flag = true

if(!flag){
    console.log("Condition Satisfied")
}
else{
    console.log(flag)
    console.log("Condition NOT Satisfied")
}
// *******************************************************

let i=0
while(i<10){
    i++
    console.log(i + " I am inside loop")

}
// *******************************************************
let required = true
while(required){
    console.log(required)
    required = false
}
// *******************************************************
do{
i++
}while(i<10);
console.log(i)

// *******************************************************

for (let j=0; j<=10; j++){
    console.log(j)
}

// *******************************************************

//  WAP to get numbers which are commmon multiples of 2 and 5
//  from 1 to 100 give me common multiple values of 2 and 5
// fist 3 values 

console.log("**********************************")
let n = 0
for (let k=1; k<=100; k++){
    if(k%2 == 0 && k%5 == 0){
        n++
        console.log(k)
        if(n==3)
        break
    }    
}
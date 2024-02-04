let name="Vj"
name="mano"
console.log("updated->",name)

// const name1="vj"
// name1="mano"
// console.log(name1)

//variables
//string,number,array,object
console.log("variables")

let car="bentley"
console.log("string->",car)

let bike=22
console.log("number->",bike)

let sky=[34,"fifa",76,"red"]
console.log("array->",sky)
console.log("calling one index in array->",sky[1])

let sea={
    name:"mano",
    Course:"fullstack"
}
sea["batch"]="8am"
console.log("object->",sea)
console.log("calling one object->",sea.Course)

//operators
//arithmetic,logical,comparison,ternary

//arithmetic operator
//+,-,*,/,%
let num=3
console.log(num+2)
console.log(num-2)
console.log(num*2)
console.log(num/2)//quotient
console.log(num%2)//reminder

//logical operator
console.log("logical operator->",10!=5)
console.log("logigal operator->",10<5)

//comparison operator
//and(&&) or(||)
console.log("comparison operator->",((10!=5&&10<5)||10>7))
console.log("comparison operator->",(10!=5&&(10<5)||10<7))

//ternary operator
//condition ? if true:if false;
let dog=3
10>2? dog=dog+2:dog=1;
console.log("ternary operator->",dog)
0>2? dog=dog+2:dog=1;
console.log("ternary operator->",dog)

//loops
//for, while, if, nested if

//for loop
for(plane=0;plane<5;plane++){
    console.log("for loop->","flight")
}
jet=[21,"flight",22,"boat"]
for(i=0;i<jet.length;i++){
    console.log("for loop->",jet[i]+" "+i)
}
jet=[21,"flight",22,"boat"]
for(i=0;i<jet.length;i++){
    console.log("for loop break->",jet[i]+" "+i)
    break
}

//while loop
race=0;
while(race<5){
    console.log("while loop->","height")
    race++
}

truck=[22,"bike",23,"boat"]
fast=0;
while(fast<truck.length){
    console.log("while loop->",truck[fast])
    fast++
}

//if loop
let no=0
if(no!=0){
    console.log(no)
    no=no+5
    console.log(no)
}else{
    console.log("if","no is zero")
}

//nested if
let orange=3
if(orange<2){
    console.log(orange)
    orange=orange+3
    console.log(orange)
}else if(10<7){
    console.log("wrong")
}else{
    console.log("nested if->","right")
}


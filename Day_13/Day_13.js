let car=[4,6,3,4,7,1,6]
let van= new Set(car)
// console.log(van)
console.log(Array.from(van),"<--removing duplicate values")


// for map and set length have to give .size()


// date methods

let fire=new Date()
console.log(fire,"<--printing current date, time")
console.log(fire.getDate(),"<--printing date individually")
fire.setDate(15)
console.log(fire,"<--Updating date by set")
fire.setMonth(1)
console.log(fire,"<--printing month")


// class and constructor


// class
class mango{
    name="mano"
    course="cse"
}
let apple=new mango()
console.log(apple,"<--printing object by class")
console.log(apple.course)


// constructor
class red{
    name="mano"
    course="cse"
    constructor(a){
        this.name=a
    }
}
let yellow=new red("updated")
console.log(yellow,"<--updated class by constructor")


// try() catch() finally()
// try()is used for skiping the error and print
// catch()
// finally()is it print what we given 

try{
    let hill="car"
    hie="car"
    consolelog(hill)
}catch(e){
    console.log(e)
}finally{
    console.log("it will print","<--finally")
}


// 

let can=16.7432
console.log(can.toPrecision(3),"<--precision")//it will print without considerable
console.log(can.toFixed(3),"fixed")//it will print point after
console.log(can.toString()+5,"<--printing to string")


// user defined function

// add or sub by function
function addorsub(a,b){
    if(a=="add"){
        b=b+15
    }else{
        b=b-4
    }
    console.log(b,"<--adding by function")
}
addorsub("add",10) 
// addorsub("sub",10)


// add or sub ny return
function song(a,b){
    if(a=="add"){
        b=b+5
    }else{
        b=b+10
    }
    return b
}
console.log(song("add",5),"<--printing sub in return")
// console.log(song("sub",4),,"<--printing sub in return")


// IIFE
// self invoke or immediately invoke

let jet=(()=>{
    console.log("hello","<--IIFE")
})()


// arrow function->this is ES6 function

let speed=()=>{
    console.log("this is speed","<--arrow function")
}
speed()


// closures/ higher order function/ callback

function sky(){
    return function (){
        console.log("this is car","<--higher order function")
    }
}
sky()()


// hosting
// if we give first console and then let declare it will error, 
// incase if we give first console and then var declare it will print undefined

console.log(rock)
var rock="planet"

console.log(rock)
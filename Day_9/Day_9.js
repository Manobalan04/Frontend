//switch case
switch("bentley"){
    case "gt":
        console.log("switch case->","selected option is gt")
        break;
    case "ferrari":
        console.log("switch case->","selected choice is ferrari")
        break;
    default:
        console.log("switch case->","no choice were selected")
        break;
}


// advanced for loop
car=[21,"ferrari",22,"jaguar"]

for(let model of car){
    console.log("advanced for loop->",model)
}


// do while loop
// bus=[34,"car",76,"bike"]

// y=4
// do{
//     console.log(bus)
//     y++
// }while(y>bus.length)


// iterating object
let obj={
    name:"mano",
    course: "cse"
}

for(let o in obj){
    console.log(o)
    console.log(obj[o])
}


// printing empty array
gun=[2,"car",67,"bike"]
gun[6]="car"
console.log(gun)
console.log(gun.length)

// Inbuild method

// predefined function

// converting string to array

// it will spilt and show in output only
let motor = "this is slower"
let strToArray=motor.split(" ")
console.log("split in output",strToArray)


// for permanant changing from string to array
let boat="this is faster"//let a="this is faster"
console.log(boat)//console.log(a)
console.log("length of array->",boat.length)

let boatToArray=(boat.split(" "))//let aToArray=(a.split(" "))
console.log(boatToArray)//console.log(aToArray)
console.log(" length of array->",boatToArray.length)

for(i=0;i<boatToArray.length;i++){//for(i=0;i<aToArray.length;i++){
    console.log("spilt by for loop->",boatToArray[i]+" "+i)//console.log(aToArray[i]+" "+i)
}//}


// printing string from lowercase to uppercase

console.log()
ran="fire bolt watch"
console.log("printing in uppercase->",ran.toUpperCase())
console.log("printing in lowercase->",ran.toLowerCase())//printing string from uppercase to lowercase
console.log("printing the individual letter->",ran.charAt(3))//printing individual string letter
console.log("checking the element is there or not->",ran.includes("bolt"))//checking the given is there in the given string)
console.log("slice->",ran.slice(3,7))//it will print from the given index(parameter starting to ending
console.log("slice->",ran.slice(-5,-1))//it will print from the given index(parameter starting to ending
console.log("slice->",ran.slice(3))
console.log("substring->",ran.substring(3,7))//it not print negative value
console.log("printing the substr ->",ran.substr(3,2)) //it will print index word second and in the index word parameter

let van1="car"
console.log("printing the element as given parameter->", van1.padStart(6,"my"))//doubt

let van2=" car"
console.log("",van1==van2)
console.log("",van2)
console.log("trim",van2.trim())
console.log("trim",van2.trim()==van1)
// console.log("->",van1.trim("c"))//doubt
console.log("concat",van2.concat("lane"))
console.log("adding",van2+"lane")
console.log("repeat",van1.repeat(3))
console.log("startsWith",van1.startsWith("lane"))
console.log("endsWith",van1.endsWith("ar"))

// string search method

let mike="wavev"
console.log("indexOf->",mike.indexOf("v"))//it will print index of given letter
console.log("",mike.indexOf("v",3))//it will ignore first three
console.log("lastIndexOf",mike.lastIndexOf("v"))//it will print the from last index but it start index num from left to right

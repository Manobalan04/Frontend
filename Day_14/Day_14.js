//   use strict--> it is used to check the let and constant like keywords if the keywords not given it will be error

// "use strict"
// red="javascript"
// console.log(red)

"use strict"
let yellow="python"
console.log(yellow,"<--using stict")


//string template-->it is ti add value inbetween of the element

let input="python"
let air=`this is ${input} programming`
console.log(air,"<--string template")


//promise
// it is like advanced of try() catch()
// it is used to run the output by giving the function in like try() catch() so that it will not print throw error


let a=10
let boat=new Promise((resolve, reject)=>{
    if(a==1) 
        resolve("speed")
    else
    reject ("error wrong")
})

let result=boat.then((van)=>{
    console.log(van)
}).catch((er)=>{
    console.log(er)
})


// let b=20
// let flight=new Promise((gun,bullet)=>{
//     if(b==20)
//     gun("correct")
// else
// bullet("wrong")
// })

// let last=flight.then((gt)=>{
//     console.log(gt)
// }).catch((r)=>{
//     console.log(r)
// })


// asynchorous function, await()

let c=5
let orange=new Promise((solution,solvent)=>{
    if(c==5)
    solution("first")
else
solvent("second")
})

async function black(){
    let violet=await orange//await will wait to previous function to print the output then it will process after oupt of previous comes
    console.log(violet)
}
black()



let d=5
let grape=new Promise((paper,scissor)=>{
    if(d==4)
    paper("yes")
else
scissor("no")
})

async function glue(){
    try{
        let brown=await grape
        console.log(brown)
    }
    catch(er){
        console.log(er)
    }
   
}
glue()


// parseInt
// it is used to convert string to number
// ex: "5" is converted to number 5

console.log(parseInt("5")+10,"<--parseInt")


// typeOf
// it will print type of data

console.log(typeof("word"),"<--typeof")
console.log(typeof undefined,"<--typeof")
console.log(typeof(typeof undefined),"<--typeof")
console.log(typeof [5,7],"<--typeof")


// isNAN
// it gives that given data is not a number then it will print true

console.log(isNaN(2),"<--isNaN")
console.log(isNaN(true),"<--isNaN")
console.log(isNaN("python"),"<--isNaN")


// setTimeOut
// it will print output when given delay what time we given
// 6000 is given as millisecond 

setTimeout(()=>{
    console.log("python","<--setTimeout")
},6000)


//setInterval
// it will keep on printing with given interval of time

setInterval(()=>{
    console.log("javascript","<--setInterval")
},3000)

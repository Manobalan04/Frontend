let gun=[32,56,23,67,34,7,1,100]

console.log(gun.sort(),"<-imbuild sorting")//it take first element only to check to sort

//sorting by function
gun.sort(function(a,b){
    return a-b
})
console.log(gun,"<-sorting by function")


gun.sort(function(a,b){
    return b-a
})
console.log(gun,"<-sorting by function in reverse")

// --------------------------------------------------------------------------------------------------------

//Iteration

let car=[5,10,7,6,3]


// for each loop
let bus=car.forEach((e)=>{//for each loop
    console.log(e,"<-printing loop by (for each loop)")
})

let jet=car.forEach((e)=>{//adding in for each loop
    return e+5
})
console.log(jet,"<-adding in forEach loop)")//for each method cannot be add elements or values it is for only printing loop


//map  //in map if we giving conditon it will check and push to array even it is true or false

//printing loop by map method
let truck=car.map((e)=>{
    console.log(e,"<-printing loop by map")
})


//adding element at the end by map method
let flight=car.map((e)=>{
    return e+5
})
console.log(flight,"<-adding integer in map")


//adding element at the end by map method
let van=car.map((e)=>{
    return e+"new"
})
console.log(van,"<-adding string in map")


//printing two parameters which is value and index
let ran=car.map((e,i)=>{// printing the two parameters(value and index)
    console.log(e,"printing value parameter")
    console.log(i,"printing index ")
    return e+5
})
console.log(ran)



// using += in map method
let light=car.map((e)=>{
    return e+="update"
})
console.log(light,"<-using +- in map")//it add at end what we are giving


// using = in map method
let thunder=car.map((e)=>{
    return e="color"
})
console.log(thunder,"<-using = in map")//it remove the given values and add what we given i =


let music=car.map((e)=>{
    return e>5
})
console.log(music,"<-map method for condition checking")


// filter() like boolean
let boat=car.filter((e)=>{
    return e>5
})
console.log(boat,"<-filter method")//filter method will print only the given conditon is true


// find() like boolean
let road=car.find((e)=>{
    return e>5
})
console.log(road,"<- find method")//it check the conditon and print and stop if satified in first meeting condition


//some() like boolean
let sky=car.some((e)=>{
    return e>5
})
console.log(sky,"<-some method")//it will print true only one element meet condition


// every()
let red=car.every((e)=>{
    return e>5
})
console.log(red,"<-every method")//it only print true when all the input meet the conditon otherwise it is false


//reduce()  //it will add all the elements one by one like factorial and print as single value
let brown=car.reduce((e,i)=>{//like function
    return e+i
})
console.log(brown,"<-reduce method")


//new Map() //it is imbuild class  in javascript
//(if str,var,num,arr is used with . then it is function)
//(if (new) given before the value it is class )

let bike=new Map()
bike.set("name","mano")
console.log(bike,"<-creating obj using newMap()")//creating and printing object

let cycle=new Map()
cycle.set("name","mano")
console.log(cycle.get("name"),"<-printing values by giving key")//printing values

let disc=new Map()
disc.set("name","mano")
disc.set("course","cse")
disc.set("batch","first")
disc.set("name","Vj")
console.log(disc.get("name"),"<-updated obj")
console.log(disc,"<- printing the updated in obj")//updating object


let fire=new Map()
fire.set("name","mano")
fire.set("course","cse")
fire.set("batch","first")
console.log(fire.has("name"),"<-checking the given keys like boolean with (has)")
console.log(fire.has("name1"))

// disc.delete("batch")
// console.log(fire,"<- deleting obj by imbuild function")


// printing values can be done by loop (values can not be check directly like keys)
// for(let obj of fire.values()){
//     console.log(obj)
// }


for(let obj of fire.values()){
    if(obj == "mano"){
        console.log(obj)
        break
    }
}


// printing keys by loop
let white=new Map()
white.set("name","mano")
white.set("course","cse")
white.set("batch","first")

for(let water of white.keys()){
if(white.get("name")=="mano"){
    console.log(water)
    break
}
}
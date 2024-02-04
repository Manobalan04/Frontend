// replacing the word
let gun="This is Javascript"
console.log(gun.replace("Javascript","Python"))

console.log(gun.search(/h/),"<-search")//printing the index number by giving word
console.log(gun.search(/H/i),"<-search without case sensitive")//it will print even giving in captial for small letter(print as global)

console.log(gun.match("s"),"<-match")//printing the given,index no,input 

console.log(gun.match(/S/ig),"<-match by global")//it will print even giving in captial for small letter(and print the all same element or letter like duplicate as global)

let fire="This is Python"
console.log(fire.matchAll("h"),"<-matchAll")//it will print as expression
let convertToArray=fire.matchAll("h")
// console.log(Array.from(convertToArray))//printing in array
let arr13=Array.from(convertToArray)

// console.log(Array.from(convertToArray)[1][0],"<----")
// console.log(Array.from(convertToArray)[0],"<-printing index by matchAll")//printing the specific array

// let man=Array.from(convertToArray)[1]
// console.log(man[0])
// console.log(man.index)

// ___________________________________________________________________________________________________________

let car=[5,10,2.1,7]
car.push(10)//it add element at end
car.unshift(1)//it add element at first
console.log(car,"<-push,unshift")

car.pop()//it remove last element
console.log(car,"<-pop")

car.shift()//it remove first element
console.log(car,"<-shift")

console.log(car.length,"<-length")//printing length of array

console.log(car.toString(),"<-array to String")//converting to array to string

console.log(car.concat(["add"]),"<-concat")//adding to array

// spread operator or three dot
arr=[1,2,3,5,6]
let bike=[arr,[6,7,8,7],[8,5,6,4]]
console.log(bike)
console.log(bike[1][2])

let jet=[...arr,...[6,7,8,7],...[8,5,6,4]]//it will print combine as one array
console.log(jet,"<-three dot")

jet.splice(3,0,"new")//adding new element in array
console.log(jet,"<-splice")

// jet.splice(3,1,"new","car")
// console.log(jet)

console.log(jet.slice(3,8),"slice")//printing element as given parameters

console.log(jet.includes("new"))//checking te elements is there not like boolean
console.log(jet.includes("new4"))

console.log(jet.toString(),"<-converting to string")//converting to string
let red=jet.toString()
console.log(red.includes("ne"),"<-includes in string")

console.log(jet.join('*'),"<-join")//manually adding inbetween any sign

ff=[[2,3,4,4],[2,4,7,7]]
console.log(ff.join("&"))

let blue=[2,7,5,8,0]//printing in reverse order
console.log(blue.reverse(),"<-reverse")

let gg=[2,3,4,5,7,89,0]//printing reverse in for loop
for(i=gg.length-1;i>=0;i--){
    console.log(gg[i],"<-reverse by for loop")
}

console.log(blue.sort(),"<-sort")//printing in ascending order

let brown=[2,7,5,8,0]//updating th elements- fisrt is what element have to enter, second is from which index, third is upto which element
console.log(brown.fill(1,0,3),"<-fill")

console.log(arr13[0][0])
console.log(arr13[0].index)

console.log(arr13[1][0])
console.log(arr13[1].index)

let yellow=[3,5,7]
console.log(yellow.reverse())

let black=[5,3,7]
black.splice(1,0,9)
console.log(black)

let ash=[3,6,8]
console.log(ash.toString())
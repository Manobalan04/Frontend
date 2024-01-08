// printing star pattern
// @@
// @@@@
// @@@@@@

let result=""
for(i=0;i<3;i++){
    for(m=0;m<6;m++){
        if(i==0 && m<2){
            result+="@"
        }else if( i==1 && m<4)
        result+="@"
        else if( i==2 && m<6)
        result+="@"
    }
    result+="\n"
}
console.log(result)


// pattern by or operator
// #
// ###
// #####
// #######

let mustang=""
for(i=0;i<4;i++){
    for(m=0;m<8;m++)
    if((i==0 && m<1)||(i==1 && m<3)||(i==2 && m<4)||(i==3 && 6))
    mustang+="#"
    mustang+="\n"
}
console.log(mustang)


// pattern by count
// *
// ***
// ****
// ******

let bentley=""
count=1
for(i=0;i<4;i++){
    for(m=0;m<count;m++){
        bentley+="*"
        
    }
    bentley+="\n"
    count+=2
}
console.log(bentley)


// ^^
// ^^^
// ^^^^
// ^^^^^^^
// ^^^^^^^^^

let gt=""
count=1
for(i=0;i<6;i++){
    for(m=0;m<count;m++){
        gt+="^"
    }
    gt+="\n"
    if(i>2)
    count+=2
    else
    count+=1
}
console.log(gt)


// printing pattern in ascending

let fire=0
count=1
for(i=1;i<6;i++){
    for(m=0;m<count;m++){
        fire+=i
    }
    fire+="\n"
    count+=1
}
console.log(fire)


// printing length for each single word

let air="this is python"

let bike=air.split(" ")
for(let train of bike)
console.log(train+" ->"+bike.length)


let sand="this is javascript"

let brick=sand.split(" ")
for(let word of brick){
    console.log(word+"->"+word.length)

for(letter of word){
    // console.log(letter)
    if(letter=="t"){
        console.log(word+"->"+word.indexOf(letter))
        return
    }
}

}


// prime number
let prime=4
let isPrime=true
for(i=2;i<prime;i++){
    if(prime%i==0){
        isPrime=false
    }
}
console.log(isPrime)
if(isPrime=true){
    console.log("the given no is not a prime")
}else if(
   isPrime=false
){
 console.log("the given no is prime")
}


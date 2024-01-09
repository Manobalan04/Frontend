// printing word in reverse order
console.log()

let car="This is Python"

let bike=car.split(" ")
// console.log(bike)
let cycle=bike.reverse().join(" ")
console.log(cycle,("<--Reversing words"))
console.log()


// printing reverse in for loop

let red="This is Javascript"
let green=" "

let yellow=red.split(" ")
console.log(yellow)

for(i=yellow.length-1;i>=0;i--){
    green+=yellow[i]
}
console.log(green)


// ----------------------------------------------------------------------------------------------------

// printing letter in reverse
console.log()

function water(air){
    return air.split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(water("This is apple"),"<--Reversing character")
console.log()

// ---------------------------------------------------------------------------------------------------

// removing the duplicate words
console.log()

function first(inputString){
let words=inputString.split(" ")
let uniqueWords=[...new Set(words)];
return uniqueWords.join(" ");
}
let input="i'm a teacher and teacher";
let output=first(input);
console.log(output,"<--removing duplicate words");
console.log()

// ------------------------------------------------------------------------------------------------------

// printing pattern
console.log()

let pattern=""
for(i=0;i<4;i++){
    for(m=0;m<8;m++){
        if(i==0 && m<7){
            pattern+="*"
        }else if(i==1 && m<7){
            pattern+=""
        }
        else if(i==1 && m<8){
            pattern+="       *"
        }
        else if(i==2 && m<7){
            pattern+=""
        }else if(i==2 && m<8){
            pattern+="       *"
        }
        else if(i==3 && m<7){
            pattern+=""
        }else if(i==3 && m<8){
            pattern+="       *"
        }
        
    }
    pattern+="\n"
}
console.log(pattern)
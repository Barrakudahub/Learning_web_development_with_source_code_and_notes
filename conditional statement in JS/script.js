console.log("Today we are going to learn conditional statements in js")

let age = 10;
let grace = 8;

// learning about Arithmetic operators
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
// here ** is an expontional operator
console.log(age ** grace)
console.log(age % grace)

if((age+grace)>=18){
    console.log("Hurry!!, You can drive");
}

else{
    console.log("You cannot drive");
}


// If else-if  ladder statement
if(age!=18){
    console.log("Sorry!!, You can not drive");
}

else if(age == 0){
    console.log("Are you kidding?");
}

else{
    console.log("Hurry!!, You can drive");
}


// ternary operator it translate the multi line conditional statement to a single line
a = 5;
b = 8;
let c = a > b ? (a - b):(b - a)

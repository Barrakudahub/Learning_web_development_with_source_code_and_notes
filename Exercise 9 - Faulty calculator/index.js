console.log("Welcome to my web development learnings")
console.log("Today we will be creating a faulty calulator")

let random = Math.random()
let a = prompt("Enter your first Number:")
let b = prompt("Enter the operation you want to perform")
let c = prompt("Enter your second Number:")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}

if (random > 0.1){
    console.log(`The result is ${a} ${b} ${c}`)
}
else {
    b = obj[b]
    console.log(`The result is ${a} ${b} ${c}`)
}
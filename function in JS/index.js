console.log("Today we will Learn about js functions")
console.log("Hello reders this is Hitoshi Barrakuda")
console.log("This is the part of my sigma web development course")
console.log("In which I would share my learning experience")
console.log("Hope, you like it!")

// by using this we can reuse the function
function  user(name) {  
    console.log("Hope, " + name + " you like it!")
    console.log("Hope, " + name + " you will give us your valuable feedback!")
    console.log("Hope, " + name + " you will recomonded it to others")
    console.log("" + name + " thanks for your valuable time")
}

user("Rohit")
user("Ram")


function sum(a, b) {
    console.log(a + b)
}

sum(3, 6)

function sum(a, b) {
    console.log(a + b)
    return a + b
}

result1 = sum(4, 6)
// by using sum function we can increase the reusability
result2 = sum(5, 11)
result3 = sum(12, 21)

console.log("The sum of this numbers is: ", result1)
console.log("The sum of this numbers is: ", result2)
console.log("The sum of this numbers is: ", result3)


function sum(a, b, c = 5) {
    // console.log(a + b)
    console.log(a, b, c)
    return a + b + c
}

r1 = sum(2, 6)
// by using sum function we can increase the reusability
r2 = sum(3, 11)
r3 = sum(12, 21)

console.log("The sum of this numbers is: ", r1)
console.log("The sum of this numbers is: ", r2)
console.log("The sum of this numbers is: ", r3)

// arrow functon is used to cast the function into a variable 
const func1 = (h)=>{
    console.log("I am an arrow function", h)
}

func1(12);
func1(21);
func1(69);

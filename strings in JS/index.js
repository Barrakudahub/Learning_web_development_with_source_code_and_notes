console.log("Welcome to my string in js")
// Strings are immutable, we cannot change a string once we have created it, But we can update it with different variable

let a = "Hitoshi"
// to print the variable
console.log(a)
// to print the character of variable we can use indexing which starts form 0 onwards.
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])

// to know the length of the string we use
console.log(a.length)

let name = "Hitoshi"
let pet_name = "Barrakuda"
console.log("His name is " + name + " but he is also know as " + pet_name)
// This can also be written as below with the self of backtick called as templet literals
console.log(`His name is ${name} but also called as ${pet_name}`)

let b = "Chittabodhi"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
// slice give the output by using the indexing range NOTE : Here, only the first range is included ie 1, not the last ie 5 is not included in the output.
console.log(b.slice(1,5))
console.log(b.slice(1))
// we can also replace character using relplace property
console.log(b.replace("hi","21"))
console.log(b.concat(a,"Nitin","Sangita"))


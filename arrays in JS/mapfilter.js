// console.log("Learning about map reduce method")

// // generalised format
let arr = [9, 13, 4, 7, 15];

// let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}


// // using map reduce function short hand 
let newArr = arr.map((e)=>{
    return e**2
})
console.log(newArr)

const greaterThanNine = (e)=> {
    if(e>9){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanNine))


// to give the array of any value
Array.from("Barrakuda")

let arr2 = [5, 4, 3, 2, 1]

const reduce = (a, b)=>{
    return a*b
}
console.log(arr2.reduce(reduce))
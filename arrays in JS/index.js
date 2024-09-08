console.log("Learning about js Arrays")

let arr = [5,4,3,2,1]
//  index  0,1,2,3,4
 arr[0] = 0
 console.log(arr)
 console.log(arr.length)

 console.log(arr[0])
 console.log(arr[2])
 console.log(arr[4])
// METHODS IN ARRAY
//  to convert the array into the string
console.log(arr.toString)
//  to join something word conjunction we can use
console.log(arr.join(" and "))
// if you want to pop out and element FROM THE END OF an array we use pop method
console.log(arr.pop)
// if you want to pop out and element FROM THE START OF an array we use shift method
console.log(arr.shift)
// if you want to push an element into the array we can use push method
console.log(arr.push("Hito"))
console.log(arr)

let a3 = [9,8,7]
let a2 = [6,5,4]
let a1 = [3,2,1]

a3.concat(a2, a1)

console.log("Hey welcome to my web development tutorials today we are going to begin with js") 

// we must avoid to use var in mordern js
// var is globally scoped while let is block scoped
// var a = 12;
// var b = 21;
// var h = "Hitoshi";
// not allowerd as per the standared Nomenclature.
// var 35a = "ram";

let a = 12;
let b = 21;
let _c = 22;
let $d = 24;
let h = "Hitoshi";


console.log(a + b)
console.log(typeof a,typeof b,typeof h)

// you can not change vale of const
const a1 = 5;
// we are not allowed to change the vale of a1 becaus a1 is constant
// a1 = a1 + 1;

// learning more about datatypes
// 1st primitive datatype
let x = "Hitoshi Manvatkar";
let y = 22;
let z = 3.14;
const p = true;
let q = undefined;
// most IMP typeof null is object
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// 2nd Object datatype
// object is the key value pair
let obj = {
        "name": "Hitoshi",
        "student id": 1221,
        "is present": "true"
}

console.log(obj);
obj.attendace = "25days";
console.log(obj);
obj.attendace = "75days"
console.log(obj);

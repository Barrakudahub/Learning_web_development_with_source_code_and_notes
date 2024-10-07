console.log("In this exercise we are going to make a Business Name Generator")

// prompt("Press any key to start")
let rand = Math.random()
let first, second, third;


// for first word generation
if (rand < 0.33) {
    first = "Crazy";
}
else if (rand >= 0.33 && rand < 0.66) {
    first = "Amazing";
}
else {
    first = "Fire";
}

// for second word generation
rand = Math.random()
if (rand < 0.33) {
    second = "Engine";
}
else if (rand >= 0.33 && rand < 0.66) {
    second = "Foods";
}
else {
    second = "Garments";
}


// for third word generation
rand = Math.random()
if (rand < 0.33) {
    third = "Bros";
}
else if (rand >= 0.33 && rand < 0.66) {
    third = "Limited";
}
else {
    third = "Hub";
}

console.log(`${first} ${second} ${third}`)




//Another type
// let obj1 = {
//     1: "Crazy",
//     2: "Amazing",
//     3: "Fire",
// }


// let obj2 = {
//     1: "Engine",
//     2: "Foods",
//     3: "Garments"
// }


// let obj3 = {
//     1: "Bros"
//     2: "Limited",
//     3: "Hub"
// }

// let ran1 = Math.floor(Math.random() * 3) + 1;
// let ran2 = Math.floor(Math.random() * 3) + 1;
// let ran3 = Math.floor(Math.random() * 3) + 1;

// console.log(obj1[ran1] + "" + obj2[ran2] + "" + obj3[ran3]);





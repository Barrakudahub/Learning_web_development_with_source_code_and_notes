console.log("Intorduction to loops in js")


// 1. For loop
let a = 1;

for ( let i = 0; i<100; i++){
    console.log(a + i);
}

let obj = {
    name:"Hitoshi",
    job:"trainee",
    company:"HDR Guidance"
}

for (const key in obj) {
    // const element = obj[key];
    console.log(key)
}

for (const c of "Hitoshi"){
    console.log(c)
}


// 2. While loop
let i = 1;
while (i<8) {
    console.log(i)
    i++;
}

// 3. Do while
let a = 0;
do {
    console.log(a)
    a++;
} while (a<5);

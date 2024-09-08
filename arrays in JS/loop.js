let a = [74, 98, 75, 66, 50]

// 1.Classical for loop
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(a[index])
}

// 2. ForEach loop
a.forEach((value, index, arr)=>{
    console.log(value, index, arr)
})

//  3. Forif loop
let obj = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

// 4. For of loop
for (const element of a) {
    console.log(element)
}

for (const iterator of a ){
    console.log(iterator)
}
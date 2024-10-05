console.log("This is Promis")

// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No radom number found")
//     }
//     else {

//         setTimeout(() => {
//             console.log("Yes I am done!")
//             resolve("Harry")
//         }, 3000);
//     }
// })


// prom1.then((a) => {
//     console.log(a)
// }).catch((err) => {
//     console.log(err)
// })


let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No radom number found")
    }
    else {

        setTimeout(() => {
            console.log("Yes I am done!")
            resolve("Hurry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No radom number found")
    }
    else {

        setTimeout(() => {
            console.log("Yes I am done!, 2")
            resolve("Hurry")
        }, 2000);
    }
})


let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No radom number found")
    }
    else {

        setTimeout(() => {
            console.log("Yes I am done!, 3")
            resolve("Hurry")
        }, 5000);
    }
})


let p3 = Promise.all([prom1, prom2, prom3])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})


let p3 = Promise.allSettled([prom1, prom2, prom3])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})

let p3 = Promise.allSettled([prom1, prom2, prom3])
p3.then((a) => {
    console.log(a)
}).catch(err => {
    console.log(err)
})



// PROMISE RESOLVE MEANS IT SHOULD BE RUN WITHOUT AN ERROR AN RETURN A VALUE

// PROMISE SETTEL MEANS IT SHOULD BE EITHER RESOLVE OR RETURN 

//  IN PROMISE.ALL SETTEL EITHER IT WILL REJECT OR RESOLVE NO MATTER WHAT IT SHOULD RETURN THE VALUE AND STATUS OF IT ITS RESOLVE OR YOU WILL GET THE REASON WHY IT IS NOT RESOLVE.

//  IN PROMISE.RACE WE WILL GET THE OUTPUT WHICH SETTEL FIRST , AND DONT CARE ABOUT THE EVENTUAL STATE

//  IN PROMISE.ANY METHOD IT RETURN A SINGLE PROMISE FORM A LIST OF PROMISES, WHEN ANY PROMISE FULFILL.
// function getData(){
//     // Simulate getting data from a server.
//     return  new Promise((resolve, reject)=> {
//         setTimeout(()=> {
//             resolve(455)
//         },3500);
//     })
// }



// SETTEL MEANS RESOLVE OR REJECT.

// RESOLVE MEANS PROMISE HAS SETTLED SUCCESFULLY.

// REJECT MEANS PROMISE HAS NOT SETTLED SUCCESFULLY.
async function getData() {
    // Simulate getting data from a server.
    let x = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // here the x.json gives us data as a javascript object.
    // we can also used x.text() to get the data as text
    let data = await x.json()
    console.log(data)
    //   return 455
    //   .then(response => response.json())
    //   .then(json => console.log(json))




    //  Let x = await fetch('https://Jsonplaceholder.typicode.com/posts', {
    //     method: 'Post'
    //     body: JSON.stringify({
    //         title: "foo',
    //         body: "bar"
    //         userid: 1,
    //     )}
    //     headers: {
    //         "content-type": "application / son; charset - UTF - 8",
    //     },
    // })
}

// Doing the same with async function 
// Await is only used under Async function
async function main() {

    console.log("Loading site")

    console.log("Wait for some time")

    console.log("Or do something else")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Processing Data")

    console.log("Task 2")

}

main()

// waiting until the data is not loaded
// data.then((v) => {
//     console.log(data)

//     console.log("Processing Data")

//     console.log("Task 2")
// })


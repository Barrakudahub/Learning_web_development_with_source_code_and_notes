console.log("Hitoshi is a web developer")
console.log("Ram is a DevOPs Engineer")

// As javascript has asynchronised nature All the script will be executed at first, then the that timeout function will be executed, even if it is at 0 second interval.
setTimeout(() => {
    console.log("I am inside settimeout")
}, 0)

console.log("End")


const fn = () => {
    console.log("Something")
}

const callback = (arg, fn)=>{
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}

loadScript ("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
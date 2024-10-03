let button = document.getElementById("btn")

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "How you doing!!"
})

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>How you doing!!</b>"
})

button.addEventListener("contextmenu", ()=>{
    alert("Don't Right click")
})

document.addEventListener("keydown", (e)=>{
    console.log(e.key)
})
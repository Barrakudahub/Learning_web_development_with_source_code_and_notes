console.log("Learning Classes and Ids in JavaScript")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "blue"

// NOTE If we want to select an element by ID then we have to write .elementbyID(singular).
document.getElementById("teal").style.backgroundColor = "teal"

// NOTE and for class we can write .getElementsbyClass(Pural).
document.getElementsByClassName("box") 

// document.querySelector(".box").style.backgroundColor = "green"

// console.log(document.querySelectorAll(".box"))


// Here the query selector return the node list
document.querySelectorAll(".box").forEach (e =>{
    console.log(e)
    e.style.backgroundColor = "red"
})

// Here the tagname return the collection of all element(insluding parents, children and sibling)
document.getElementsByTagName("div")


// matchs() closed() and contains() methods 
// To chech if element match the given CSS Selector or not
element.matches(CSS) 

// To look for the nearest element that matches the CSS Selector. The close itself is also checked.
element.closest(CSS) 

// 
element.container(CSS) 




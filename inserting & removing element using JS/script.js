// Gives the inner HTML excludind (NOT INCLUDED) itself
document.querySelector(".container").innerHTML
'\n        <div class="box">HEY THEIR THIS IS HITOSHI BARRAKUDA</div>\n        <div class="box">WELCOME TO MY WEB DEVELOPMENT COURSE</div>\n        <div class="box"></div>\n    '
document.querySelector(".box").innerHTML
'HEY THEIR THIS IS HITOSHI BARRAKUDA'


// Give the inner text inside the query selector.
document.querySelector(".container").innerText
'HEY THEIR THIS IS HITOSHI BARRAKUDA\nWELCOME TO MY WEB DEVELOPMENT COURSE'

// Gives the outer HTML including (INCLUDED) itself.
document.querySelector(".container").outerHTML
'<div class="container">\n        <div class="box">HEY THEIR THIS IS HITOSHI BARRAKUDA</div>\n        <div class="box">WELCOME TO MY WEB DEVELOPMENT COURSE</div>\n        <div class="box"></div>\n    </div>'

// Tag name is applicable for element.
document.querySelector(".container").tagName
'DIV'

// While node name is applicable for any type of node, Whether it is Text node, comment Node. 
document.querySelector(".container").nodeName
'DIV'

// to hide that element we can use .hidden
document.querySelector(".container").hidden = true

//The Has attribute used to map or verify that, if the following selector has the attribute or not?
document.querySelector(".box").hasAttribute("style")
'true'

// The get attribute gets the value of the selected query
document.querySelector(".box").getAttribute("style")
'color = red'

// Give the attribute of the given selector.
document.querySelector(".box").attributes
NamedNodeMap {0: class, class: class, length: 1}

// To remove an attribute.
document.querySelector(".box").removeAttribute("style")
undefined

// By using this, we can edit or customise any website om the go 
document.designMode = "on"
'on'

// To know the calss list of the selected class
document.querySelector(".container").classList
DOMTokenList ['container', value: 'container']
0
: 
"container"
length
: 
1
value
: 
"container"

// Used to know he class name
document.querySelector(".container").className
'container'
// Used to add one or more class in the selected class
document.querySelector(".container").classList.add("Hito")
undefined
// New class Hito successfully added.
// NOTE : We cannot add the same class multiple times as it exists primarily.
document.querySelector(".container").classList
DOMTokenList(2) ['container', 'Hito', value: 'container Hito']
// Used to remove the existing or new added class.
document.querySelector(".container").classList.remove("Hito")
undefined
// New class Hito removed successfully.
document.querySelector(".container").classList
DOMTokenList ['container', value: 'container']





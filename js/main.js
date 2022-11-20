function create(tag, parent, text=null, classs=null, id=null) {
	let element = document.createElement(tag)
	if (text)
		element.appendChild(document.createTextNode(text))
	parent.appendChild(element)
	if (classs)
		element.classList.add(classs)
	if (id)
		element.id = id
	return element
}

let body = document.querySelector("body")

window.onscroll = function() {fixedHeader()};

var header = document.getElementById("header");


var sticky = header.offsetTop;

function fixedHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
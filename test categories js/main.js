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

let array = ["Design", "Development", "Marketing", "Sales", "All"];

let contentDesign = ["Web Design", "Graphic Design", "UI/UX Design", "Motion Graphics", "3D Design", "Photography", "Illustration", "Logo Design", "Product Design", "Fashion Design", "Architecture", "Interior Design", "Landscape Design", "Industrial Design", "Other Design"];
let contentDevelopment = ["Web Development", "Mobile Development", "Game Development", "Desktop Development", "Software Development", "Database Development", "Other Development"];
let contentMarketing = ["Digital Marketing", "Social Media Marketing", "Content Marketing", "Email Marketing", "Search Engine Optimization", "Search Engine Marketing", "Pay Per Click", "Affiliate Marketing", "Marketing Strategy", "Marketing Analytics", "Marketing Automation", "Other Marketing"];
let contentSales = ["Sales Management", "Sales Strategy", "Sales Training", "Sales Analytics", "Sales Automation", "Other Sales"];
let contentAll = contentDesign.concat(contentDevelopment, contentMarketing, contentSales);
/*
array.forEach(function(item, index) {
    let div = create("div", document.body, item);
    div.classList.add("div");
    div.addEventListener("click", function() {
        let souscate = document.querySelectorAll('.element')
        souscate.forEach(function(item, index) {
            item.remove();
        });
        let namearray = "content" + item;
        let contentarray = eval(namearray);
        contentarray.forEach(function(item, index) {
            let div = create("div", document.body, item, "element");
        });
    });
});*/

let p = document.querySelectorAll('.test');
p.forEach(function(item, index) {
    item.addEventListener("mouseover", function() {
        item.children[1].children[0].classList.remove("pouf");
    });
});
p.forEach(function(item, index) {
    item.addEventListener("mouseleave", function() {
        item.children[1].children[0].classList.add("pouf");
    });
});

function copyID(id) {
    navigator.clipboard.writeText(id.innerHTML);
}

const toastTrigger = document.querySelectorAll('.liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

toastTrigger.forEach(element => {
    element.addEventListener('click', () => {
        console.log('quaso')
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    })
})
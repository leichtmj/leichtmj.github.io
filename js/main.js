window.onload = function() {
	//document.location.hash = "myTopnav";
}

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

var header = document.getElementsByClassName("header");


var sticky = header.offsetTop;

// function fixedHeader() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }

//PARTICULES
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth-50;
canvas.height = window.innerHeight-50;

let particleArray = [];

// get mouse position
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/150) * (canvas.width/150) //rayon autour de la souris où les particules vont être affectées
}

window.addEventListener('mousemove', //quand la souris bouge on met à jour la position
    function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    }
);

class Particle {
    
    constructor(x, y, directionX, directionY, size, color){
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    //fonction pour dessiner les particules
    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        //ctx.arc(x,y,r,startAngle,endAngle,counterclockwise); ^-> sens horaire
        ctx.fillStyle = '#e6d2b7';
        ctx.fill();
    }

    //vérif position des particules, position de la souris, mouvement de la particule, dessin de la particule
    //> exécutée pour chaque particule
    update(){
        //vérif si la particule est sortie du canvas, auquel cas on inverse sa position
        if(this.x > canvas.width || this.x < 0){
            this.directionX = -this.directionX;
        }
        if(this.y > canvas.height || this.y < 0){
            this.directionY = -this.directionY;
        }

        //détection collision particule/souris
        //On prend le point central de la particule et de la souris (x) puis 
        //on vérifie que la distance entre ces deux points est inférieure 
        //à la somme des rayons de ces deux cercles.

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        if(distance <mouse.radius + this.size) { //alors collision détectée
            if(mouse.x < this.x && this.x < canvas.width - this.size * 10){ //souris à gauche de la particule
                this.x += 10;
            }
            if(mouse.x > this.x && this.x > this.size * 10){ //souris à droite de la particule
                this.x -= 10;
            }
            if(mouse.y < this.y && this.y < canvas.height - this.size * 10){ //souris au dessus de la particule
                this.y += 10;
            }
            if(mouse.y > this.y && this.y > this.size * 10){ //souris en dessous de la particule
                this.y -= 10;
            }
        }

        //si pas de collision détectée, alors elles font leur vie
        this.x += this.directionX;
        this.y += this.directionY;

        //dessin de la particule
        this.draw();
    }

}

function hasshin(){
    particleArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 12000;
    for(let i = 0; i < numberOfParticles; i++){
        let size = Math.random() * 5 + 1; //taille random entre 1 et 5
        let x = (Math.random() * ((window.innerWidth - size * 2) - (size * 2)) + size * 2); //position x random entre 0 et la largeur du canvas
        let y = (Math.random() * ((window.innerHeight - size * 2) - (size * 2)) + size * 2); //position y random entre 0 et la largeur du canvas
        let directionX = (Math.random() * 1.5) - 1.5; //direction x random entre -2.5 et 2.5
        let directionY = (Math.random() * 1.5) - 1.5; //direction y random entre -2.5 et 2.5
        let color = '#e6d2b7';

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));

    }
}


function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for(let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
    }
    lien();
}


//check si deux particules sont assez proches pour former un lien entre elles
function lien(){
    let opacityValue = 1;
    for(let a=0; a<particleArray.length; a++){ //pour chaque particule
        for(let b = a; b < particleArray.length; b++){ //on vérifie si elle est assez proche d'une autre particule
            let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x))
            + ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));

            if(distance < (canvas.width/7) * (canvas.height/7)){//si assez proche
                opacityValue = 1 - (distance/20000);
                ctx.strokeStyle = 'rgba(230,210,183,'+opacityValue+')';
                ctx.beginPath();
                ctx.moveTo(particleArray[a].x, particleArray[a].y);
                ctx.lineTo(particleArray[b].x, particleArray[b].y);
                ctx.stroke();
            }
        }
    }

}

//resize le canvas quand on resize la fenêtre
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth; //on met à jour la taille du canvas avec les nouvelles dimensions de la fenêtre
    canvas.height = window.innerHeight;

    mouse.radius = ((canvas.height/80) * (canvas.width/80)); //+ le rayon d'action de la souris

    hasshin();
})

//si la souris sort de l'écran, on arrête la détection avec les particules en mettant tout à null
window.addEventListener('mouseout', function(){
    mouse.x = undefined;
    mouse.y = undefined;
})

hasshin();
animate();

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function displayNavBar() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
}


//Animation scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('first');
        }
    })
})

let all = document.querySelectorAll('.container')
all.forEach(element => {
    observer.observe(element)
})



let allImagesToLightbox = document.querySelectorAll(".lightbox")
for(let image of allImagesToLightbox) {
	image.addEventListener("click", function() {
		let bg = create("div", body, null, null, "bg")
		let box = create("div", bg, null, null, "box")

		let imageInBox = create("img", box)
		imageInBox.src = "./img/troncorama.png"

		let button = create("p", box, "X", null, "closeButton")
		button.addEventListener("click", function() {
			// oust = animation de 1s 
			box.classList.add("atable")
			// attente 1s pour faire tout disparaître
			setTimeout(function() {
				bg.remove();
			}, 1000)
		})
		body.addEventListener("keyup", function(event) {
			if (event.key == "Escape") {
				// oust = animation de 1s 
				box.classList.add("atable")
				// attente 1s pour faire tout disparaître
				setTimeout(function() {
					bg.remove();
				}, 1000)
			}
		})
        bg.addEventListener("click", function() {
			// oust = animation de 1s 
			box.classList.add("atable")
			// attente 1s pour faire tout disparaître
			setTimeout(function() {
				bg.remove();
			}, 1000)
		})

	})
}

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

let abilities = document.querySelector(".tri-sec")

let array = ["Design", "Web", "Développement d'applications", "Logiciels"];

let contentDes = ["Figma", "Photoshop", "Premiere Pro", "Aseprite"];
let contentWeb = ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "Laravel", "PostgreSQL"];
let contentDév = ["C#", "Python", "Git", "WPF", "WinUI", "Azure"];
let contentLog = ["VirtualBox", "Visual Studio Code", "Visual Studio 2022", "PowerAMC", "Postman", "Github Desktop"];

let urlDes =["./img/logos/figma.png", "./img/logos/photoshop.png", "./img/logos/premierepro.png", "./img/logos/aseprite.png"];
let urlWeb = ["./img/logos/html.png", "./img/logos/css.png", "./img/logos/js.png", "./img/logos/php.png", "./img/logos/bootstrap.png", "./img/logos/laravel.png", "./img/logos/postgresql.png"];
let urlDév = ["./img/logos/csharp.png", "./img/logos/python.png", "./img/logos/git.png", "./img/logos/wpf.png", "./img/logos/winui.png", "./img/logos/azure.png"];
let urlLog = ["./img/logos/virtualbox.png", "./img/logos/vscode.png", "./img/logos/visualstudio.png", "./img/logos/poweramc.png", "./img/logos/postman.png", "./img/logos/githubdesktop.png"];


let objDes = {
    "Des": "Des",
    "url": urlDes
}

let objWeb = {
    "Web": "Web",
    "url": urlWeb
}

let objDév = {
    "Dév": "Dév",
    "url": urlDév
}

let objLog = {
    "Log": "Log",
    "url": urlLog
}

array.forEach(function(itemC, index) {
    let div = create("div", abilities, itemC,"tri");
    div.classList.add("div");
    div.addEventListener("click", function() {
        let souscate = document.querySelectorAll('.element')
        let tri = document.querySelectorAll('.tri')
        tri.forEach(function(item, index) {
            item.classList.remove("tri-selected");
        });
        souscate.forEach(function(item, index) {
            item.remove();
        });
        div.classList.add("tri-selected");
        let namearray = "content" + itemC.substring(0, 3);
        let contentarray = eval(namearray);
        contentarray.forEach(function(item, index) {
            let div = create("div", details, item, "element");
            let arrayAsso = eval("obj" + itemC.substring(0, 3));
            create("img", div, null, "icon", null).src = arrayAsso.url[index];
        });
    });
});

var details = create("div", abilities, null, "element-parent");


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
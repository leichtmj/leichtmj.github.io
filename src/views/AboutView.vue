<script setup>
import anime from 'animejs/lib/anime.es.js';
import {ref, onMounted} from 'vue';
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
import '../assets/imgslider.css'


const isChecked = ref(false)

onMounted(()=> {
  mountain()
  cercleTop()
  cercleBottomRight()
  cercleBottomLeft()
  loadParticles()
})

function loadParticles() {
    tsParticles.load({
        id: "tsparticles",
        options: {
            preset: "snow",
            fullScreen: {
                enable: true, // enabling this will make the canvas fill the entire screen, it's enabled by default
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            interactivity: {
                detectsOn: "window"
            }
        },
    });
}


const handleCheckboxChange = () => {
  if (isChecked.value) {
    console.log("La checkbox est cochée!");
    document.querySelector('.mountain').style.display = 'none'
    document.querySelector('#welcome').style.display = 'none'
    document.querySelector('.slidiv').style.display = 'none'

    // Appeler votre fonction ici
  } else {
    console.log("La checkbox est décochée!");
    // Appeler une autre fonction si nécessaire
    document.querySelector('.mountain').style.display = ''
    document.querySelector('#welcome').style.display = ''
    document.querySelector('.slidiv').style.display = ''
  }
};

// function snowflakes() {

//     var maDate = new Date();  
//     var mois = maDate.getMonth();

//     // if (mois >= 11 || (mois >= 0 && mois <= 2)) {
//       /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
//         particlesJS.load('particles-js', 'assets/particles.json', function() {
//             console.log('callback - particles.js config loaded');
//         });
//     // }

// }

function mountain() {

    let timeline = anime.timeline()

    timeline.add({
            targets: '.mountain',
            opacity: 1, // Faire apparaître la div avec une opacité de 1
            duration: 500, // Durée de l'animation en millisecondes
            easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })
    .add({
            targets: '#welcome',
            opacity: 1, // Faire apparaître la div avec une opacité de 1
            duration: 300, // Durée de l'animation en millisecondes
            easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })
    .add({
            targets: '.mountain',
            translateX: '-50px', // Déplacer la div de 200 pixels vers la gauche
            duration: 800, // Durée de l'animation en millisecondes
            easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    });

    timeline.play()
}

function cercleTop() {

    let timeline = anime.timeline()

    anime({
      targets: '.cercle1',
      width: '4rem', // Taille finale en vw
      height: '4rem', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })
  
    anime({
        targets: '.cercle2',
        width: '4rem', // Taille finale en vw
        height: '4rem', // Taille finale en vw (pour maintenir la forme de cercle)
        duration: 1000, // Durée de l'animation en millisecondes
        easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })
    
    anime({
        targets: '.cercle3',
        width: '5rem', // Taille finale en vw
        height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
        duration: 1000, // Durée de l'animation en millisecondes
        easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    });

    timeline.play()
}


function cercleBottomRight() {

    anime({
      targets: '.cerclebottomright1',
      width: '5rem', // Taille finale en vw
      height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })

    anime({
      targets: '.cerclebottomright2',
      width: '5rem', // Taille finale en vw
      height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })

    anime({
      targets: '.cerclebottomright3',
      width: '5rem', // Taille finale en vw
      height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })

    anime({
      targets: '.cerclebottomright4',
      width: '4rem', // Taille finale en vw
      height: '4rem', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 1000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
    })
}


function cercleBottomLeft() {

anime({
  targets: '.cerclebottomleft1',
  width: '5rem', // Taille finale en vw
  height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
})

anime({
  targets: '.cerclebottomleft2',
  width: '5rem', // Taille finale en vw
  height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
})

anime({
  targets: '.cerclebottomleft3',
  width: '5rem', // Taille finale en vw
  height: '5rem', // Taille finale en vw (pour maintenir la forme de cercle)
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
})

anime({
  targets: '.cerclebottomleft4',
  width: '4rem', // Taille finale en vw
  height: '4rem', // Taille finale en vw (pour maintenir la forme de cercle)
  duration: 1000, // Durée de l'animation en millisecondes
  easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
})
}

function slide(){
    let slideValue = document.getElementById("slider").value;
    document.getElementById("my-img").style.clipPath = "polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)";
    // console.log("polygon(0 0," + slideValue + "% 0," + slideValue + "% 100%, 0 100%)");
}

</script>

<template>

<input type="checkbox" v-model="isChecked" @change="handleCheckboxChange" id="burger-toggle">
<label for="burger-toggle" class="burger-menu">
  <div class="line"></div>
  <div class="line"></div>
  <div class="line"></div>
</label>

<div class="menu">
  <div class="menu-inner">
    <ul class="menu-nav">
      <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span class="divitemenu">
            <div>{{$t("nav.home")}}</div>
          </span></a></li>
          <li class="menu-nav-item"><router-link class="menu-nav-link" to="/projects"><span  class="divitemenu">
            <div>{{$t("nav.projects")}}</div>
          </span></router-link></li>
      <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span  class="divitemenu">
            <div>{{$t("nav.skills")}}</div>
          </span></a></li>
    <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span class="divitemenu">
            <div>{{$t("nav.contact")}}</div>
          </span></a></li>
    </ul>
    <div class="gallery">
      <div class="title">
        <LanguageSwitcher></LanguageSwitcher>
      </div>
      <div class="images">
        <a class="image-link" href="#">
          <div class="image" data-label="Star"><img src="https://i.loli.net/2019/11/23/cnKl1Ykd5rZCVwm.jpg" alt=""></div>
        </a>
        <a class="image-link" href="#">
          <div class="image" data-label="Sun"><img src="https://i.loli.net/2019/11/16/FLnzi5Kq4tkRZSm.jpg" alt=""></div>
        </a>
        <a class="image-link" href="#">
          <div class="image" data-label="Tree"><img src="https://i.loli.net/2019/10/18/uXF1Kx7lzELB6wf.jpg" alt=""></div>
        </a>
        <a class="image-link" href="#">
          <div class="image" data-label="Sky"><img src="https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg" alt=""></div>
        </a>
      </div>
    </div>
  </div>
</div>


<div class="cercle2 w-8 h-8 bg-light-cloudColor rounded-full absolute -top-6 left-12"></div>
<div class="cercle3 w-10 h-10 bg-light-cloudColor rounded-full absolute -top-5 -left-5"></div>
<div class="cercle1 w-8 h-8 bg-light-cloudColor rounded-full absolute top-12 -left-8"></div>

<div class="cercle2 w-8 h-8 bg-light-cloudColor rounded-full absolute -top-6 right-12"></div>
<div class="cercle3 w-10 h-10 bg-light-cloudColor rounded-full absolute -top-5 -right-5"></div>
<div class="cercle1 w-8 h-8 bg-light-cloudColor rounded-full absolute top-12 -right-8"></div>

<div class="cerclebottomright1 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomright2 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomright3 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomright4 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>

<div class="cerclebottomleft1 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomleft2 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomleft3 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>
<div class="cerclebottomleft4 w-10 h-10 bg-light-cloudColor rounded-full absolute"></div>

<div class="h-screen">
    <div class="flex pres flex-row justify-center">
        <img class="mountain" src="../assets/mountain.svg" width="400" height="400" alt=""> 
    
        <section id="welcome">
                            <p id="hello" class="first">Bonjour, je m'appelle</p>
                            <p id="name"  class="second">Jimmy Leichtmann</p>
                            <p id="desc"  class="third">Je suis un étudiant de 20 ans en 2ème année de BUT Informatique.<br>Je recherche actuellement un stage de 8 à 12 semaines.</p>
                            <a href="#about" id="knowMore" class="fourth">En savoir plus ↓</a>
        </section>
    
    </div>

</div>
<!-- <div class="space"></div> -->

<section class="flex flex-row justify-center gap-10">

    <article class="basis-1/3 presentation col-md-6">
                    <h1 class="text-4xl first">Qui suis-je ?</h1>
                    <p class="second text-lg text-about">
                        Bonjour ! Je m'appelle Jimmy Leichtmann, j'ai 20 ans et j'aime développer dans mon temps libre.<br>
                        Lors de mes trois premiers semestre en BUT, j'ai découvert les environnements de programmation orientés objet
                        (C# .NET Core, PHP, Python) et web (HTML, CSS, JS) au sein de différents projets, reposant sur des diagrammes 
                        de conception UML.
                        <br>
                        De plus, la réforme du programme m'a permis de bénéficier d'une sensibilisation accrue au droit numérique et au RGPD.
                    </p>
                    <a href="#projects" id="knowMore" class="third">Découvrir les projets ↓</a>
                    <a :href="$t('about.cv_path')" target="_blank" id="dlCV" class="third">{{ $t('about.cv_title') }}<ion-icon name="download-outline"></ion-icon></a>
    
    </article>
    <div class="slidiv basis-1/6">
        <div class="container">
            <img class="imgslide" src="../assets/actual_jim.jpg">
            <img class="imgslide" id="my-img" src="../assets/choupi_jim.jpeg">
            <input type="range" min="0" max="100" value="50" id="slider" :oninput="slide">
        </div>
    </div>
</section>

<div class="space"></div>
<section class="flex justify-center">
    <div class="containeur">

    <div class="topic">Compétences</div>

    <div class="content">
        <input type="radio" name="slider" checked id="home">
        <input type="radio" name="slider" id="blog">
        <input type="radio" name="slider" id="help">
        <input type="radio" name="slider" id="code">
        <input type="radio" name="slider" id="about">

        <div class="list">
            <label for="home" class="home">
                <span class="catskills">Développement d'applications</span>
            </label>
            <label for="blog" class="blog">
                <span class="catskills">Back-end</span>
            </label>
            <label for="help" class="help">
                <span class="catskills">Front-end</span>
            </label>
            <label for="code" class="code">
                <span class="catskills">Design</span>
            </label>
            <label for="about" class="about">
                <span class="catskills">Divers</span>
            </label>
            <div class="slider"></div>
        </div>

        <div class="text-content">
            <div class="home text">
                    <div class="grid grid-cols-4 gap-10 place-content-center place-items-center content-center">
                        <div v-for="(e, index) in $tm('skills.softwares')" class="grid place-content-center place-items-center content-center">
                            <img :src="$rt(e.src)" width="100" height="100" alt="">
                            <span class="titleskills">{{ $rt(e.title) }}</span>
                        </div>
                    </div>
            </div>
            <div class="blog text">
                <div class="grid grid-cols-4 gap-10 place-content-center place-items-center content-center">
                        <div v-for="(e, index) in $tm('skills.back')" class="grid place-content-center place-items-center content-center">
                            <img :src="$rt(e.src)" width="100" height="100" alt="">
                            <span class="titleskills">{{ $rt(e.title) }}</span>
                        </div>
                </div>    
            </div>
            <div class="help text">
                <div class="grid grid-cols-4 gap-10 place-content-center place-items-center content-center">
                        <div v-for="(e, index) in $tm('skills.front')" class="grid place-content-center place-items-center content-center">
                            <img :src="$rt(e.src)" width="100" height="100" alt="">
                            <span class="titleskills">{{ $rt(e.title) }}</span>
                        </div>
                </div>     
            </div>
            <div class="code text">
                <div class="grid grid-cols-4 gap-10 place-content-center place-items-center content-center">
                        <div v-for="(e, index) in $tm('skills.design')" class="grid place-content-center place-items-center content-center">
                            <img :src="$rt(e.src)" width="100" height="100" alt="">
                            <span class="titleskills">{{ $rt(e.title) }}</span>
                        </div>
                </div>     
            </div>
            <div class="about text">
                <div class="title">About</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, quia repudiandae quisquam nam molestiae non. Itaque repudiandae quam, sed maxime voluptate quos ipsam optio odio ab molestiae facilis numquam repellendus, natus maiores vel soluta accusantium placeat nihil ad cupiditate consequuntur reprehenderit deserunt nam tempora. Voluptates non quia corporis temporibus tempora.</p>
            </div>
        </div>
    </div>
    </div>
</section>

<div class="space"></div>

<!-- <img src="../assets/mountain.svg" width="900" height="900" alt=""> -->
<!-- <section id="myTopnav" class="topnav">
    <a href="#myTopnav" id="homeH" class="active">Accueil</a>
    <a href="#about">À propos</a>
    <a href="#projects" >Projets</a>
    <a href="#abilities">Compétences</a>
    <a href="#contact" id="contactH">Contact</a>
    <a href="javascript:void(0);" class="icon" onclick="displayNavBar()"><i class="fa fa-bars"></i></a>
</section> -->
<!-- 
<section class="contenant">
    <div class="container-fluid">
        <div class="row">
            <article class="sm:col-span-1 md:col-span-6">
                <canvas id="canvas1" class="box"></canvas>
            
                <section id="welcome" class="box stack-top">
                    <p id="hello" class="first">Bonjour, je m'appelle</p>
                    <p id="name"  class="second">Jimmy Leichtmann</p>
                    <p id="desc"  class="third">Je suis un étudiant de 20 ans en 2ème année de BUT Informatique.<br>Je recherche actuellement un stage de 8 à 12 semaines.</p>
                    <a href="#about" id="knowMore" class="fourth">En savoir plus ↓</a>
                </section>
            </article>
        </div>
    </div>
</section>

<section id="about">
    <div class="container-fluid" style="margin-top: 100px;">
        <div class="container">
            <div class="row">
                <article class="col-md-6">
                    <h1 class="first">Qui suis-je ?</h1>
                    <p class="second text-about">
                        Bonjour ! Je m'appelle Jimmy Leichtmann, j'ai 20 ans et j'aime développer dans mon temps libre.<br>
                        Lors de mes trois premiers semestre en BUT, j'ai découvert les environnements de programmation orientés objet
                        (C# .NET Core, PHP, Python) et web (HTML, CSS, JS) au sein de différents projets, reposant sur des diagrammes 
                        de conception UML.
                        <br>
                        De plus, la réforme du programme m'a permis de bénéficier d'une sensibilisation accrue au droit numérique et au RGPD.
                    </p>
                    <a href="#projects" id="knowMore" class="third">Découvrir les projets ↓</a>
                    <a href="./img/CV_LEICHTMANN_JIMMY_FR.pdf" target="_blank" id="dlCV" class="third">Télécharger mon CV <ion-icon name="download-outline"></ion-icon></a>

                </article>
                
                <article class="col-md-1"></article>

                <article class="col-md-5">
                    <img src="./img/leboss.jpg" alt="Jimmy Leichtmann" title="prenez moi en stage sivouplé" class="img-fluid img">
                    <p class="center">(Note : Je ne suis pas décédé) (pas encore)</p>
                </article>  
            </div>
        </div>
    </div>
</section>


<div class="transition"></div>

<section id="projects" class="container-fluid">
    
    <div class="container">
        <div class="row">
            <article class="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
                <h1 class="cat_projects">Projet universitaire - 2021</h1>
                <h1 class="titleProject">Élaboration d'une maquette</h1>
                <p class="detailProject_list">Dans un contexte professionnel, un client (ici, la mairie d'Annecy) demande de formaliser ses attentes liées à la création d'une application mobile.
                    <br>
                    Ce projet m'a permis de me familiariser avec la conduite de projet à partir d'un besoin client.
                </p>
                <ul class="list">
                    <li class="decc">Communication avec le client</li>
                    <li class="decc">Questionnaire destiné aux futurs utilisateurs</li>
                    <li class="decc">Représentation des personas</li>
                    <li class="decc">Présentation d'une maquette de l'application</li>
                    <li class="decc">Soutenance orale avec questions du jury</li>
                </ul>
                <div class="proglanguages"><span class="keywords"> <a href="https://www.figma.com/fr/" target="_blank">Figma</a></span> - <span class="keywords"><a href="https://www.lesphinx-developpement.fr/logiciels/sondage-en-ligne-sphinx-declic/" target="_blank">Sphinx</a></span></div>
            </article>
            <article class="col-lg-6 col-xl-5 col-xxl-5">
                <a href="https://www.figma.com/proto/kOUzCVNeO9ChmzeQ5Pvi9T/Up'Annecy?node-id=47%3A56&starting-point-node-id=161%3A4" target="_blank">                
                    <img alt="coucou" src="./img/logos/maquette105.png" class="imgProject img-fluid sae105" title="Cliquez pour découvrir le projet">
                </a>
            </article>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <article class="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
                <h1 class="cat_projects">Projet universitaire - 2021</h1>
                <h1 class="titleProject">Développement d'un jeu en 2D</h1>
                <p class="detailProject">Pour mettre en application les notions apprises pendant le 1er semestre, nous avons dû, par groupe de 3,
                    développer un jeu en 2D en utilisant le langage C# ainsi que le framework Monogame.
                    <br><br>
                    Ce jeu contenait un système de combat dactylographique, où le joueur devait taper les lettres et mots affichés à l'écran,
                    et gagnait des points en fonction de la rapidité de ses frappes.
                </p>
                <div class="proglanguages"><span class="keywords"> <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank">C#</a></span> - <span class="keywords"><a href="https://github.com/" target="_blank">Github</a></span> - <span class="keywords"> <a href="https://www.monogame.net/" target="_blank">Monogame</a></span></div>
            </article>
            <article class="col-lg-6 col-xl-5 col-xxl-5">
                    <iframe src="https://www.youtube.com/embed/UNQxvMSKcTE?ab_channel=jim&autoplay=1&mute=1&loop=1&controls=0&playlist=UNQxvMSKcTE" class="vid" title="Cliquez pour découvrir le projet" frameborder="0"></iframe>
            </article>
        </div>
    </div>



    <div class="container">
        <div class="row">
            <article class="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
                <h1 class="cat_projects">Projet universitaire - 2022</h1>
                <h1 class="titleProject">Développement d'une application de gestion des commandes</h1>
                <p class="detailProject_list">En partant d'un besoin exprimé par un client, et nécessitant une interface graphique, l'objectif était 
                    de formaliser les besoins, proposer une conception, implémenter et tester son développement.
                    <br>
                </p>
                <ul class="list">
                    <li class="decc">Diagrammes d'analyse et de conception</li>
                    <li class="decc">Création d'un MCD selon les besoins</li>
                    <li class="decc">Développement en pattern MVC avec Data binding</li>
                    <li class="decc">Liaison à une base SQL Server</li>
                    <li class="decc">Tests unitaires</li>
                </ul>
                <div class="proglanguages"><span class="keywords"> <a href="https://www.uml.org/" target="_blank">UML</a></span> - <span class="keywords"><a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank">C#</a></span> - <span class="keywords"><a href="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/xaml/?view=netdesktop-6.0" target="_blank">WPF .NET</a></span> - <span class="keywords"><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></span></div>
            </article>
            <article class="col-lg-6 col-xl-5 col-xxl-5">
                    <img alt="coucou" src="./img/pochita.png" class="imgProject rescale lightbox img-fluid" title="Cliquez pour découvrir le projet">
            </article>
        </div>
    </div>


    <div class="container">
        <div class="row">
            <article class="col-sm-12 col-md-12 col-lg-6 col-xl-7 col-xxl-7">
                <h1 class="cat_projects">Projet universitaire - 2022/2023</h1>
                <h1 class="titleProject">Développement d'un site web Laravel</h1>
                <p class="detailProject_list">Sujet : Tesla souhaite une refonte complète de son système d’information avec un nouveau site Web pour la
                    présentation et la vente de ses produits.
                    <br>
                </p>
                <ul class="list">
                    <li class="decc">Diagrammes de conception UML</li>
                    <li class="decc">Création d'une base PostgreSQL</li>
                    <li class="decc">Développement avec le framework Laravel</li>
                    <li class="decc">Cryptage des mots de passe et respect du RGPD</li>
                </ul>
                <div class="proglanguages"><span class="keywords"> <a href="https://www.php.net/" target="_blank">PHP</a></span> - <span class="keywords"><a href="https://laravel.com/" target="_blank">Laravel</a></span> - <span class="keywords"><a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a></span></div>
            </article>
            <article class="col-lg-6 col-xl-5 col-xxl-5">
                <a href="http://51.83.36.122:8081" target="_blank">                
                    <img alt="coucou" src="./img/Tesla-logo.png" class="imgProject img-fluid tesla">
                </a>
            </article>
        </div>
    </div>

</section>


<section id="abilities" class="container-fluid">
    <div class="container">
        <div class="row">
            <article class="col-lg-12">
                <h1 class="titleSection">Compétences</h1>
            </article>
            <article class="tri-sec col-lg-12">

            </article>
        </div>
    </div>
</section>

<div class="transition2"></div>

<section id="contact" class="container-fluid">
    <div class="container">
        <div class="row">
            <article class="col-lg-12">
                <h1 style="text-align: center; margin-bottom: 25px;">Me contacter :</h1>
            </article>
        </div>
        <div class="row">
            <article class="col-lg-12">
                <ul id="contactList">
                     Mail, linkedin, github, discord
                    <li class="contactListElement" onclick="window.open('https://www.linkedin.com/in/jimmy-leichtmann/','_blank');">
                        <span class="icon"><ion-icon name="logo-linkedin"></ion-icon></span>
                        <span class="title">in/jimmy-leichtmann/</span>
                    </li>
                    <li class="contactListElement" onclick="window.open('https://github.com/leichtmj', '_blank')">
                        <span class="icon"><ion-icon name="logo-github"></ion-icon></span>
                        <span class="title">leichtmj</span>
                    </li>
                    <li class="contactListElement liveToastBtn" onclick="copyID(discord)">
                        <span class="icon"><ion-icon name="logo-discord"></ion-icon></span>
                        <span class="title" id="discord">jim#4760</span>
                    </li>
                    <li class="contactListElement liveToastBtn" onclick="copyID(mail)">
                        <span class="icon"><ion-icon name="mail-outline"></ion-icon></span>
                        <span class="title" id="mail">jimmy.leichtmann@etu.univ-smb.fr</span>
                    </li>
                </ul>
            </article>
        </div>
    </div>
</section>

<div class="transition"></div>

<section id="footer">
        <p id="credits">© 2023 Jimmy LEICHTMANN <span id="right"><a id="github" href="https://github.com/leichtmj/leichtmj.github.io" target="_blank">Découvrir le repository sur Github <ion-icon name="logo-github"></ion-icon></a></span></p>
        <p class="text-footer">Site réalisé en HTML, CSS Bootstrap et JavaScript.
            <br>
            Merci d'avoir lu jusqu'au bout :) !
        </p>
</section>

<a id="up" href="#welp">↑</a>

            
<div class="toast-container position-fixed bottom-0 end-0 p-3">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <strong class="me-auto">Copié dans le presse-papiers !</strong>
        </div>  
    </div>
</div> -->
</template>../assets/app.js
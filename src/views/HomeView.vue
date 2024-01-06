<template>
  <Navbar></Navbar>
  <!-- <div @click="parchemin" class="btnstart">Animation</div> -->
  <!-- <div class="part1upleft"></div> -->
  <!-- <div class="part2upleft"></div> -->

  <div ref="imgRef" class="image">
    <img class="imageParchemin" src="../assets/parchemin_notif.svg" alt="">
  </div>
  

  <div class="cercle1"></div>
  <div class="cercle2"></div>
  <div class="cercle3"></div>


  <div class="cerclebottomright1"></div>
  <div class="cerclebottomright2"></div>
  <div class="cerclebottomright3"></div>
  <!-- <div class="part2upright"></div> -->

<!--   
  <div class="part1downleft"></div>
  <div class="part2downleft"></div>

  
  <div class="part1downright"></div>
  <div class="part2downright"></div> -->
  <!-- <main>
    <h1>{{ $t("home.header") }}</h1>
    <p>{{ $t("home.created_by") }}</p>

    <label>
      <input type="checkbox">
      <span class="menu"> <span class="hamburger"></span> </span>
      <ul>
        <li> <a href="#">Home</a> </li>
        <li> <a href="#">About</a> </li>
        <li> <a href="#">Contact</a> </li>
      </ul>
      </label>
      <h1>Morphing Fullscreen Hamburger Menu Demo</h1>
  </main> -->
</template>

<script setup>

import Navbar from '@/components/Navbar.vue';
import anime from 'animejs/lib/anime.es.js';

var w = window.innerWidth
var h = window.innerHeight

function test() {

  let partup = document.querySelector('.partup')
  let partdown = document.querySelector('.partdown')
  
  // console.log(elements)
  // console.log('hey')
  var timeline = anime.timeline()
  
  timeline.add({
    targets: partup,
    translateX: w-0.24*w,
    borderBottomRightRadius:'0%',
    borderBottomLeftRadius: '30px',
    backgroundColor: '#008000',
    duration: 1000
  })
  .add({
    targets: partdown,
    translateX: w-0.12*w,
    backgroundColor: '#008000',
    duration: 1000
  },0)

  timeline.play()
}

import {ref, onMounted} from 'vue';

const imgRef = ref(null)
var imgElement;

onMounted(()=> {
  imgElement = imgRef.value
  parchemin()
  cercle3()
  cercle1()
  cercle2()
  console.log(imgElement)
})

function parchemin() {

  var testest = anime({
    targets: imgElement,
    translateY: [
        { value: 0, duration: 0 },
        { value: -10, duration: 700, easing: 'easeInOutQuad' }
    ],
    loop: true,
    direction: 'alternate', // Fait alterner l'animation dans les deux sens
  });
  
  testest.play
}

function cercle3() {
  anime({
      targets: '.cercle3',
      width: '12vw', // Taille finale en vw
      height: '12vw', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 2000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
  });
}


function cercle1() {
  anime({
      targets: '.cercle1',
      width: '10vw', // Taille finale en vw
      height: '10vw', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 2000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
  });
}

function cercle2() {
  anime({
      targets: '.cercle2',
      width: '10vw', // Taille finale en vw
      height: '10vw', // Taille finale en vw (pour maintenir la forme de cercle)
      duration: 2000, // Durée de l'animation en millisecondes
      easing: 'easeInOutQuad' // Type d'interpolation pour l'animation
  });
}


</script>
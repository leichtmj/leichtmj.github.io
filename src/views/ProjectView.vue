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
      <li class="menu-nav-item"><router-link class="menu-nav-link" to="/about"><span class="divitemenu">
            <div>{{$t("nav.home")}}</div>
          </span></router-link></li>
          <li class="menu-nav-item"><router-link class="menu-nav-link" to="/projects"><span class="divitemenu">
            <div>{{$t("nav.projects")}}</div>
          </span></router-link></li>
      <li class="menu-nav-item"><a class="menu-nav-link" href="#"><span class="divitemenu">
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

<h1 class="titleproject flex justify-center text-4xl">{{ $t('projects.title') }}</h1>


<div class="ag-timeline-block">
        <section class="ag-section">
          <div class="ag-format-container">
            <div ref="agTimeline" class="js-timeline ag-timeline">
              <div ref="agTimelineLine" class="js-timeline_line ag-timeline_line">
                <div ref="agTimelineLineProgress" class="js-timeline_line-progress ag-timeline_line-progress"></div>
              </div>
              <div class="ag-timeline_list">
                <div v-for="(p,index) in $tm('projects.data')" :key="p.id" :class="{ 'js-ag-active': p.isActive}" class="js-timeline_item ag-timeline_item">
                  <div class="ag-timeline-card_box">
                    <div v-show="index % 2 === 0">
                      <div ref="agTimelinePoint" class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">{{ $rt(p.year) }}</div>
                      </div>
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">{{ $rt(p.season) }}</div>
                      </div>
                    </div>
                    <div v-show="index % 2 != 0">
                      <div class="ag-timeline-card_meta-box">
                        <div class="ag-timeline-card_meta">{{ $rt(p.season) }}</div>
                      </div>
                      <div ref="agTimelinePoint" class="js-timeline-card_point-box ag-timeline-card_point-box">
                        <div class="ag-timeline-card_point">{{ $rt(p.year) }}</div>
                      </div>
                    </div>
                  </div>
                  <div class="ag-timeline-card_item">
                    <div class="ag-timeline-card_inner">
                      <div class="ag-timeline-card_img-box">      
                        <iframe v-if="index === 6" class="ag-timeline-card_img" frameborder="0" src="https://www.youtube.com/embed/UNQxvMSKcTE?ab_channel=jim&autoplay=1&mute=1&loop=1&controls=0&playlist=UNQxvMSKcTE" title="Cliquez pour découvrir le projet"></iframe>              
                        <img v-if="index != 6" :src="$rt(p.imageSrc)" class="ag-timeline-card_img" width="640" height="360" />
                      </div>
                      <div class="ag-timeline-card_info">
                        <div class="ag-timeline-card_title">Season 13</div>
                        <div class="ag-timeline-card_desc">
                          {{ $rt(p.description) }}
                        </div>
                        <div>
                          <span v-for="(t, index) in p.tags"><a :href="t.src">{{ t.title }}</a></span>
                        </div>
                      </div>
                    </div>
                    <div class="ag-timeline-card_arrow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
</template>

<script setup>

import '../assets/projectview.css'
import anime from 'animejs/lib/anime.es.js';
import {ref, onMounted} from 'vue';
import LanguageSwitcher from "@/components/LanguageSwitcher.vue"

const isChecked = ref(false)


const handleCheckboxChange = () => {
  if (isChecked.value) {
    console.log("La checkbox est cochée!");
    document.querySelector('.ag-timeline-block').style.display = 'none'

    // Appeler votre fonction ici
  } else {
    console.log("La checkbox est décochée!");
    // Appeler une autre fonction si nécessaire
    document.querySelector('.ag-timeline-block').style.display = ''
  }
};


onMounted(()=> {
  console.log('loaded')
  const divsHidden = document.querySelectorAll('div[style*="display: none"]');
  console.log(divsHidden)
  divsHidden.forEach(function(div) {
        div.remove();
  });
  cercleTop()
})



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


document.addEventListener('DOMContentLoaded', function() {
      // Code JavaScript pur à exécuter une fois que la page est chargée
      const divsHidden = document.querySelectorAll('div[style*="display: none"]');
      console.log(divsHidden)
      divsHidden.forEach(function(div) {
        div.remove();
      });
});

(function ($) {
    $(function () {
        
      let agPosY;
      let i;
      let a;
      let n;
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        // console.log($(window).scrollTop())
        agPosY = $(window).scrollTop();
        // console.log(agPosY)
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agTimelineItem.each(function () {
          var agTop = $(this).find(agTimelinePoint).offset().top;
  
          (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('js-ag-active') : $(this).removeClass('js-ag-active');
        })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);
  

</script>
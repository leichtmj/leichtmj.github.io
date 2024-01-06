<template>
  <div class="partup menu"></div>
  <div class="partdown menu">

    <nav>
      <ul>
        <li><a class="arrow"><i class="fas fa-arrow-alt-right"></i>{{ $t("nav.home") }}</a></li>
        <li><a class="arrow"><i class="fas fa-arrow-alt-right"></i>{{ $t("nav.about") }}</a></li>
        <li><a class="arrow"><i class="fas fa-arrow-alt-right"></i><LanguageSwitcher></LanguageSwitcher></a></li>
      </ul>
    </nav>

    <nav>
      <ul>
        <li>
          <RouterLink to="/" class="bg-black">{{ $t("nav.home") }}</RouterLink>
        </li>
        
        <li>
          <RouterLink to="/about">{{ $t("nav.about") }}</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  import LanguageSwitcher from "@/components/LanguageSwitcher.vue"
  
  export default {
    components: { LanguageSwitcher }
  }
  
</script>
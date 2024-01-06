<template>
    <select @change="switchLanguage">
      <option
        v-for="sLocale in supportedLocales"
        :key="`locale-${sLocale}`"
        :value="sLocale"
        :selected="locale === sLocale"
      >
        {{ t(`locale.${sLocale}`) }}
      </option>
    </select>
</template>

<style scoped>
  select {
    background-color:#E6D2B7;
    border: solid 1px black;
    border-radius: 10px;
    padding: 5px;
  }
</style>

<script>
  import { useI18n } from 'vue-i18n'
  import Tr from "@/lang/translation.js"
  
  export default {
    setup() {
      const { t, tm, rt, locale } = useI18n()
      const supportedLocales = Tr.supportedLocales
      const switchLanguage = async (event) => {
        const newLocale = event.target.value
        await Tr.switchLanguage(newLocale)
      }
      return { t, tm, rt, locale, supportedLocales, switchLanguage }
    }
  }
</script>
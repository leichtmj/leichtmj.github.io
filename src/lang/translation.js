import lang from "@/lang"

const Trans = {
    get supportedLocales() {
      return import.meta.env.VITE_SUPPORTED_LOCALES.split(",")
    },

    set currentLocale(newLocale) { // <--- 2
      lang.global.locale.value = newLocale
    },
    async switchLanguage(newLocale) { // <--- 3
      Trans.currentLocale = newLocale
      document.querySelector("html").setAttribute("lang", newLocale)
    },
  }

export default Trans
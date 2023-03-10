// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const myCustomDarkTheme = {
  dark: true,
  colors: {
    background: '#45484A',
    surface: '#808689',
    primary: '#07B35A',
    'primary-darken-1': '#068644',
    secondary: '#919263',
    'secondary-darken-1': '#797953',
    error: '#C5364E',
    info: '#5672B1',
    success: '#12DF0A',
    warning: '#EA7A0B',
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomDarkTheme',
      themes: {
        myCustomDarkTheme,
      }
    },
  })

  nuxtApp.vueApp.use(vuetify)
})

// main.js
import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import router from './routes'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";
import * as mdi from '@mdi/js'

createApp(App)
  .use(createPinia())
  .use(router)
  .use(
    createVuestic({
      config: {
        colors: {
          variables: {
            // Default colors
            primary: "#443627",
            secondary: "#AC1754",
            success: "#40e583",
            info: "#2c82e0",
            danger: "#cd5c5c",
            warning: "#ffc200",
            gray: "#babfc2",
            dark: "#34495e",

            // Custom colors
            yourCustomColor: "#d0f55d",
          },
        },
      },
    })
  )
  .mount("#app");
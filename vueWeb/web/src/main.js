import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { http } from 'axios'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import App from './App.vue'


const app = createApp(App)
app.use(http)
app.use(ElementPlus,{locale})
app.mount('#app')

// src/bootstrap.js
import { createApp } from 'vue'
import App from './App'

const mount = (el, props) => {
  const app = createApp(App, props)
  app.mount(el)
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#app')
  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }


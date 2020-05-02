import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles: any = require.context('./modules', true, /\.ts$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules: any = modulesFiles.keys().reduce((modules2: any, modulePath: any): any => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules2[moduleName] = value.default
  return modules2
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store

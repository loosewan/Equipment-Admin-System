import Vue       from 'vue'
import Vuex      from 'vuex'
import state    from './states.js'
import getters   from './getters.js'
import mutations from './mutations.js'
import actions   from './actions.js'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://115.159.147.103';
axios.defaults.withCredentials = true

// 拦截请求设置编码
axios.interceptors.request.use(function (config) {
  let query = ''
  for (let key in config.data) {
    query += encodeURIComponent(key) + '=' + encodeURIComponent(config.data[key]) + '&';
  }
  config.data = query
  return config;
});



const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 注册一个module来保存状态
store.registerModule('vux', { 
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import createPersistedState from "vuex-persistedstate"

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState()]
})

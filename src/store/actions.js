const actions = {
  login({commit}, res) {
    var code = res['code'];
    if (code === 0) {
      var token = res['data']['token'];
      localStorage.setItem("token", token);
      commit('setLoginState', true);
    }
  },
  logout({commit}){
    console.log("hello");
    commit('setLoginState', false);
    localStorage.removeItem("token");
  }
}
export default actions

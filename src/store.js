import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isShade: false,
    goodsList: [],
  },
  mutations: {
    changeIsshade(state) {
      state.isShade = !state.isShade;
    },
    addList(state, goodItem) {
      var isHas = false;
      state.goodsList.some(item => {
        if(item.name == goodItem.name) {
          item.num++;
          isHas = true;
          return true;
        }
      })
      if(!isHas) {
        state.goodsList.push(goodItem);
      }
      // console.log(state.goodsList);
      console.log(this.getters.nums);
    },
    reduceList(state, goodItem) {
      state.goodsList.forEach(item => {
        if(item.name == goodItem.name) {
          item.num--;
        }
      })
      // console.log(state.goodsList);
    }
  },
  actions: {
    
  },
  getters: {
    nums(state) {
      var length = 0;
      state.goodsList.forEach(item => {
        length += item.num;
      })
      return length;
    },
    tatolPrice(state) {
      var price = 0;
      state.goodsList.forEach(item => {
        price += item.price * item.num;
      })
      return price;
    }
  }
})
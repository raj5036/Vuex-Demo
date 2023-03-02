import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    count: 0,
    text: "random"
  },
  getters: {
    getSquaredValue (state) {
      return state.count * state.count;
    }
  },
  mutations: {
    // We can not trigger asynchronous code inside mutation, only synchronous code is supported 
    increaseCounter (state) {
      state.count++;
    },
    decreaseCounter (state) {
      state.count--;
    },
    setText (state, text) {
      state.text = text;
      console.log(state.text)
    },
  },
  actions: {
    // Here we can write asynchronous code! 
    increaseCounter () {
      console.log("Action dispatched!")
    },
    getToDos ({commit}) {
      axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/todos/1"
      })
        .then(res => {
          console.log(res);
          commit('setText', res.data.title);
        })
        .catch(err => {
          console.error(err)
        })
    }
  },
  modules: {
  }
})

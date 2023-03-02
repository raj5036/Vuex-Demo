<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <div class="counter">
    <div class="count">
      {{ $store.state.count }}
    </div>
    <div class="buttons">
      <!-- Mutation -->
      <p>Here we are committing a mutation</p>
      <button @click="$store.commit('increaseCounter')">
        +
      </button>
      <button @click="$store.commit('decreaseCounter')">
        -
      </button>

      <!-- Action dispatching -->
      <p>Here we are dispatching an action</p>
      <button @click="$store.dispatch('increaseCounter')">
        +
      </button>
      <button @click="$store.commit('decreaseCounter')">
        -
      </button>
    </div>
  </div>
  <!-- Asynchronous operation -->
  <div class="api">
    <button @click="$store.dispatch('getToDos')" class="api-button">
      Fetch from Api
    </button>
  </div>

  <!-- Using Vuex Getters -->
  <div class="display-square">
    <p>Here we are using getters</p>
    {{ $store.state.count }} <sup>2</sup> = {{ $store.getters.getSquaredValue }}
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  // data() {
  //   return {
  //     count: 0,
  //   }
  // },
  // methods: {
  //   increaseCounter () {
  //     this.count++;
  //   },
  //   decreaseCounter () {
  //     this.count--;
  //   }
  // }
}
</script>

<style scoped>
  .count {
    font-size: 100px;
  }
  button {
    cursor: pointer;
    font-size: 50px;
    width: 80px;
    margin: 0 10px;
  }
  .api-button {
    width: 365px;
    margin-top: 20px;
    background: #fafafa;
    border: 1px solid blue;
    border-radius: 20px;
  }
</style>

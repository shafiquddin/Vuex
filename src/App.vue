<template>
  <base-container title="Vuex">
  <base-counter></base-counter>
  <base-counter2></base-counter2>
  <base-button></base-button>
  <button @click="add">Add 2</button>
</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseButton from './components/BaseButton.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseCounter2 from './components/BaseCounter2.vue';

export default {
  components: {
    BaseContainer,
    BaseButton,
    BaseCounter,
    BaseCounter2
  },
  methods:{
    add(){
      this.$store.commit('increment'); 
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
<template>
  <base-container title="Vuex">
  <base-counter></base-counter>
  <base2-counter></base2-counter>
  <base-button></base-button>
  <button @click="Add">Add 2</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseButton from './components/BaseButton.vue';
import Base2Counter from './components/Base2Counter.vue';

export default {
  components: {
    BaseContainer,
    BaseCounter,
    BaseButton,
    Base2Counter
  },
  methods:{
    Add(){
    this.$store.dispatch('increment')
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
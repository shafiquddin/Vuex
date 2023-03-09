<template>
  <base-container title="Vuex">
   <base-counter></base-counter>
   <favrite-counter></favrite-counter>
   <base-button></base-button>
   <change-button></change-button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseButton from './components/BaseButton.vue';
import FavriteCounter from './components/FavriteCounter.vue';
import ChangeButton from './components/ChangeButton.vue';

export default {
  components: {
    BaseContainer,
    BaseCounter,
    FavriteCounter,
    BaseButton,
    ChangeButton
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
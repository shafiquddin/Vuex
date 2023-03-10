<template>
  <base-container title="Vuex" v-if="islogged">
   <base-counter></base-counter>
   <favrite-counter></favrite-counter>
   <base-button></base-button>
   <change-button></change-button>
  </base-container>
  <base-container title="Auth">
  <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import BaseCounter from './components/BaseCounter.vue';
import BaseButton from './components/BaseButton.vue';
import FavriteCounter from './components/FavriteCounter.vue';
import ChangeButton from './components/ChangeButton.vue';
import UserAuth from './components/UserAuth.vue'
export default {
  components: {
    BaseContainer,
    BaseCounter,
    FavriteCounter,
    BaseButton,
    ChangeButton,
    UserAuth
  },
  methods:{
    Add(){
        this.$store.dispatch('increment')
    }
  },
  computed:{
    islogged(){
        return this.$store.getters.userIsAuthenticated;
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
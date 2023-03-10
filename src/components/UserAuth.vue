<template>
    <button @click="login" v-if="!islogged">Login</button>
    <button @click="logout" v-else>Logout</button>
</template>
<script>
export default {
 methods:{
    login(){
        this.$store.dispatch('login')
    },
    logout(){
        this.$store.dispatch('logout')
    }
 },
 computed:{
    islogged(){
        return this.$store.getters.userIsAuthenticated;
    }
 }
}
</script>
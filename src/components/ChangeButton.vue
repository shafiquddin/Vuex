<template>
    <button @click="increase({value:10})">Add 10</button>
    <button @click="increase({value:12})">Add 12</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods:{
   ...mapActions({
    increase:'number/increase'
    })
    }
}
</script>
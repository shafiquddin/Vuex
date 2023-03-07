<template>
    <h1>{{ counter }}</h1>
    <p>we do more</p>
</template>
<script>
export default {
    computed:{
        counter(){
            return this.$store.getters.normalizeCounter;
        }
    }
}
</script>
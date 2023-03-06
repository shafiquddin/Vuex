<template>
    <div>
        <h1>{{ counter }}</h1>
        <p>We do more</p>
    </div>
</template>
<script>
export default {
    computed:{
        counter(){
            return this.$store.getters.normalizeCounter
        }
    }
}
</script>
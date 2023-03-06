<template>
    <div>
        <h1>{{ counter }}</h1>
    </div>
</template>
<script>
export default {
    computed:{
        counter(){
            return this.$store.getters.finalCounter;
        }
    }
}
</script>
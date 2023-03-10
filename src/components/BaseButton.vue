<template>
<button @click="Add">Add</button>  
</template>
<script>

export default {
    methods:{
        Add(){
            this.$store.dispatch('number/increment');
        }

    }
}
</script>
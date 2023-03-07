<template>
<button @click="Add">Add 10</button>
</template>
<script>
export default {
    methods:{
        Add(){
            this.$store.dispatch({
                type:'increase',
                value:10
            })
        }
    }
}
</script>
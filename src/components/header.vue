<template>
    <div id="header">
        <h3>{{headerText}}</h3>
    </div>
</template>
<script>
    export default {
        name:'app',
        props:['text'],
        data(){
            return {
                headerText:this.$props.text
            }
        }
    }
</script>
<style lang="less" scoped>
    #header{
        h3{color:green}
    }
</style>

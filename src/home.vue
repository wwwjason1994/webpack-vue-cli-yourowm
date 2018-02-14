<template>
    <div id="app">
        <my-header text="this is header"/>
        <span>{{msg}}</span>
        <p class="test">no less</p>
    </div>
</template>
<script>
import $ from 'jquery'
import myHeader from './components/header'
// const myHeader = () => import('./components/header.vue')
    export default {
        name:'app',
        data(){
            return {
                msg:"this is homepage!!",
                headText:"this is header"
            }
        },
        mounted:function(){
            $('.test').html('test text')
        },
        components:{
            myHeader
        }
    }
</script>
<style lang="less">
    #app{
        img{width:100px;}
        span{display: flex;}
    }
</style>
<style >
    .test{
        color:#555
    }
</style>
<template>
    <div id="app">
        <my-header text="this is header"/>
        <img src="./images/logo.png" alt="logo" />
        <span>{{msg}}</span>
        <p class="test">test text</p>
        <a href="/home.html">to home</a>
    </div>
</template>
<script>
import Vue from 'vue'
import myHeader from './components/header'
// const myHeader = () => import('./components/header.vue')
    export default {
        name:'app',
        data(){
            return {
                msg:"hello vue !!"
            }
        },
        components:{
            myHeader
        }
    }
</script>
<style >
    .test{
        color:#020202;
        display:flex
    }
</style>
<style lang="less">
    #app{
        img{width:100px;}
        display: flex;
    }
</style>
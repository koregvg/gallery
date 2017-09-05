<template>
    <div id="app">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
    import './components/css/reset.less';

    export default {
        name: 'app'
    }
</script>

<style lang="less">
    #app {
        background-color: black;
        overflow: hidden;
    }
</style>
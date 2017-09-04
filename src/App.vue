<template>
  <div id="app">
    <music></music>
    <loading v-model="isLoading"></loading>
    <router-view></router-view>
  </div>
</template>

<script>
import music from './components/music/music';
import {Loading} from 'vux';
export default {
    name: 'app',
    components: {
        music,
        Loading
    },
    computed: {
        isLoading() {
            return this.$store.state.isLoading;
        }
    }
}
</script>
<style lang="less">
@import './assets/style/reset';
#app{
    max-width: 8rem;
    margin: 0 auto;
    overflow: hidden;
}
</style>

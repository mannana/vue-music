<template>
    <div id="recommend" class="">
        <HeaderNav tabIndex="0"></headerNav>
        <Carousel></Carousel>
        <Recommend></Recommend>
        <NewList></NewList>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header/header"
    import Carousel from "./carousel"
    import Recommend from "./recommendSongList"
    import NewList from "./newSongList"
    import {mapState} from 'vuex'
    export default  {
        name: 'index',
        components: {
            HeaderNav,
            Carousel,
            Recommend,
            NewList
        },
        data() {
            return {

            }
        },
        created() {
          //页面初始化
          this.$store.dispatch('initRecommendPage');
        },
        computed: {},
        methods: {}
    }
</script>
<style>
    #recommend{}
</style>

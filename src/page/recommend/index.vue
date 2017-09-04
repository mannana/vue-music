<template>
    <div id="recommend" class="">
        <HeaderNav tabIndex="0"></headerNav>
        <Carousel :bannerList="bannerList"></Carousel>
        <Recommend title="推荐歌单" :data="PrSongList"></Recommend>
        <NewList title="最新音乐" :data="PrNewSong"></NewList>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header/header"
    import Carousel from "./carousel"
    import Recommend from "../../components/playlist/songList"
    import NewList from "../../components/songs/song"
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
        computed: {
            ...mapState({
                //获取banner图
                bannerList: state => state.recommend.bannerList,
                //获取推荐歌单
                PrSongList: state => state.recommend.PrSongList,
                //获取最新音乐
                PrNewSong: state => state.recommend.PrNewSong
            })
        },
        methods: {}
    }
</script>
<style>
    #recommend{}
</style>

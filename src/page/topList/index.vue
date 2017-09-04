<template>
    <div id="top-list" class="">
        <HeaderNav tabIndex="2"></headerNav>
        <ul class="top-list">
            <router-link class="top-item" v-for="(item,i) in cloudMusicTopList" :key="i" tag="li" :to="{name:'songListDetails',params:{id:item.id}}">
                <div class="top-box">
                    <img class="top-img" :src="item.coverImgUrl" >
                </div>
          </router-link >
        </ul>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header/header";
    import { mapState } from 'vuex';
    export default  {
        name: 'index',
        components: {
            HeaderNav
        },
        data() {
            return {
            }
        },
        created() {
            this.$store.state.isLoading=true;
            this.$store.dispatch("get_cloudMusicTopList");
        },
        destroyed() {
            this.$store.state.isLoading=false;
        },
        computed: {
            ...mapState({
                cloudMusicTopList: state => state.cloudMusicTopList
            })
        },
        methods: {}
    }
</script>
<style scoped>
.top-list{
    width: 100%;
    margin-top: .4rem;
}

.top-box{
    position: relative;
    width: 100%;
    height: 3rem;
    border-radius: .1rem;
    box-shadow: 2px 2px 6px #000;
    overflow: hidden;
}

.top-item{
    width: 90%;
    margin: 0 auto;
    position: relative;
    font-size: .24rem;
    margin-bottom:.3rem;
}
.top-img{
    width:100%;
    margin-top: -1.8rem;
}
.re-playcount{
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    padding-left: .2rem;
    line-height: .5rem;
    background: rgba(0, 0, 0, 0.5);
    color: #ccc;
    font-size: .24rem;
}
.play{
    position: absolute;
    right: 0;
    bottom: 0;
    width: .4rem;
    font-weight: bold;
}
.re-name{
    height: 0.64rem;
    line-height: 0.32rem;
    color: #666;
    padding: .1rem .1rem 0 .1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>

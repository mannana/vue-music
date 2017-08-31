<template>
    <div>
    <h1 class="recommend-title">
        <span class="title">推荐歌单</span>
    </h1>
    <ul class="re-songList">
        <router-link v-if="PrSongList" class="re-item" v-for="(item,i) in PrSongList" :key="i" tag="li" :to="{name:'songListDetails',params:{id:item.id}}">
            <div class="re-box">
                <span class="iconfont re-playcount">&#xe75a;
                    {{format.formatPlayCount(item.playCount)}}
                    <i class="iconfont play">&#xe6df;</i>
                </span>
                <img class="re-img" v-lazy="item.picUrl">

            </div>
            <p class="re-name">{{item.name}}</p>
      </router-link >
    </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default{
    name: 're-songList',
    data(){
        return {}
    },
    computed:{
        ...mapState({
          //获取推荐歌单
          PrSongList: state => state.recommend.PrSongList
        })
    }

}
</script>
<style>
.recommend-title{
    margin: .2rem 0;
    border-left: .06rem solid #d43c33;
    line-height: .4rem;
}
.title{
    padding-left: .2rem;
    font-size: .32rem;
}
.re-songList{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.re-box{
    position: relative;
    border-radius: .1rem;
    box-shadow: 2px 2px 6px #000;
    overflow: hidden;
}

.re-item{
    width: 42%;
    position: relative;
    font-size: .24rem;
    margin-bottom:.3rem;
}
.re-img{
    width: 100%;
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

<template>
    <div>
    <h1 class="recommend-title">
        <span class="title">最新音乐</span>
    </h1>
    <ul>

        <router-link class="song-item" v-for="(song,i) in PrNewSong" :key="i" tag="li" :to="{name:'songDetails',params:{id:song.id}}">
            <p class="song-name">{{song.name}}</p>
            <p class="song-info"><span v-for="(artist,i) in song.song.artists">{{artist.name}} <i v-show="i<song.song.artists.length-1">/</i></span> - <span class="song-name">{{song.name}}</span></p>
            <span class="iconfont play-btn">&#xe62f;</span>
        </router-link>

    </ul>
    </div>
</template>
<script>
import {mapState} from 'vuex';
export default{
    name: 're-songList',
    data(){
        return {
        }
    },
    computed:{
        ...mapState({
          //获取推荐歌单
          PrNewSong: state => state.recommend.PrNewSong
        })
    }

}
</script>
<style>

.song-item{
    position: relative;
    width: 100%;
    margin-left: .2rem;
    padding: .06rem 0;
    box-sizing: border-box;
    border-bottom: .02rem solid #eee;
    line-height: .5rem;
}
.play-btn{
    position: absolute;
    top: 0;
    right: .4rem;
    line-height: 1rem;
    font-size: .4rem;
    color: #aaa;
}
.song-name{
    line-height: .5rem;
    color: #455;
}
.song-info{
    font-size: .22rem;
    color: #888;
}
</style>

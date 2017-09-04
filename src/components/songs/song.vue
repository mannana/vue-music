<template>
    <div>
    <h1 v-if="title" class="recommend-title">
        <span class="title">{{title}}</span>
    </h1>
    <ul>
        <router-link v-if="data" class="song-item" v-for="(song,i) in data" :key="i" tag="li" :to="{name:'songDetails',params:{id:song.id}}">
            <span class="song-num" v-if="showNum">{{i}}</span>
            <div class="song">
            <p class="song-name">{{song.name}}</p>
            <p class="song-info" >
                <span v-for="(artist,i) in song.song.artists">{{artist.name}}
                    <i v-show="i<song.song.artists.length-1">/</i>
                </span>
                -
                <span class="song-name">{{song.name}}</span>
            </p>
            <span class="iconfont play-btn">&#xe62f;</span>
            </div>
        </router-link>

    </ul>
    </div>
</template>
<script>
export default{
    name: 're-songList',
    props: ["data","title","showNum"],
    data(){
        return {
        }
    }
}
</script>
<style scoped>
.song{
    float: left;
    overflow: hidden;
}
.song-num{
    float: left;
    align-items: center;
    font-size: .36rem;
    color: #e88;
    line-height: .9rem;
    margin: 0 .4rem 0 .1rem;
}
.song-item{
    position: relative;
    float: left;
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
    width: 85%;
    line-height: .5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #455;
}
.song-info{
    font-size: .22rem;
    color: #888;
}
</style>

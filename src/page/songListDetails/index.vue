<template>
    <div id="songListDetails" v-if="songListDetails">
        <div class="header" >
            <div class="header-bg" :style="bgUrl">
            </div>
            <div class="cover-box">
                <p class="iconfont play-count">&#xe75a;<span class="count-num">{{format.formatPlayCount(songListDetails.playCount)}}</span></p>
                <img class="header-img" v-lazy="songListDetails.coverImgUrl" alt="">
                <span class="icon">歌单</span>
            </div>
            <div class="r-box">
                <h1 class="title">{{songListDetails.name}}</h1>
                <div class="creator">
                    <img class="avatar" v-lazy="songListDetails.creator.avatarUrl"/>
                    <span class="nickname">{{songListDetails.creator.nickname}}</span>
                </div>
            </div>
        </div>
        <div id="intro" class="list-intro close">
            <p class="tags">标签：<span class="tag" v-for="tag in songListDetails.creator.expertTags">{{tag}}</span></p>
            <p class="intro">简介：<span v-html="description"></span></p>
            <i class="iconfont arrow arrow-down" @click="handleClick">&#xe615;</i>
        </div>
        <div class="play-list">
            <h3 class="list-title">歌曲列表</h3>
            <ol class="songs">
                <router-link class="song-item" v-for="(song,i) in songListDetails.tracks" :key="i" tag="li" :to="{name:'songDetails',params:{id:song.id}}">
                    <span class="song-num">{{i}}</span>
                    <div class="song">
                        <p class="song-name">{{song.name}}</p>
                        <p class="song-info"><span v-for="(artist,i) in song.ar">{{artist.name}} <i v-show="i<song.ar.length-1">/</i></span> - <span>{{song.name}}</span></p>
                        <span class="iconfont play-btn">&#xe62f;</span>
                    </div>

                </router-link>
            </ol>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'songListDetails',
        components: {},
        created() {
            this.$store.dispatch('get_songListDetails',{
                id: this.$route.params.id
            });
        },
        methods:{
            handleClick(e) {
                var introElem = document.getElementById("intro"),
                    className = e.target.getAttribute("class"),
                    isUp = className.indexOf("up"),
                    isDown = className.indexOf("down"),
                    newClassName = "";
                if(isUp!=-1){
                    newClassName=className.replace("-up","-down");
                    introElem.style.height="1.5rem";
                }
                if(isDown!=-1){
                    newClassName=className.replace("-down","-up");
                    introElem.style.height="auto";
                }
                e.target.className=newClassName;

            }
        },
        computed: {
            //歌单详情
            songListDetails() {
              return this.$store.state.songListDetails;
            },
            bgUrl() {
                return "background-image: url("+this.songListDetails.coverImgUrl+")"
            },
            //简介
            description() {
                var str=this.songListDetails.description;
                if(str){
                    return str.replace(/[\n]+/g,"<br />")
                }

            }
        },
        data() {
            return {

            }
        }
    }
</script>
<style scoped>
.header{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding:.6rem .2rem .6rem .3rem;
    background: rgba(5, 0, 0,.8);
    color: #fff;
}
.header-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(20px);
    transform: scale(1.5);
}
.cover-box{
    width:2.5rem;
    height: 2.5rem;
    position: relative;
}
.r-box{
    width: 55%;
    padding: .3rem .4rem 0;
    position: relative;
}
.play-count{
    position: absolute;
    padding-right: .1rem;
    top: 0;
    right: 0;
    color: #fff;
    font-size: .24rem;
    line-height: .5rem;
}
.icon{
    width: .8rem;
    position: absolute;
    color: #fff;
    font-size: .24rem;
    top: .2rem;
    left: 0;
    background: rgba(217,48,48,.8);
    line-height: .36rem;
    text-align: center;
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem;
}
.count-num{
    margin-left: .1rem;
}
.header-img{
    width: 100%;
}
.title{
    font-size: .32rem;
    height: 1.2rem;
    line-height: .44rem;
    color: #fff;
}
.creator{
    padding-top: .2rem;
}
.nickname{
    font-size: .28rem;
    margin-left: .15rem;
}
.avatar{
    width: .6rem;
    height: .6rem;
    border-radius: .3rem;
}
.list-intro {
    position: relative;
    height:1.5rem;
    overflow: hidden;
    padding: .2rem .2rem .3rem .3rem;
    line-height: .6rem;
    font-size: .28rem;
    color: #777;
    background: #f8f8f8;
}

.tag{
    border: .02rem solid #eee;
    padding:.06rem .14rem;
    border-radius: .2rem;
    font-size: .22rem;
    margin:0 .1rem;
}
.arrow{
    width: .4rem;
    position: absolute;
    bottom: 0;
    right: .2rem;
    font-weight: bold;
}
.arrow-up{
    transform: rotate(90deg);
}
.arrow-down{
    transform: rotate(-90deg);
}
.up{
    transform: rotate(90deg);
}
.list-title{
    height: .46rem;
    line-height: .46rem;
    padding: 0 .2rem;
    font-size: .24rem;
    color: #666;
    background-color: #eeeff0;
}
.songs{
    background: #f8f8f8;
}
.song-num{
    width: 6%;
    font-size: .34rem;
    text-align: center;
    color: #999;
}
.song{
    width: 90%;
    overflow: hidden;
    border-bottom: .02rem solid #eee;
    position: relative;
}
.song-item{
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: .2rem;
    padding: .06rem 0;
    box-sizing: border-box;
    line-height: .5rem;
}
.song-name{

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
    width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #455;
}
.song-info{
    width: 80%;
    font-size: .22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #888;
}
</style>

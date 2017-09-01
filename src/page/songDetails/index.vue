<template>
    <div v-if="songDetails" id="songDetails">
        <div class="bg" :style="mainBgUrl"></div>
        <div class="song-wrap">
                <div :class="{rotate:playStatus}" class="song-turn" @click="togglePlayStatus">
                    <div class="song-img-box">
                        <img class="songpic" :src="songDetails.songs[0].al.picUrl" alt="">
                        <div v-show="!playStatus" class="song-plybtn iconfont">&#xe62f;</div>
                    </div>
                </div>
            <div v-if="songDetails.songs[0]" class="song-info">
                <p class="song-title">
                    <span v-if="songDetails.songs[0].name" class="song-name">{{songDetails.songs[0].name}} - </span>
                    <span class="song-autr" v-for="(artist,i) in songDetails.songs[0].ar">
                        {{artist.name}}<i v-show="i<article-1">/</i>
                    </span>
                </p>
                <div class="lyric-box">
                  <ul v-if="musicCurtime" class="lyric-list" :style="{marginTop:format.compLyricPos(musicCurtime,Lyric)}">
                    <li v-for="(item,i) in Lyric" :key="i" class="line" :class="{highBright:format.formatLyrichighBright(musicCurtime,Lyric,i)}">{{item[1]}}</li>
                  </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'songDetails',
    data() {
      return {
      }
    },
    components: {},
    created() {
        this.$store.dispatch('get_PlaySongDetails', this.$route.params.id);

    },
    computed: {
        ...mapState({
            //播放状态
            playStatus: state => state.playSongs.playStatus,
            //歌曲当前时间
            musicCurtime: state => state.playSongs.musicCurtime,
            //歌曲详情
            songDetails: state => state.playSongs.songDetails,
            //歌曲总时间
            musicDuration: state => state.playSongs.musicDuration
        }),
        //音乐歌词
        Lyric() {
            return this.format.formatLyric(this.$store.state.playSongs.Lyric);
        },
        mainBgUrl(){
            return "background-image: url("+this.songDetails.songs[0].al.picUrl+")"
        },
        article(){
            return this.songDetails.songs[0].ar.length;
        }
    },
    methods: {
        // 切换播放状态方法
        togglePlayStatus(){
            this.$store.commit('set_playStatus', !this.playStatus);
        }
    }

}
</script>
<style scoped>
#songDetails{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

@keyframes rotate {

    from {
        transform-origin: center;
        transform: none;
    }
    to {
        transform-origin: center;
        transform: rotate3d(0,0,1,360deg);
    }
}

.rotate {
    animation: rotate 5s linear infinite;
}
.bg{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: auto 100%;
    transform: scale(1.5);
    transform-origin: center top;
    z-index: -1;
    opacity: 1;
    transition: opacity .3s linear;
    filter: blur(20px);
}
.bg::after{
    content: '';
    position: absolute;
    top:-1rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
}
.song-wrap{
    position: relative;
}
.song-turn{
    position: relative;
    width: 6rem;
    height: 6rem;
    margin: 1.4rem auto .5rem;
    z-index: 2;
    background: url(//s3.music.126.net/m/s/img/disc.png?d3bdd10…) no-repeat;
    background-size: contain;
}
.song-wrap:after {
    content: " ";
    position: absolute;
    width:1.8rem;
    height: 2.7rem;
    left: 50%;
    top:-1.4rem;
    margin-left: -0.3rem;
    z-index: 5;
    background:url(//s3.music.126.net/m/s/img/needle-ip6.png?be4ebbe…) no-repeat;
    background-size: contain;
}
.song-img-box{
    position: absolute;
    width: 60%;
    height: 60%;
    background: #feeffe;
    top: 20%;
    left: 20%;
    border-radius: 50%;
    overflow: hidden;
}
.songpic{
    width: 100%;
    height: 100%;
}
.song-plybtn {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -.5rem;
    margin-top: -.5rem;
    color: #fff;
    font-size: 1rem;
    z-index: 10;
}
.song-info{
    width: 86%;
    margin: 0 auto;
    overflow: hidden;
    text-align: center;
    font-size: .3rem;
    color: #fefefe;
}

.song-name{
    color: #fff;
}
.song-title{
    padding-bottom: .2rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.song-autr{
    color: hsla(0,0%,100%,.6);
}
.lyric-box{
    position: relative;
    width: 100%;
    height: 3.6rem;
    margin-top: .2rem;
    color: hsla(0,0%,100%,.6);
    overflow: hidden;
}

.line{
    line-height: .6rem;
}
.song-name,.song-gap{
    font-size: .36rem;
}
.highBright{
    color: #fff;
}
</style>

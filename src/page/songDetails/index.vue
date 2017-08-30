<template>
    <div id="songDetails">
        <div class="bg" :style="mainBgUrl"></div>
        <div class="song-wrap">
            <div class="song-turn">
                <div class="song-img-box">
                    <img class="songpic" :src="this.songDetails.songs[0].al.picUrl" alt="">
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
          showLyric: false
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
        }),
        //音乐歌词
        Lyric() {
            return this.format.formatLyric(this.$store.state.playSongs.Lyric);
        },
        mainBgUrl(){
            return "background-image: url("+this.songDetails.songs[0].al.picUrl+")"
        }
    },
    methods: {
    }
}

</script>
<style>
#songDetails{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

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
    position: absolute;
    width: 6rem;
    height: 6rem;
    left: 50%;
    top: 1.2rem;
    margin-left: -3rem;
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
    top:0;
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
</style>

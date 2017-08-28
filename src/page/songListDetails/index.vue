<template>
    <div id="songListDetails">
        <div class="header">
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
        <div class="list-intro">
            <p class="tags">标签：<span class="tag" v-for="tag in songListDetails.creator.expertTags">{{tag}}</span></p>
            <p class="intro">简介：<span v-html="description"></span></p>
            <i class="iconfont arrow arrow-up" @click="handleClick">&#xe615;</i>
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
                var className=e.target.getAttribute("class"),
                isUp=className.indexOf("up"),
                isDown=className.indexOf("down"),
                newClassName="";
                if(isUp!=-1){
                    newClassName=className.replace("-up","-down");
                }
                if(isDown!=-1){
                    newClassName=className.replace("-down","-up");
                }
                e.target.className=newClassName;

            }
        },
        computed: {
            //歌单详情
            songListDetails() {
              return this.$store.state.songListDetails;
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
<style>
.header{
    display: flex;
    justify-content: space-between;
    padding:.6rem .2rem .6rem .3rem;
    background: rgba(5, 0, 0,.8);
    color: #fff;

}
.cover-box{
    width:2.5rem;
    height: 2.5rem;
    position: relative;
}
.r-box{
    width: 55%;
    padding: .3rem .4rem 0;
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
    padding-bottom: .6rem;
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
    height: 2rem;
    overflow: hidden;
    padding: .2rem .2rem .4rem .3rem;
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
</style>

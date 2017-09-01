<template>
<transition name="slide-fade">
    <div id="searchList" :class="{page:!isScroll}" @scroll="handleScroll">
        <div class="search" :class="{fixed:isScroll}">
            <div class="search-box">
                <input class="search-input" type="text" @blur="goSearch" v-model="searchVal" id="searchBoxs" placeholder="搜索音乐,歌词,电台">
            </div>
            <router-link class="cancelSearch" :to="{path:'/recommend'}">取消</router-link>
        </div>
        <div class="listwrap" :class="{mt:isScroll}">
        <ul class="playlists">
            <router-link v-for="(item,i) in searchSuggestList.playlists" class="halfBorder playlist" tag="li" :key="i" :to="{name:'songListDetails',params:{id:item.id}}">
                <div class="playlist-img-box">
                    <img class="playlist-img" :src="item.coverImgUrl" alt="item.name">
                </div>
                <p class="playlist-name">{{item.name}}</p>
            </router-link>
        </ul>
        <ul class="song-list">
            <router-link v-for="(item,i) in searchList.songs" class="halfBorder song-item" tag="li" :key="i" :to="{name:'songDetails',params:{id:item.id}}">
                <p class="song-name">{{item.name}}</p>
                <span class="song-info">{{item.artists[0].name}} - {{item.album.name}}</span>
                <span class="iconfont play-btn">&#xe62f;</span>
            </router-link>
        </ul>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    name: 'searchList',
    components: {
    },
    created() {
        this.searchVal = '';
        this.$store.commit('set_searchSuggestList', []);
        window.addEventListener("scroll",this.handleScroll);
    },
    data() {
        return {
          searchVal: '',
          isScroll:false
        }
    },
    computed: {
        //搜索列表
        searchSuggestList() {
            return this.$store.state.searchSuggestList;
        },
        searchList() {
            return this.$store.state.searchList;
        }
    },
    methods: {
        // 搜索框获取焦点
        goSearch() {
            if (this.searchVal != '') {
                let paramObj = {
                    keywords: this.searchVal
                }
                this.$store.dispatch('get_searchSuggestList', paramObj)
                this.$store.dispatch('get_searchList', paramObj)

            } else if (this.searchVal == '' || this.searchVal == ' ') {
                this.$store.commit('set_searchSuggestList', []);
                this.$store.commit('set_searchList', []);
            }
        },
        handleScroll() {
            this.isScroll = true;
        },
        cancelSearch() {
            this.$emit("cancel")
        }

    }

}

</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(-100%);
}
#searchList{
    width: 100%;
    background: #f6f7f8;
}
.page{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0
}
.listwrap{
    width: 100%;
    overflow: hidden;
}
.mt{
    margin-top: 1rem;
}
.search{
    width: 100%;
    top: 0;
    left: 0;
    height: .6rem;
    padding: .2rem 0;
    border-bottom: .02rem solid #f1f1fe;
    background: #aba29e;
    z-index: 100;
}
.fixed{
    position: fixed;
}
.search-box{
    width: 70%;
    height: .6rem;
    border-radius: .4rem;
    margin-left:10%;
    border: .02rem solid #eed;
    overflow: hidden;
    background: #ebecec;
}
.search-input{
    height: 100%;
    outline: none;
    padding-left: .4rem;
    border:none;
    background-color: transparent;
}
.cancelSearch{
    position: absolute;
    right: .3rem;
    line-height: .6rem;
    top: .2rem;
    color: #f3f3f5;
}
.song-list{
    width: 100%;
    padding: .2rem 0;
}
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
    width: 82%;
    overflow: auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #455;
}
.song-info{
    font-size: .22rem;
    color: #888;
}
.playlists{
    width: 100%;
}
.playlist-img-box{
    width: 1.2rem;
    height: 1.2rem;
    float: left;
    overflow: hidden;
}
.playlist-img{
    width:100%;
}
.playlist-name{
    float: left;
    margin-top: .2rem;
    margin-left: .3rem;
    line-height: .5rem;
    width: 60%;
}
.playlist{
    width:100%;
    padding: .2rem .3rem;
    overflow: hidden;
}
</style>

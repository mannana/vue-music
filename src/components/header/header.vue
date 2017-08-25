<template>

    <header>
        <div class="header-nav">
        <span class="iconfont search-micro">&#xe606;</span>
        <div class="search-box">
            <i class="iconfont search-icon">&#xe662;</i>
            <input type="text" class="search-input" placeholder="搜索音乐，歌词，电台" />
        </div>
        <span class="iconfont icon-music">&#xe649;</span>
        </div>
        <tab :line-width="2" bar-active-color="#d43c33" active-color='#d43c33' class="tabNaver">
          <tab-item @on-item-click="skipPage" :selected="tabIndex == 0">个性推荐</tab-item>
          <tab-item @on-item-click="skipPage" :selected="tabIndex == 1">歌单</tab-item>
          <tab-item @on-item-click="skipPage" :selected="tabIndex == 2">排行榜</tab-item>
        </tab>
    </header>

</template>

<script>
import {Tab,TabItem} from 'vux'
    export default {
        name: "header",
        components: {
          Tab,
          TabItem
        },
        props:['tabIndex'],
        data(){
            return{}
        },
        computed: {

        },
        methods: {
            //跳转页面
            skipPage(index){
                if (index == 1) {
                  this.$router.push({
                    name: 'songList'
                  })
                } else if (index == 0) {
                  this.$router.push({
                    name: 'recommend'
                  })
                } else if (index == 2) {
                  this.$router.push({
                    name: 'topList'
                  })
                }
            }
        }

    }
</script>

<style>

    header{
        width: 100%;
        overflow: hidden;
    }
    .header-nav{
        width:90%;
        height: 100%;
        padding:0 5%;
        height:.9rem;
        display: flex;
        color:#fff;
        background:#d43c33;
        justify-content: space-between;
        align-items: center;
    }
    .search-micro{
        font-size: .40rem;
    }
    .search-box{
        width:70%;
        height: .40rem;
        padding: .1rem .2rem;
        background: #ebecec;
        border-radius: .3rem;
    }
    .search-icon{
        color: #cbcbcc;
        float: left;
        line-height:.40rem;
        font-size: .36rem;
        width: 12%;
    }
    .search-input{
        color: #666;
        width: 86%;
        height: 100%;
        font-size: .24rem;
        float: left;
        outline: none;
        background:transparent;
        border: none;
    }
    .icon-music{
        font-size: .48rem;
    }
    .vux-tab{
        height: .6rem;
    }
    .vux-tab .vux-tab-item{
        line-height: .6rem;
    }
</style>

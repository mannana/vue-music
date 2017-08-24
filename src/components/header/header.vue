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
        <tab :line-width="2" bar-active-color="#f33" active-color='#f33' class="tabNaver">
          <tab-item>个性推荐</tab-item>
          <tab-item>歌单</tab-item>
          <tab-item>音乐排行榜</tab-item>
        </tab>
    </header>

</template>

<script>
import {
  Tab,
  TabItem
} from 'vux';
    export default {
        name: "header",
        components: {
          Tab,
          TabItem
        },
        data(){
            return{
                msg: "music"
            }
        }

    }
</script>

<style>

    header{
        width: 100%;
        height:.88rem;
    }
    .header-nav{
        width:90%;
        height: 100%;
        padding:0 5%;
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
        color: #333;
        width: 86%;
        height: 100%;
        font-size: .32rem;
        float: left;
        outline: none;
        background:transparent;
        border: none;
    }
    .icon-music{
        font-size: .48rem;
    }
</style>

<template>
    <div id="carousel" class="">
        <swiper v-if="bannerList" loop auto :aspect-ratio="300/800" dots-position="center">
            <swiper-item v-for="(item,i) in bannerList" :key="i">
                <img width="100%" height="100%" v-lazy="item.pic">
            </swiper-item>
        </swiper>
    </div>
</template>
<script>

    import {Swiper, SwiperItem} from 'vux'
    // import {mapState} from "vuex"
    export default  {
        name: 'carousel',
        props:["bannerList"],
        components: {
            Swiper,
            SwiperItem
        },
        data() {
            return {
                originNum: 0
            }
        },
        methods: {
          //获取触摸起点
          getOrigin(event) {
            let ev = event || window.event;
            this.originNum = ev.touches[0].pageX;
          },
          //计算距离,判断左/右滑动
          compDistance(event) {
            let ev = event || window.event;
            let endNum = ev.changedTouches[0].pageX;
            let offsetNum = endNum - this.originNum;
            if (offsetNum > 80) {
              this.$router.push({
                name: 'songList'
              })
            }
          }
        }
    }
</script>
<style>
    #carousel{}
</style>

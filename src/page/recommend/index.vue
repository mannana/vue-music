<template>
    <div id="recommend" class="">
        <HeaderNav tabIndex="0"></headerNav>
        <Carousel></Carousel>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header/header"
    import Carousel from "./carousel"
    export default  {
        name: 'index',
        components: {
            HeaderNav,
            Carousel
        },
        data() {
            return {

            }
        },
        computed: {},
        methods: {}
    }
</script>
<style>
    #recommend{}
</style>

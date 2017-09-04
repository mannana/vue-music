<template>
    <div id="song-list" class="">
        <HeaderNav tabIndex="1"></headerNav>
        <SongList :data="songList"></SongList>
    </div>
</template>
<script>
    import HeaderNav from "../../components/header/header"
    import SongList from "../../components/playlist/songList"
    export default  {
        name: 'index',
        components: {
            HeaderNav,
            SongList
        },
        data() {
            return {
            }
        },
        created() {
            this.$store.dispatch('get_playList', 'Boutique');
        },
        computed: {
          songList() {
            return this.$store.state.playList;
          }
        },
        methods: {}
    }
</script>
<style>
    #recommend{}
</style>

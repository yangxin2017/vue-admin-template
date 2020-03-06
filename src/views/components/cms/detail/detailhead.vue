<template>
    <div class="cms-d-container">
        <div class="cms-d-head">
            <div class="cms-fl left">
                <div class="cms-search" v-if="showsearch">
                    <input type="text" @keyup="keySearch($event)" v-model="keyword" />
                </div>
            </div>
            <div class="cms-fl mid">
                <router-link to="main">
                    <span class="spe-font">全军联合作战情报网</span>
                </router-link>
            </div>
            <div class="cms-fl right">
                <span class="cms-hd-title">{{ name }}</span>
                <!-- <span class="cms-hd-icons i1"></span>
                <span class="cms-hd-icons i2"></span> -->
                <span style="cursor:pointer" class="cms-hd-icons i3" @click="logout"></span>
            </div>
        </div>
    </div>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
    props: {
        showsearch: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            keyword: ''
        }
    },
    methods: {
        keySearch(ev){
            if(ev.keyCode == 13){
                this.$router.push({ path: 'search', query: { word: this.keyword}});
            }
        },
        async logout() {
            await this.$store.dispatch('user/logout')
            this.$router.push(`/login?redirect=${this.$route.fullPath}`)
        }
    },
    mounted(){
    },
    computed: {
        ...mapGetters([
            'name'
        ])
    }
}
</script>
<style lang="scss" scoped>
.cms-d-container{
    width:100%;
}
.cms-d-head{
    background:url('../../../../assets/cms/header/head.png') no-repeat center 0;
    width:100%;height:65px;display:flex;
}
.cms-fl{
    flex-grow: 1;
    .spe-font{
        cursor:pointer;
    }
    
    .cms-search{
        background:url('../../../../assets/cms/header/inp_search.png') no-repeat 0 0;
        width: 255px;height:34px;margin:14px 0 0 5px;
        input{
            width:212px;height:25px;
            border:none;margin:5px 0 0 38px;
            background:transparent;
            font-size: 14px;color:#fff;
        }
    }
    
    &.right{
        text-align:right;margin:20px 40px 0 0;
    }
    &.mid{
        text-align: center;padding:6px 0 0 0;letter-spacing:3px;
    }

    .cms-hd-title{
        font-size:14px;color:#fff;
        text-shadow:1px 1px 2px #333;
        position:relative;top:-3px;right: 5px;
        letter-spacing:2px;
    }

    .cms-hd-icons{
        background:url('../../../../assets/cms/header/icons.png') no-repeat 0 0;
        width:20px;height:20px;display:inline-block;
        margin:0 10px 0 0;
        &.i1{background-position:-9px -9px;}
        &.i2{background-position:-47px -10px;}
        &.i3{background-position:-83px -9px;}
    }
}
</style>

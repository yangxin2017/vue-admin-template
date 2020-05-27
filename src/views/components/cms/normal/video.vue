<template>
    <div class="cms-videos">
        <div class="li" v-for="item in data" :key="item.id" :style="{'margin-right': data.length==1 ? 0 : '25px'}">
            <video :src="item.video" controls="controls"></video>
            <router-link :to="item.link" target="_blank">
                <a class="title">{{item.title}}</a>
            </router-link>
        </div>
    </div>
</template>
<script>

import { getContents } from '@/api/cms'
import { NewsModel } from '@/model/cms/news'

export default {
    props: {
        cid: {
            type: Number,
            default: -1
        },
        count: {
            type: Number,
            default: 4
        }
    },
    data(){
        return {
            data: []
        }
    },
    methods: {
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            for(let c of res.data){
                let tmp = new NewsModel(c)
                this.data.push(tmp)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-videos{
    display:flex;
    height: calc(100% - 20px);
    .li{
        flex:1;margin-top:5px;padding:9px;margin-right:25px;
        background:url('../../../../assets/cms/content/r1bg.png') no-repeat left 0;
        height:100%;position:relative;text-align:left;background-size:100% 100%;
        video{
            object-fit: fill;
            width:100%;height:96%;
        }
        .title{
            position:absolute;width:100%;height:25px;background:rgba(0,0,0,0.5);
            color:#fff;left:0px;bottom:0px;padding:0 0 0 20px;
            &:hover{
                text-decoration:underline;
            }
        }
    }
}
</style>

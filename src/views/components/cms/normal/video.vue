<template>
    <div class="cms-videos">
        <div class="li" v-for="item in data" :key="item.id">
            <video :src="item.video" controls="controls"></video>
            <a @click="groute(item)" class="title">{{item.title}}</a>
        </div>
    </div>
</template>
<script>

import { getContents } from '@/api/cms'

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
        groute(item){
            this.$router.push({ path: 'detail', query: { id: item.id }});
        }
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            for(let c of res.data){
                let tmp = {
                    id: c.id, title: c.title,
                    time: this.$moment(c.publishDate).format("YYYY-MM-DD"),
                    clicks: c.clicks,
                    source: c.lydwmc,
                    pic: '/cms/webfile/' + c.tpwj,
                    video: '/cms/webfile/' + c.spwj
                }
                this.data.push(tmp)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-videos{
    display:flex;
    .li{
        flex:0 1 50%;margin-top:5px;
        background:url('../../../../assets/cms/content/r1bg.png') no-repeat left 0;
        height:152px;position:relative;text-align:left;
        video{
            object-fit: fill;
            width:90%;height:96%;
            margin:1% 0 0 1%;
        }
        .title{
            position:absolute;width:92%;height:25px;background:rgba(0,0,0,0.5);
            color:#fff;left:0px;bottom:0px;padding:0 0 0 20px;
            &:hover{
                text-decoration:underline;
            }
        }
    }
}
</style>

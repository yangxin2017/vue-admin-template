<template>
<div class="lists">
    <div class="li" v-for="item in data" :key="item.id">
        <div class="cms-pictxt-bg">
            <img class="img" :src="item.pic" alt="" />
            <p class="title">
                <a @click="groute(item)" :href="item.link">{{item.title}}</a>
            </p>
        </div>    
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
                    pic: '/cms/webfile/' + c.tpwj
                }
                this.data.push(tmp)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    .lists{
        display: flex;margin:10px 0 0 0;
        flex-direction: row;
        .li{
            flex: 0 1 25%;
        }
    }
    .cms-pictxt-bg{
        background:url('../../../../assets/cms/content/icons.png') no-repeat -7px -350px;
        width:135px;height:148px;position:relative;
        .img{
            width:120px;height:75px;position:absolute;top:5px;left:8px;
        }
        .title{
            width:120px;height:40px;color:#fff;font-size:14px;line-height:19px;
            position:absolute;top:85px;left:10px;
            a:hover{
                text-decoration:underline;
            }
        }
    }
</style>

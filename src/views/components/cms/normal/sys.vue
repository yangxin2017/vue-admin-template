<template>
    <div class="cms-lbt">
        <el-carousel trigger="click" height="128px" indicator-position="none" arrow="hover">
            <el-carousel-item v-for="(item, index) in data" :key="index">
                <div class="syses">
                    <div class="li" v-for="d in item" :key="d.id">
                        <img :src="d.pic" alt="" /><br/>
                        <a target="_blank" :href="d.link">{{d.title}}</a>
                    </div>
                </div>
            </el-carousel-item>
        </el-carousel>
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
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            let len = Math.ceil(res.data.length / 5)
            let finarr = [];
            for(let i=0;i<len;i++){
                finarr.push([])
                for(let j=0;j<5;j++){
                    let inx = i * 5 + j
                    if(inx < res.data.length){
                        let c = res.data[inx]
                        let tmp = {
                            id: c.id, title: c.title,
                            time: this.$moment(c.publishDate).format("YYYY-MM-DD"),
                            clicks: c.clicks,
                            source: c.lydwmc,
                            pic: '/cms/webfile/' + c.tpwj,
                            video: '/cms/webfile/' + c.spwj,
                            link: c.wldz
                        }
                        finarr[i].push(tmp)
                    }
                }
            }
            this.data = finarr
        })
    }
}
</script>
<style lang="scss" scoped>
.syses{
    display:flex;margin-top:20px;
    .li{
        flex:0 1 20%;position:relative;text-align:center;
        a{color:#fff;display:inline-block;width:80px;height:25px;overflow:hidden;font-weight:bold;font-size:12px;margin-top:8px;position:absolute;top:51px;left:50%;margin-left:-40px;}
        img{width:60px;height:70px;}
    }
}
</style>

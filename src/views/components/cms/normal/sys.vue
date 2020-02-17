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
        },
        percount: {
            type: Number,
            default: 5
        }
    },
    data(){
        return {
            data: []
        }
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            let len = Math.ceil(res.data.length / this.percount)
            let finarr = [];
            for(let i=0;i<len;i++){
                finarr.push([])
                for(let j=0;j<this.percount;j++){
                    let inx = i * this.percount + j
                    if(inx < res.data.length){
                        let c = res.data[inx]
                        let tmp = new NewsModel(c)
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
        position:relative;text-align:center;flex:1;
        a{color:#fff;display:inline-block;width:80px;height:25px;overflow:hidden;font-weight:bold;font-size:12px;margin-top:8px;position:absolute;top:51px;left:50%;margin-left:-40px;}
        img{width:60px;height:70px;}
    }
}
</style>

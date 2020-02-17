<template>
    <div class="cms-lbt">
        <el-carousel trigger="click" indicator-position="none" arrow="hover">
            <el-carousel-item v-for="item in data" :key="item.id">
                <div class="img">
                    <img width="100%" height="100%" :src="item.pic" alt="" />
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
            type: String,
            default: '-1'
        }
    },
    data(){
        return {
            data: []
        }
    },
    mounted(){
        getContents({cid: this.cid, pagesize: 3}).then(res => {
            for(let d of res.data){
                let m = new NewsModel(d)
                this.data.push(m)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-lbt{
    height:100%;
    .img{
        border:solid 1px #fff;width:100%;height:100%;
    }
}
</style>

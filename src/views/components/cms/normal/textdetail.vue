<template>
    <div class="cms-text-detail">
        <p class="desc">
            {{data.desc}}
        </p>

        <router-link :to="data.link" v-if="data.link">
            <a class="link">详情>></a>
        </router-link>
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
            data: {}
        }
    },
    methods: {
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            if(res.data.length > 0){
                let c = res.data[0];
                let tmp = new NewsModel(c)
                this.data = tmp
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-text-detail{
    position:relative;height:calc(100% - 17px);
    .desc{
        font-size:14px;color:#fff;height:100%;
    }
    .link{
        position:absolute;
        right:10px;bottom:10px;
        color:#ffff00;font-size:16px;
        &:hover{
            text-decoration:underline;
        }
    }
}
</style>
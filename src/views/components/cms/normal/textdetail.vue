<template>
    <div class="cms-text-detail">
        <p class="desc">
            {{data.desc}}
        </p>
        <a @click="groute(data)" class="link" :href="data.link">详情>></a>
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
            data: {}
        }
    },
    methods: {
        groute(item){
            this.$router.push({ path: 'detail', query: { id: item.id }});
        }
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            if(res.data.length > 0){
                let c = res.data[0];
                let tmp = {
                    id: c.id, title: c.title,
                    time: this.$moment(c.publishDate).format("YYYY-DD-MM"),
                    clicks: c.clicks,
                    source: c.lydwmc,
                    desc: c.description
                }
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
    }
}
</style>
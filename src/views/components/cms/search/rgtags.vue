<template>
    <div class="tags">
        <b>相关标签</b>
        <ul class="tls">
            <li v-for="item in datas" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>

import { getTags } from '@/api/cms'

export default {
    data(){
        return {
            datas: []
        }
    },
    methods: {
        setTags(ids){
            if(ids){
                getTags({ids: ids}).then(res => {
                    this.datas = res.data
                })
            }
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.tags{
    width:678px;margin-top:62px;
    b{font-size:18px;color:#fff;}
    .tls{
        list-style:none;margin:25px 0 0 0;display:flex;
        flex-wrap:wrap;padding:0;
        li{
            flex:0 1 16.66%;font-size:14px;color:#fff;
            text-align:left;cursor:pointer;margin:0 0 20px 0;
            &:hover{
                text-decoration:underline;
            }
        }
    }
}
</style>

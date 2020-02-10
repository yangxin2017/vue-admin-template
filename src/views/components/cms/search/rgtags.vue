<template>
    <div class="tags">
        <b>相关事件</b>
        <ul class="tls">
            <li @click="choosetag(item)" :class="{sel: item.id==curtagid}" v-for="item in datas" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>

import { getTags } from '@/api/cms'

export default {
    data(){
        return {
            alldatas: [],
            datas: [],
            curtagid: -1
        }
    },
    methods: {
        choosetag(item){
            this.curtagid = item.id
            this.$emit('clicktag', item.id)
        },
        filterTags(keyword){
            console.log(keyword, this.alldatas)
            let inx = 0
            let arr = []
            for(let d of this.alldatas){
                if(d.name.indexOf(keyword) >= 0){
                    inx++;
                    if(inx <= 30){
                        arr.push(d)
                    }
                }
            }
            this.datas = arr
        }
    },
    mounted(){
        let showcount = 30
        getTags({}).then(res => {
            this.alldatas = res.data
            for(let i=0;i<this.alldatas.length;i++){
                if(i >= 30){ break; }
                this.datas.push(this.alldatas[i])
            }
        })
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
            &:hover, &.sel{
                color:#AF8734;font-weight:bold;
                text-decoration:underline;
            }
        }
    }
}
</style>

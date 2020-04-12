<template>
    <div class="ranks">
        <div class="li">
            <span class="icons i1"></span>
            <a v-for="(item,index) in hots" :key="index">
                <span class="jt"></span>{{item[0]}}
            </a>
        </div>
        <div class="li">
            <span class="icons i2"></span>
            <a v-for="(item,index) in gxs" :key="index">
                <span class="jt"></span>{{item[0]}}
            </a>
        </div>
        <div class="li" v-if="words.length > 0">
            <span class="icons i3"></span>
            <a v-for="(item,index) in words" :key="index">
                <span class="jt"></span>{{item.name}}
            </a>
        </div>
    </div>    
</template>
<script>
import { getRanks, getWords } from '@/api/cms'
export default {
    props: {
        count: {
            type: Number,
            default: 3
        }
    },
    data(){
        return {
            hots: [],
            gxs: [],
            words: []
        }
    },
    mounted(){
        getRanks({hot: false}).then(res => {
            this.gxs = this.getResultCount(res)
        })
        getRanks({hot: true}).then(res => {
            this.hots = this.getResultCount(res)
        })
        if(this.count > 2){
            getWords({pagesize: 3}).then(res => {
                this.words = res.data
            })
        }
    },
    methods: {
        getResultCount(res){
            let cnt = res.data.length
            let scnt = Math.min(cnt, 3)
            let arr = []
            for(let i=0;i<scnt;i++){
                arr.push(res.data[i])
            }
            return arr
        }
    }
}
</script>
<style lang="scss" scoped>
.ranks{
    display:flex;margin-top:5px;
    justify-content:space-around;
    .li{
        flex:1;
        a{
            display:block;
            color:#fff;
            line-height:23px;
            margin-top:2px;
        }
        .jt{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;position:relative;top:4px;display:inline-block;vertical-align:middle;
            margin-right:5px;position:relative;top:-2px;
        }
    }
    .icons{
        background:url('../../../../assets/cms/content/ranks.png') no-repeat 0 0;
        width:178px;height:51px;display:block;
        &.i2{
            background-position:-217px 0;
        }
        &.i3{
            background-position:-434px 0;
        }
    }
}
</style>

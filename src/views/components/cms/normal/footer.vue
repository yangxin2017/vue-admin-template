<template>
    <div class="cms-footer">
        <div :class="item.cls" v-for="(item, index) in data" :key="index">
            <span>{{item.name}}</span>
        </div>
        <div class="ic ixx" @click="showStatics">
        </div>
        <main-statics v-if="showstatics" v-on:hide="hideStatics"></main-statics>
    </div>
</template>
<script>
import { getDepts } from '@/api/cms'
var mainstas = () => import('@/views/components/cms/mainstatics')

export default {
    components: {
        'main-statics': mainstas
    },
    data(){
        return {
            data: [],
            showstatics: false
        }
    },
    methods: {
        showStatics(){
            this.showstatics = true
        },
        hideStatics(){
            this.showstatics = false
        }
    },
    mounted(){
        getDepts({}).then(res => {
            let i = 1;
            for(let d of res.data){
                d.cls = 'ic i' + (i++)
            }
            this.data = res.data
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-footer{
    width:100%;display:flex;
    padding:17px 30px 0 30px;
    .ic{
        flex:1;background:url('../../../../assets/cms/content/jhs.png') no-repeat 0 0;
        width:105px;height:117px;margin-right:90px;
        span{
            font-family:zz;
            font-size:16px;color:#fff;display:inline-block;
            width:120px;text-align:center;
            margin:92px 0 0 -9px;cursor:pointer;
        }
        &.i2{background-position:-198px 0;}
        &.i3{background-position:-396px 0;}
        &.i4{background-position:-594px 0;}
        &.i5{background-position:-792px 0;}
        &.i6{background-position:-990px 0;}
        &.i7{background-position:-1188px 0;}
        &.i8{background-position:-1386px 0;}
        &.i9{background-position:-1584px 0;}
        &.i10{background-position:-1782px 0;}
        &.i11{background-position:-1992px 0;}
        &.i12{background-position:-2202px 0;}
        &.ixx{background-position:-2407px 0;width:79px;margin-right:0;}
    }
}
</style>

<template>
    <div class="cms-top" :style="{height: hei + 'px'}">
        <div class="lbt">
            <video controls="controls" :src="first.video"></video>
        </div>
        <div class="zqb">
            <ncpd :data="data" :title="title"></ncpd>
        </div>
    </div>
</template>
<script>
var ncpd = () => import('@/views/components/cms/normal/ncpd')
import { getContents } from '@/api/cms'
import { NewsModel } from '@/model/cms/news'

export default {
    components: {
        'ncpd': ncpd
    },
    props: {
        cid: {
            type: String,
            default: null
        },
        hei: {
            type: String,
            default: '280'
        },
        count: {
            type: Number,
            default: 6
        },
        title: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            first: {},
            data: []
        }
    },
    mounted(){
        getContents({cid: this.cid, pagesize: this.count}).then(res => {
            if(res.data.length > 0){
                let c = res.data[0];
                let tmp = new NewsModel(c)
                this.first = tmp
                for(let i=1;i<res.data.length;i++){
                    let tmp = new NewsModel(res.data[i])
                    this.data.push(tmp)
                }
            }
            console.log(this.first)
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-top{
    display:flex;height:100%;
    justify-content:space-around;
    .lbt{
        flex: 4;margin:20px 20px 0 40px;
        height:calc(100% - 15px);padding:5px;border:solid 1px rgba(255,255,255,0.3);
        border-radius:0 5px 0 5px;
        video{
            object-fit: fill;
            width:100%;height:100%;
        }
    }
    .zqb{flex: 5;height:calc(100% - 15px);margin:20px 0px 0 0px;}
}
</style>
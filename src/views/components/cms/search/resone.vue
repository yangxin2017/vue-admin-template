<template>
    <div class="lists">
        <div class="lis">
            <label class="res-tl">以下是<b>“{{params.word}}”</b>的搜索结果</label>
            <span class="icon-close" @click="closecur"></span>
            <ul class="news-lists">
                <li v-for="item in datas" :key="item.id" class="li">
                    <txtli :dat="item" />
                </li>
            </ul>
            <div class="cms-d-pages">
                <el-pagination
                    background small
                    @current-change="pagechange"
                    layout="prev, pager, next"
                    :page-size="params.pagesize"
                    :total="total">
                </el-pagination>
            </div>
        </div>
    </div>    
</template>
<script>
var txtli = () => import('@/views/components/cms/search/txtli')

import { getSearchs } from '@/api/cms'

export default {
    components: {
        'txtli': txtli
    },
    props: {
        pas: {
            type: Object,
            default: {}
        },
        uuid: {
            type: Number,
            default: -1
        }
    },
    data(){
        return {
            params: {},
            total: 0,
            datas: []
        }
    },
    methods: {
        search(){
            getSearchs(this.params).then(res => {
                let arr = []
                for(let c of res.data){
                    let tmp = {
                        id: c.id, title: c.title,
                        time: this.$moment(c.publishDate).format("YYYY-DD-MM"),
                        clicks: c.clicks,
                        source: c.lydwmc
                    }
                    arr.push(tmp)
                }
                this.datas = arr
                this.total = res.total
            })
        },
        pagechange(cpage){
            this.params.pageindex = cpage
            this.search()
        },
        closecur(){
            this.$emit("closepanel", this.uuid)
        }
    },
    mounted(){
        this.params = this.pas
        this.search()
    }
}
</script>
<style lang="scss" scoped>
.lists{
    .res-tl{
        font-size:14px;
        b{
            font-size:20px;font-weight:bold;
        }
    }
    height:calc(100% - 20px);margin-top:20px;
    display:inline-block;
    width:323px;margin-right:30px;overflow:auto;
    .lis{height:calc(100% - 20px);padding:15px 10px;
        background:#fff;position:relative;
        .icon-close{
            background:url('../../../../assets/cms/search/icons_search.png') no-repeat -64px -36px;
            width:24px;height:24px;position:absolute;top:10px;right:10px;cursor:pointer;
        }
        .news-lists{
            margin:28px 0 0 0;padding:0;list-style:none;
            height:calc(100% - 87px);
            li{margin-bottom:20px;}
        }
    }
}
</style>


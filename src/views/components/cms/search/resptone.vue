<template>
<div class="news">
    <div class="lists" v-if="datas.length > 0">
        <div class="md" v-for="item in datas" :key="item.id">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">{{item.title}}</a>
            </div>
            <div class="tls-infor">
                <span class="time">{{item.time}}</span>
                <span class="source">{{item.source}}</span>
                <span class="clks">点击量：{{item.clicks}}</span>
            </div>
        </div>
    </div>
    <div class="no-data" v-if="datas.length == 0">
        没有查询到数据。
    </div>

    <div class="cms-d-pages" v-if="datas.length > 0">
        <el-pagination
            background small
            @current-change="pagechange"
            layout="prev, pager, next"
            :page-size="param.pagesize"
            :total="total">
        </el-pagination>
    </div>
</div>
</template>
<script>

import { getSearchs } from '@/api/cms'

export default {
    props: {
    },
    data(){
        return {
            param: {},
            datas: [],
            total: 0
        }
    },
    methods: {
        initContent(pa){
            this.param = pa 
            getSearchs(this.param).then(res => {
                let arr = []
                for(let c of res.data){
                    let tmp = {
                        id: c.id, title: c.title,
                        time: this.$moment(c.publishDate).format("YYYY-DD-MM"),
                        clicks: c.clicks,
                        source: c.lydwmc,
                        tagIds: c.tagIds
                    }
                    arr.push(tmp)
                }
                this.datas = arr
                this.total = res.total
                /////
                this.outputRelInfo()
            })
        },
        outputRelInfo(){
            let tagids = []
            for(let d of this.datas){
                let tmp = d.tagIds.split(' ')
                for(let tid of tmp){
                    if(this.isHave(tagids) == false) {
                        tagids.push(tid)
                    }
                }
            }
            this.$emit("showtags", tagids.join(','))

        },
        isHave(arr, id){
            let ishas = false
            for(let d of arr){
                if(d == id){
                    ishas = true
                    break
                }
            }
            return ishas
        },
        pagechange(cpage){
            this.param.pageindex = cpage
            this.initContent(this.param)
        }
    },
    mounted(){
        // this.initContent()
    }
}
</script>
<style lang="scss" scoped>
.news{
    height:calc(100% - 261px);
}
.no-data{
    color:#fff;
    margin:20px 0 0 0;
}
.lists{
    display:flex;
    flex-wrap:wrap;
    padding:10px 0 0 0;
    height:calc(100% - 70px);
    .md{
        flex: 0 1 23%;margin:10px 2% 10px 0;
        .tls{
            display:flex;
            .sjx{
                background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
                width:6px;height:6px;position:relative;top:4px;display:inline-block;
            }
            .title{
                font-size:14px;color:#fff;margin-left:5px;height:34px;overflow:hidden;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
        .tls-infor{
            display:flex;margin:10px 0 0 0;
            span{
                font-size:12px;color:#B8D417;flex:1;
                &.time{margin-left:10px;}
                &.source{text-align:center;}
                &.clks{text-align:right;}   
            }
        }
    }
}
</style>

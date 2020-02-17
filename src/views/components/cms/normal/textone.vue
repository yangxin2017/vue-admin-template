<template>
    <div class="lists">
        <div class="li" v-for="item in data" :key="item.id">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <router-link :to="item.link">
                        <a>{{item.title}}</a>
                    </router-link>
                </div>
                <div class="contents">
                    <span class="time">{{item.time}}</span>
                    <span class="source">{{item.source}}</span>
                    <span class="views">浏览量：{{item.clicks}}</span>
                </div>
            </div>
        </div>
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
        },
        isgw: {
            type: String,
            default: 'false'
        },
        lydw: {
            type: String,
            default: "-1"
        }
    },
    data(){
        return {
            data: []
        }
    },
    methods: {
    },
    mounted(){
        let isGuanwang = this.isgw == 'true' ? true : false
        let lydw = this.lydw != "-1" ? this.lydw : undefined

        getContents({cid: this.cid, pagesize: this.count, isgw: isGuanwang, lydw: lydw}).then(res => {
            for(let c of res.data){
                let m = new NewsModel(c)
                this.data.push(m)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.lists{
    display: flex;margin:10px 0 0 0;
    flex-flow: row wrap;width:100%;
    justify-content: space-between;
    .li{
        flex:0 1 50%;
        padding:0 10px 0 0;
        margin:5px 0 20px 0;
    }
    &.lifull .li{
        flex: 0 1 100%;
    }
}
.cms-text-com{
    .title{
        .sjx{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;float:left;position:relative;top:6px;left:6px;
        }
        a{
            font-size:16px;color:#fff;
            margin-left:15px;display:block;height:36px;
            word-break: break-all;overflow: hidden;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .contents{
        display:flex;margin:5px 0 0 0;
        flex-direction: row;
        justify-content: space-between;
        span{
            color:#B8D517;font-size:14px;
            &.source{font-weight:bold;}
            &.time{margin-left:33px;}
            &.views{margin-right:4px;}
        }
    }
}
</style>

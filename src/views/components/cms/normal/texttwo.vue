<template>
    <div class="lists">
        <div class="li" v-for="item in data" :key="item.id">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <router-link :to="item.link" target="_blank">
                        <a>{{item.title}}</a>
                    </router-link>
                </div>
                <div class="contents">
                    <span class="time">{{item.time}}</span><br/>
                    <span class="source">{{item.source}}</span>
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
                let tmp = new NewsModel(c)
                this.data.push(tmp)
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.lists{
    display: flex;margin:10px 0 0 0;
    flex-flow: column;width:100%;
    height:calc(100% - 18px);
    .li{
        padding:0 10px 0 0;
        margin-bottom: 15px;
    }
}
.cms-text-com{
    display:flex;
    .title{
        flex:1;
        .sjx{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;float:left;position:relative;top:7px;left:6px;
        }
        a{
            font-size:16px;color:#fff;
            margin-left:15px;display:block;height:36px;overflow:hidden;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .contents{
        width:100px;
        text-align:right;
        span{
            color:#B8D517;font-size:14px;
            &.source{font-weight:bold;}
            &.time{margin-left:15px;}
        }
    }
}
</style>

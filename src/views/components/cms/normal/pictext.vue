<template>
<div class="lists">
    <div class="li" v-for="item in data" :key="item.id">
        <div class="cms-pictxt-bg">
            <img class="img" :src="item.pic" alt="" />
            <p class="title">
                <router-link :to="item.link">
                    <a>{{item.title}}</a>
                </router-link>
            </p>
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
        display: block;margin:10px 0 0 0;
        flex-direction: row;
        flex-wrap: wrap;
        .li{
            float:left;margin-bottom:13px;
            text-align:center;margin-right:1px;
        }
    }
    .cms-pictxt-bg{
        background:url('../../../../assets/cms/content/icons.png') no-repeat -7px -350px;
        width:135px;height:148px;position:relative;display: inline-block;
        .img{
            width:120px;height:75px;position:absolute;top:5px;left:8px;
        }
        .title{
            width:120px;height:40px;color:#fff;font-size:14px;line-height:19px;
            position:absolute;top:85px;left:10px;
            a:hover{
                text-decoration:underline;
            }
        }
    }
</style>

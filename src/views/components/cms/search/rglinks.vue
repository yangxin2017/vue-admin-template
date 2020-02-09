<template>
    <div class="links">
        <b>搜索热点</b>
        <ul class="tls">
            <li v-for="(item,index) in hots" :key="item.id">
                <span class="num">{{index+1}}</span>
                <span class="title">{{item.name}}</span>
                <span class="clks">{{item.searchCount}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

import { getWords } from '@/api/cms'

export default {
    data(){
        return {
            hots: []
        }
    },
    mounted(){
        getWords({pagesize: 10}).then(res => {
            this.hots = res.data
        })
    }
}
</script>
<style lang="scss" scoped>
.links{
    width:678px;margin-top:32px;
    b{font-size:18px;color:#fff;}
    .tls{
        list-style:none;margin:25px 0 0 0;padding:0;
        li{
            border-bottom:dotted 1px #fff;display:flex;padding:0 0 5px 0;margin:0 0 20px 0;
            .num{
                width:40px;font-size:14px;font-weight:bold;color:#fff;
            }
            .title{
                font-size:14px;color:#fff;flex:1;cursor:pointer;
                &:hover{
                    text-decoration:underline;
                }
            }
            .clks{
                font-size:14px;color:#fff;width:100px;text-align:right;
            }
        }
    }
}
</style>

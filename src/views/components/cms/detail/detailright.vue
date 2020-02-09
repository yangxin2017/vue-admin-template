<template>
    <div class="cms-d-detail" v-if="obj">
        <h2>{{obj.title}}</h2>
        <div class="cms-d-tags">
            <span class="tg" v-for="item in obj.tags" :key="item.id">{{item.name}}</span>
        </div>
        <div class="infor">
            <span class="source">来源单位：{{obj.source}}</span>
            <span class="time">发布时间：{{obj.time}}</span>
        </div>
        <div class="ifas">
            <iframe v-if="obj.nrwj" :src="obj.nrwj" width="100%" height="100%" marginwidth="0" marginheight="0" frameborder="0">
            </iframe>
            <video v-if="obj.video" controls="controls" :src="obj.video"></video>
        </div>

        <div class="d-hideinfo" :class="{hide: !showdesc}">
            
            <i @click="showdesc=true" class="el-icon-d-arrow-left" v-if="!showdesc"></i>
            <i @click="showdesc=false" class="el-icon-d-arrow-right" v-if="showdesc"></i>

            <div class="desc" v-if="obj.desc">
                <b>摘要：</b><br/>
                {{obj.desc}}
            </div>
            <div class="img" v-if="obj.pic">
                <b>图片：</b><br/>
                <img :src="obj.pic" alt="" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        obj: {
            type: Object,
            default: false
        }
    },
    data(){
        return {
            showdesc: false
        }
    }
}
</script>
<style lang="scss" scoped>
.cms-d-detail{
    height: calc(100% - 28px);
    position:relative;
    h2{color:#fff;text-align:center;display:block;}
    .ifas{
        height: calc(100% - 120px);width:95%;margin:20px auto;
        border:dotted 1px #E1FF0F;
        video{
            width:100%;height:100%;object-fit:fill;
        }
    }
    .cms-d-tags{
        text-align:center;
        .tg{display:inline-block;padding:3px 7px;color:#333;background:#E1FF0F;font-style:italic;border-radius:3px;margin:0 5px;}
    }
    .infor{
        display: flex;width:90%;margin:0 auto;
        .time{color:#fff;text-align:right;flex:1;}
        .source{color:#fff;text-align:left;flex:1;}
    }
    .d-hideinfo{
        position:absolute;
        width:400px;height:calc(100% + 28px);background:rgba(0,0,0,0.66);
        border-left:solid 1px #E1FF0F;padding:20px 20px;top:-20px;right:0px;
        .desc{
            b{color:#E1FF0F;font-size:16px;display:inline-block;margin-bottom:8px;}
            color:#fff;word-break:break-all;font-style:14px;
        }
        .img{
            margin-top:30px;
            b{color:#E1FF0F;font-size:16px;display:inline-block;margin-bottom:8px;}
            img{width:100%;}
        }
        .el-icon-d-arrow-left,.el-icon-d-arrow-right{
            position:absolute;top:50%;left:2px;color:#E1FF0F;cursor:pointer;
        }
        &.hide{
            width:10px;
            padding:20px 10px;
            .desc,.img{
                display:none;
            }
        }
    }
}
</style>
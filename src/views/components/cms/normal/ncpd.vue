<template>
<div class="cms-panel">
    <div class="cms-panel-title">
        <span class="spe-title-font title">{{title}}</span>
        <div class="bot-line">
            <span class="dot1"></span>
            <span class="dot-line"></span>
            <span class="dot2"></span>
        </div>
    </div>   
    <div class="cms-panel-content">
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
                        <span class="time">{{item.time}}</span><br/>
                        <span class="source">{{item.source}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>    
</template>
<script>
import { getContents, getDepts } from '@/api/cms'
export default {
    props: {
        data: {
            type: Array,
            default: []
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.cfx{clear:both;}
.cms-panel{
    padding:0 0 0 10px;
}
.cms-panel-title{
    position:relative;
    .bot-line{
        position:absolute;
        left:0px;bottom:-10px;width:100%;height:5px;
        display:flex;justify-content:space-around;
        .dot1{
            background:url('../../../../assets/cms/content/mid_icons.png') no-repeat -16px -229px;
            width:12px;height:6px;display:block;margin-right:3px;position:relative;top:-2px;
        }
        .dot-line{
            flex: 1;
            background:rgba(255,255,255,0.6);height:1px;margin-right:3px;
        }
        .dot2{
            background:url('../../../../assets/cms/content/mid_icons.png') no-repeat -586px -231px;
            width:2px;height:2px; display:block;
        }
    }
    background:url('../../../../assets/cms/content/icons.png') no-repeat -9px -11px;
    width:100%;height:26px;
    .title{
        font-size:22px;font-weight:bold;
        padding-left:20px;font-style:italic;
        float:left;
    }
    .menus{
        float:left;list-style:none;margin:8px 0 0 0;padding:0 0 0 15px;
        li{
            float:left;margin:0 13px 0 0;
            a{
                font-size:16px;
                color:#fff;font-style: italic;
                font-weight:bold;
            }
            &.sel a{
                color:#14BAF6;
            }
        }
    }
}
.lists{
    display: flex;margin:20px 0 0 0;
    flex-flow: column;width:100%;
    height:calc(100% - 18px);
    .li{
        padding:0 10px 0 0;
        margin-bottom: 10px;
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

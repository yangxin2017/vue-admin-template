<template>
    <div class="cms-panel">
        <div class="cms-panel-title">
            <span class="spe-title-font title">{{datas.title}}</span>
            <ul class="menus">
                <li :class="index==curIndex ? 'sel' : ''" v-for="(item, index) in datas.children" :key="index">
                    <a @click="curIndex=index">{{item.title}}</a>
                </li>
            </ul>
        </div>   
        <div class="cms-panel-content" :class="dir=='right' ? 'rg-dir' : ''">
            <div class="bg-color">
                <div class="bg-color-top"></div>
                <div class="bg-color-mid"></div>
                <div class="bg-color-bottom"></div>
            </div>
            <div class="inner" :style="{height: hei + 'px'}">
                <span class="it-1"></span>
                <span class="it-1 it1-2"></span>
                <div class="rg-in">
                    <span class="it-2"></span>
                    <span class="it-2 it2-2"></span>
                    <span class="it-3-in">
                        <span class="it-3-1"></span>
                        <span class="it-3-2"></span>
                    </span>
                </div>
                <div v-for="(item,index) in datas.children" :key="index">
                    <text-one v-if="item.type=='text'&&index==curIndex" :data="item.datas" />
                    <text-two v-if="item.type=='text2'&&index==curIndex" />
                    <pic-txt v-if="item.type=='pic'&&index==curIndex" :data="item.datas" />
                    <videos v-if="item.type=='video'&&index==curIndex" />
                    <sys v-if="item.type=='sys'&&index==curIndex" />
                    <rank v-if="item.type=='rank'&&index==curIndex" />
                </div>
                
            </div>
        </div>
    </div> 
</template>
<script>
var pictxt = () => import('@/views/components/cms/normal/pictext')
var textone = () => import('@/views/components/cms/normal/textone')
var texttwo = () => import('@/views/components/cms/normal/texttwo')
var videos = () => import('@/views/components/cms/normal/video')
var sys = () => import('@/views/components/cms/normal/sys')
var rank = () => import('@/views/components/cms/normal/rank')

export default {
    components: {
        'pic-txt': pictxt,
        'text-one': textone,
        'videos': videos,
        'sys': sys,
        'rank': rank,
        'text-two': texttwo
    },
    props: {
        type: {
            type: String,
            required: true
        },
        dir: {
            type: String,
            default: 'left'
        },
        hei: {
            type: String,
            default: '164'
        }
    },
    data(){
        return {
            curIndex: 0,
            datas: {
                title: '综合研究',
                children: [
                    {
                        title: '四个字的',
                        type: 'text',
                        datas: [
                            {id: 1, title: '标题内容标题标题标题标题标题', pic: '', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                            {id: 2, title: '标题内容标题标题标题标题标题', pic: '', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                            {id: 3, title: '标题内容标题标题标题标题标题', pic: '', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                        ]
                    },
                    {
                        title: '六个的的字的',
                        type: 'pic',
                        datas: [
                            {id: 4, title: '6标题内容标题标题标题标题标题', pic: 'https://images2015.cnblogs.com/blog/1122059/201704/1122059-20170414154111658-75834134.png', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                            {id: 5, title: '6标题内容标题标题标题标题标题', pic: 'https://images2015.cnblogs.com/blog/1122059/201704/1122059-20170414154111658-75834134.png', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                            {id: 6, title: '6标题内容标题标题标题标题标题', pic: 'https://images2015.cnblogs.com/blog/1122059/201704/1122059-20170414154111658-75834134.png', link: '#', video: '', source: '网络空间部队', time: '2019-10-10', clicks: 10},
                        ]
                    }
                ]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.cms-panel{
    padding:0 0 0 10px;
}
.cms-panel-title{
    background:url('../../../assets/cms/content/icons.png') no-repeat -9px -11px;
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
.cms-panel-content{
    padding:10px 25px 10px 10px;position: relative;

    .bg-color{
        width:100%;height:calc(100% - 22px);
        position:absolute;top:11px;right:5px;
        .bg-color-top{
            position:absolute;left:0;top:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right 0;
            width:100%;height:30px;
        }
        .bg-color-mid{
            background:rgba(0,0,0,0.4);
            position:absolute;top:30px;width:100%;height:calc(100% - 60px);left:0;
        }
        .bg-color-bottom{
            position:absolute;left:0;bottom:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right -132px;
            width:100%;height:30px;
        }
    }

    .inner{    
        position:relative;
        border-top:solid 1px rgba(255,255,255,0.3);
        border-bottom:solid 1px rgba(255,255,255,0.3);
        height:164px;

        .it-1{
            background:url('../../../assets/cms/content/icons.png') no-repeat -9px -52px;
            width:10px;height:2px;position:absolute;left:0px;top:-1px;
            &.it1-2{
                bottom:-1px;top:auto;
            }
        }
        .rg-in{
            position:absolute;
            top:-1px;right:-25px;height:100%;width:25px;
            .it-2{
                background:url('../../../assets/cms/content/icons.png') no-repeat -9px -123px;
                width:19px;height:16px;position:absolute;left:0px;top:0px;
                &.it2-2{
                    background:url('../../../assets/cms/content/icons.png') no-repeat -9px -92px;
                    bottom:-2px;top:auto;height:19px;
                }
            }
            .it-3-in{
                position:absolute;height:calc(100% - 34px);
                width:10px;background:url('../../../assets/cms/content/bar_bg.png') repeat-y 0 0;top:16px;
                right:3px;
                .it-3-1{
                    background:url('../../../assets/cms/content/icons.png') no-repeat -10px -151px;
                    top:-5px;right:0px;width:10px;height:8px;position:absolute;
                }
                .it-3-2{
                    background:url('../../../assets/cms/content/icons.png') no-repeat -10px -287px;
                    bottom:-5px;right:0px;width:10px;height:8px;position:absolute;
                }
            }
        }
    }

    &.rg-dir{
        .rg-in{
            left:-28px;top:1px;transform:rotate(180deg);
        }
        .inner{
            left: 16px;
            .it-1{
                left:auto;right:0px;transform:rotate(180deg);
            }
        }
        .bg-color{
            right:-4px;
            .bg-color-top{
                transform:rotateY(180deg);
            }
            .bg-color-mid{
            }
            .bg-color-bottom{
                transform:rotateY(180deg);
            }
        }
    }
}
</style>

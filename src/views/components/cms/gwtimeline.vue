<template>
<div class="cms-panel" :style="{height: hei + 'px'}">
    <div class="cms-panel-title">
        <span class="spe-title-font title">{{datas.title}}</span>
        <ul class="menus">
            <li :class="{sel: item.id==curCid}" v-for="item in datas.children" :key="item.id">
                <a @click="changeTab(item)">{{item.title}}</a>
            </li>
        </ul>
        <div class="bot-line">
            <span class="dot1"></span>
            <span class="dot-line"></span>
            <span class="dot2"></span>
        </div>
    </div>   
    <div class="cms-panel-content">
        <div class="bg-timeline">
        <span class="lb" @click="scrollLeft()" v-if="showLeft"></span>
        <span class="rg" @click="scrollRight()" v-if="showRight"></span>
        <div class="con-wap" ref="wrapscon" style="width:888px;overflow:hidden;margin-left:30px;">
            
            <div class="con" style="width:1828px;">
                    <div class="md" v-for="(item) in lists" :key="item.id">

                        <div class="one-data">
                            <div class="times">
                                <p class="date">
                                    <span class="day">{{item[0].time.split('-')[2]}}</span>
                                    <img src="../../../assets/cms/gw/xx.png" />
                                    <span class="month">{{item[0].time.split('-')[1]}}</span>
                                </p>
                                <span class="year">{{item[0].time.split('-')[0]}}</span>
                            </div>
                            <div class="news">
                                <span class="fk"></span>
                                <p>
                                    <router-link :to="item[0].link"><a>{{item[0].title}}</a>
                                    </router-link>
                                </p>
                            </div>
                            <span class="circle"></span>
                        </div>

                        <div class="one-data second" v-if="item[1]">
                            <div class="times">
                                <p class="date">
                                    <span class="day">{{item[1].time.split('-')[2]}}</span>
                                    <img src="../../../assets/cms/gw/xx.png" />
                                    <span class="month">{{item[1].time.split('-')[1]}}</span>
                                </p>
                                <span class="year">{{item[1].time.split('-')[0]}}</span>
                            </div>
                            <div class="news">
                                <span class="fk"></span>
                                <p><router-link :to="item[1].link"><a>{{item[1].title}}</a></router-link></p>
                            </div>
                            <span class="circle"></span>
                        </div>
                    
                </div>
                
            </div>
        </div>
    </div>


    </div>
</div>   
</template>
<script>

import { getContents, getCategorys } from '@/api/cms'
import { NewsModel } from '@/model/cms/news'

export default {
    props: {
        cname: {
            type: String,
            default: ''
        },
        cid: {
            type: String,
            default: '-1'
        },
        hei: {
            type: String,
            default: '350'
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
            datas: {
                title: '',
                children: [
                ]
            },
            curCid: -1,
            lists: [],
            showLeft: false,
            showRight: false
        }
    },
    methods: {
        scrollRight(){
            let wl = 0;
            this.showLeft = false
            this.showRight = false

            let inter = setInterval(() => {
                wl += 6
                this.$refs.wrapscon.scrollLeft = wl
                if(wl > 914){
                    clearInterval(inter)
                    this.showLeft = true
                }
            }, 1)
        },
        scrollLeft(){
            let wl = 914;
            this.showLeft = false
            this.showRight = false

            let inter = setInterval(() => {
                wl -= 6
                this.$refs.wrapscon.scrollLeft = wl
                if(wl <= 0){
                    clearInterval(inter)
                    this.showRight = true
                }
            }, 1)
        },
        changeTab(item){
            this.curCid = item.id
            this.curType = item.type
            ///////
            this.setContent()
        },
        initCates(){
            let relative = this.$store.state.app.cms_gw
            let timeline = relative.other.timeline

            getCategorys({parentId: this.cid}).then(res => {
                let chs  = timeline.children
                //
                this.curCid = res.data[0].id

                for(let d of res.data){
                    let tmp = {
                        title: d.name, 
                        id: d.id,
                    }
                    this.datas.children.push(tmp)
                }
                ///
                this.setContent()
            })
        },
        setContent(){
            let isGuanwang = this.isgw == 'true' ? true : false
            let lydw = this.lydw != "-1" ? this.lydw : undefined

            getContents({cid: this.curCid, pagesize: 12, isgw: isGuanwang, lydw: lydw}).then(res => {
                let arr = [];
                for(let i=0;i<res.data.length;i+=2){
                    let c1 = res.data[i]
                    let c2 = null
                    let t1 = new NewsModel(c1)
                    let t2 = null

                    if(i + 1 < res.data.length){
                        c2 = res.data[i + 1]
                        t2 = new NewsModel(c2)
                    }
                    /////////////////////////////
                    arr.push([t1, t2])
                }
                this.lists = arr
                if(res.total > 6){
                    this.showRight = true
                    this.showLeft = false
                    this.$refs.wrapscon.scrollLeft = 0
                }
            })
        },
        initScale(){

        }
    },
    mounted(){
        this.datas.title = this.cname
        this.initCates()
        //////////////////////
    }
}
</script>
<style lang="scss" scoped>
.cms-panel{
    padding:0 0 0 10px;
}
.cms-panel-content{
    position:relative;
    height:calc(100% - 30px);
    overflow: hidden;clear:both;
}
.map1{
    background:url('../../../assets/cms/content/map1.png') no-repeat 0 0;
    width:409px;height:301px;float:left;margin:10px 0 0 100px;position:absolute;
    top:50%;margin-top:-150px;
    .txt{
        position:absolute;text-align:center;line-height:20px;width:62px;height:20px;
        font-size:12px;color:#fff;font-weight:bold;cursor:pointer;
        &.sel{
            color: #13B8F6;
        }
    }
    .zhongyin{left:117px;top:65px;}
    .bohai{left:243px;top:47px;}
    .chaoxian{left:317px;top:43px;}
    .donghai{left:329px;top:100px;}
    .huanghai{left:237px;top:108px;}
    .nanhai{left:213px;top:143px;}
}
.map2{
    background:url('../../../assets/cms/content/map2.png') no-repeat 0 0;
    width:582px;height:289px;float:left;margin:26px 0 0 32px;position:absolute;
    top:50%;margin-top:-140px;left:0;
    .txt{
        position:absolute;text-align:center;line-height:20px;width:62px;height:20px;
        font-size:12px;color:#fff;font-weight:bold;cursor:pointer;
        &.sel{
            color: #13B8F6;
        }
    }
    .meiguo{left:73px;top:71px;}
    .lamei{left:152px;top:175px;}
    .ouzhou{left:275px;top:34px;}
    .eluosi{left:388px;top:22px;}
    .zhongdong{left:379px;top:105px;}
    .feizhou{left:295px;top:148px;}
}
.map-data{
    float:right;width:36%;
    .map-data-title{
        background:url('../../../assets/cms/content/maptitle.png') no-repeat 0 0;
        width:409px;height:74px;margin:15px 20px 0 0;
        .spe-font{
            margin:22px 0 0 116px;font-size:28px;display:inline-block;
        }
    }
    .data-lists{
        list-style:none;margin:0;padding:0;
        li{
            line-height:25px;margin:2px 0 3px 0;
            .sjx{
                background:url('../../../assets/cms/content/icons.png') no-repeat -11px -67px;
                width:6px;height:6px;display:inline-block;
            }
            a{
                font-size:14px;color:#fff;margin-left:4px;
                &:hover{
                    text-decoration:underline;
                }
            }
            .data-info{
                display:flex;
                .time{
                    flex:1;color:#8EA413;margin:0 0 0 11px;
                }
                .source{
                    flex:1;color:#8EA413;text-align:right;
                    margin:0 24px 0 0;
                }
            }
        }
    }
}
.cms-panel-title{
    position:relative;
    .bot-line{
        position:absolute;
        left:0px;bottom:-10px;width:100%;height:5px;
        display:flex;justify-content:space-around;
        .dot1{
            background:url('../../../assets/cms/content/mid_icons.png') no-repeat -16px -229px;
            width:12px;height:6px;display:block;margin-right:3px;position:relative;top:-2px;
        }
        .dot-line{
            flex: 1;
            background:rgba(255,255,255,0.6);height:1px;margin-right:3px;
        }
        .dot2{
            background:url('../../../assets/cms/content/mid_icons.png') no-repeat -586px -231px;
            width:2px;height:2px; display:block;
        }
    }
    background:url('../../../assets/cms/content/icons.png') no-repeat -9px -11px;
    width:100%;height:26px;
    .title{
        font-size:22px;font-weight:bold;
        padding-left:20px;font-style:italic;
        float:left;
    }
    .menus{
        float:left;list-style:none;margin:5px 0 0 0;padding:0 0 0 15px;
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



.bg-timeline{background:url(../../../assets/cms/gw/tlbg.png) no-repeat 0 0;width:950px;height:299px;position:absolute;left:17px;top:38px;}
.bg-timeline .lb{position:absolute;width:16px;height:16px;left:9px;top:147px;cursor:pointer;}
.bg-timeline .rg{position:absolute;width:16px;height:16px;left:914px;top:147px;cursor:pointer;}
.bg-timeline .con{width:888px;height:240px;overflow:hidden;margin:44px 0 0 26px;}
.bg-timeline .con .md{float:left;width:295px;}
.bg-timeline .con .md .one-data{position:relative;top:-4px;height:110px;width:100%;}
.bg-timeline .con .md .one-data .times{float:left;width:64px;position:relative;height:100%;}
.bg-timeline .con .md .one-data .times .date .day{color:#fff;font-size:30px;font-family:BE;position:absolute;top:0px;left:-5px;letter-spacing:1px;}
.bg-timeline .con .md .one-data .times .date img{position:absolute;top:15px;left:19px}
.bg-timeline .con .md .one-data .times .date .month{color:#fff;font-size:20px;font-family:BE;position:absolute;top:30px;left:30px;letter-spacing:1px;}
.bg-timeline .con .md .one-data .times .year{color:#fff;font-size:20px;font-family:BE;position:absolute;top:76px;left:25px;letter-spacing:1px;}
.bg-timeline .con .md .one-data .circle{position:absolute;bottom:-13px;left:57px;width:10px;height:10px;border:solid 2px #FFFF01;border-radius:10px;}
.bg-timeline .con .md .one-data .news{margin-left:64px;border-left:solid 1px #fff;padding:0 0 0 8px;height:100%;}
.bg-timeline .con .md .one-data .news .fk{display:inline-block;width:10px;height:10px;background:#fff;vertical-align:top;position:relative;top:3px;}
.bg-timeline .con .md .one-data .news p{display:inline-block;width:102px;line-height:20px;color:#fff;font-size:16px;margin:0;}
.bg-timeline .con .md .one-data .news p a{color:#fff;font-size:16px;text-decoration:none;}
.bg-timeline .con .md .one-data .news p a:hover{text-decoration:underline;}

.bg-timeline .con .md .one-data.second .circle{top:-6px;}
.bg-timeline .con .md .one-data.second{padding-top:9px;margin-left:50px;top:1px;}
.bg-timeline .con .md .one-data.second .times{position:absolute;top:20px;}
.bg-timeline .con .md .one-data.second .news{padding-top:11px;}
</style>
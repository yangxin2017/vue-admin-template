<template>
    <div class="cms-panel" :style="{height: hei + 'px'}">
        <div class="cms-panel-title" ref="titledom">
            <span class="spe-title-font title">{{datas.title}}</span>
            <div class="menu-con">
                <img :class="{revers: scrollDir=='left'}" @click="scrollContent" v-if="showScrollBtn" class="next" src="../../../assets/cms/content/next.png" alt="" />
                <div ref="wrapperdom" class="wrapper" :style="{width: wrapperwidth + 'px'}">
                    <ul class="menus" v-if="datas.children.length > 1">
                        <li :class="index==curIndex ? 'sel' : ''" v-for="(item, index) in datas.children" :key="index">
                            <a @click="curIndex=index">{{item.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>   
        <div class="cms-panel-content" :class="dir=='right' ? 'rg-dir' : ''">
            <div class="bg-color">
                <div class="bg-color-top"><div class="bd"></div></div>
                <div class="bg-color-mid"></div>
                <div class="bg-color-bottom"><div class="bd"></div></div>
            </div>
            <div class="inner" style="height:100%">
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
                <div class="com-container" v-if="spec == null" style="height:100%;">
                    <div v-for="(item,index) in datas.children" :key="index" style="height:100%;" :class="{'cms-hide': index!=curIndex}">
                        <text-one v-if="item.type=='text'" :isgw="isgw" :count="item.count" :cid="item.id" :lydw="lydw" />
                        <text-two v-if="item.type=='text2'" :count="item.count" :cid="item.id" :isgw="isgw" :lydw="lydw" />
                        <pic-txt v-if="item.type=='pic'" :count="item.count" :cid="item.id" :isgw="isgw" :lydw="lydw" />
                        <videos v-if="item.type=='video'" :count="item.count" :cid="item.id" />
                        <sys v-if="item.type=='sys'" :percount="percount" :count="item.count" :cid="item.id" />
                        <text-detail v-if="item.type=='detail'" :count="item.count" :cid="item.id" />
                        
                    </div>
                </div>
                <div v-else>
                    <rank v-if="spec=='rank'" :count="count" />
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
var textdetail = () => import('@/views/components/cms/normal/textdetail')


import { getCategorys } from '@/api/cms'

export default {
    components: {
        'pic-txt': pictxt,
        'text-one': textone,
        'videos': videos,
        'sys': sys,
        'rank': rank,
        'text-two': texttwo,
        'text-detail': textdetail
    },
    props: {
        cid: {
            type: String,
            default: "1"
        },
        cname: {
            type: String,
            default: ''
        },
        pkey: {
            type: String,
            default: null
        },

        dir: {
            type: String,
            default: 'left'
        },
        hei: {
            type: String,
            default: '212'
        },
        spec: {
            type: String,
            default: null
        },
        count: {
            type: Number,
            default: 3
        },
        percount: {
            type: Number,
            default: 5
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
    methods: {
        initScroll(){
            setTimeout(()=>{
                let w = this.$refs.titledom.clientWidth
                let w0 = this.$refs.titledom.children[0].clientWidth
                this.wrapperwidth = w - w0 - 70
                /////
                let w1 = this.$refs.wrapperdom.offsetWidth
                if(this.$refs.wrapperdom.children.length > 0){
                    let childs = this.$refs.wrapperdom.children[0].children
                    let w2 = 0
                    for(let c of childs){
                        w2 += c.clientWidth
                    }
                    
                    w2 = w2 - 18
                    if(w1 < w2){
                        this.showScrollBtn = true
                        this.wlwidth = w2 - w1
                    }else{
                        this.showScrollBtn = false
                    }
                }
            }, 1000)
        },
        scrollContent(){
            if(this.scrollDir == 'right'){
                this.scrollDir = 'left'
                let wl = 0;
                let inter = setInterval(() => {
                    wl += 3
                    this.$refs.wrapperdom.scrollLeft = wl
                    if(wl > this.wlwidth){
                        clearInterval(inter)
                    }
                }, 1)
            }else{
                this.scrollDir = 'right'
                let wl = this.wlwidth
                let inter = setInterval(() => {
                    wl -= 3
                    this.$refs.wrapperdom.scrollLeft = wl
                    if(wl < 0){
                        clearInterval(inter)
                    }
                }, 1)
            }
        }
    },
    mounted(){
        if(this.spec == null) {
            getCategorys({parentId: this.cid}).then(res => {
                if(this.pkey){
                    let chs  = []
                    if(this.isgw == 'true'){
                        chs = this.$store.state.app.cms_gw[this.pkey].children
                    }else{
                        chs = this.$store.state.app.cms[this.pkey].children
                    }

                    for(let d of res.data){
                        if(chs['m_' + d.id]){
                            d.type = chs['m_' + d.id].type;
                            d.count = chs['m_' + d.id].count;
                            let tmp = {
                                title: d.name, 
                                type: d.type,
                                id: d.id,
                                datas: [],
                                count: d.count
                            }
                            this.datas.children.push(tmp)
                        }
                    }
                }
                this.initScroll()
            })
        }
        
        this.datas.title = this.cname
    },
    data(){
        return {
            curIndex: 0,
            datas: {
                title: '综合研究',
                children: [
                ]
            },
            wrapperwidth: 200,
            showScrollBtn: false,
            scrollDir: 'right',
            wlwidth: 500
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
    width:100%;height:26px;display:flex;
    .title{
        font-size:22px;font-weight:bold;
        padding-left:20px;font-style:italic;
        float:left;white-space: nowrap;margin-right:5px;
    }
    .menu-con{
        float:left;flex:1;
    }
    .wrapper{
        overflow:hidden;width:calc(100% - 50px);
    }
    .menus{
        list-style:none;margin:0px 0 0 0;padding:6px 0 0 15px;white-space:nowrap;
        li{
            margin:0 13px 0 0;display:inline-block;
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
    .next{
        cursor:pointer;
        float:right;margin-top:6px;margin-right:20px;
        &.revers{
            transform:rotate(180deg);
        }
    }
}
.cms-panel-content{
    padding:10px 25px 10px 10px;position: relative;
    height:calc(100% - 25px);

    .bg-color{
        width:calc(100% - 14px);height:calc(100% - 22px);
        position:absolute;top:11px;right:6px;
        .bg-color-top{
            position:absolute;left:0;top:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right 0;
            width:100%;height:30px;
            .bd{
                background:rgba(0,0,0,0.4);
                position:absolute;top:0px;width:calc(100% - 666px);height:30px;left:0%;
            }
        }
        .bg-color-mid{
            background:rgba(0,0,0,0.4);
            position:absolute;top:30px;width:100%;height:calc(100% - 60px);left:0;
        }
        .bg-color-bottom{
            position:absolute;left:0;bottom:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right -132px;
            width:100%;height:30px;
            .bd{
                background:rgba(0,0,0,0.4);
                position:absolute;top:0px;width:calc(100% - 666px);height:30px;left:0%;
            }
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
            right:8px;
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

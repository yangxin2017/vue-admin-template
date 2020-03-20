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
        <div class="map1" v-if="curType=='hai'">
            <span @click="changeHAI(item.id.value, item.text)" v-for="item in hais" :key="item.id.value" :class="[item.id.value, 'txt', curHai==item.id.value ? 'sel' : '']">{{item.text}}</span>
        </div>
        <div ref="mapdom" class="map2" v-if="curType=='guo'">
            <span @click="changeGJ(item.id.value, item.text)" v-for="item in guos" :key="item.id.value" :class="[item.id.value, 'txt', curGj==item.id.value ? 'sel' : '']">{{item.text}}</span>
        </div>
        <div class="map-data">
            <div class="map-data-title">
                <span class="spe-font">{{showtext}}</span>
            </div>
            <ul class="data-lists">
                <li v-for="(item,index) in lists" :key="index">
                    <router-link :to="item.link">
                        <span class="sjx"></span><a >{{item.title}}</a>
                    </router-link>
                    <div class="data-info">
                        <span class="time">{{item.time}}</span>
                        <span class="source">{{item.source}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>    
</template>
<script>
import { getContents, getCategorys, getGuoHais } from '@/api/cms'
import { NewsModel } from '@/model/cms/news'
import { getCategoryByCode } from '@/utils/cms'

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
            curGj: 'meiguo',
            curHai: 'bohai',
            curType: 'guo',
            showtext: '美国',
            guos: [],
            hais: [],
            lists: []
        }
    },
    methods: {
        changeTab(item){
            this.curCid = item.id
            this.curType = item.type
            ////
            this.curGj = "meiguo"
            this.curHai = "bohai"
            let key = item.type == 'guo' ? this.curGj : this.curHai
            this.showtext = item.datas[key].text

            this.setContent()
        },
        changeHAI(hai, text){
            this.curHai = hai;
            this.showtext = text;

            this.setContent();
        },
        changeGJ(gj, text){
            this.curGj = gj
            this.showtext = text;

            this.setContent();
        },
        setContent(){
            let obj = null;
            for(let c of this.datas.children){
                if(c.id == this.curCid){
                    obj = c;
                    break;
                }
            }
            let dd = null;
            this.lists = []

            if(this.curType == 'guo'){
                dd = obj.datas[this.curGj]
            }else{
                dd = obj.datas[this.curHai]
            }
            if(!dd || dd.lists.length == 0){
                getContents({cid: this.curCid, gjmc: this.curType=='guo' ? this.curGj : this.curHai, pagesize: 5}).then(res => {
                    let arr = [];
                    for(let c of res.data){
                        let tmp = new NewsModel(c)
                        arr.push(tmp)
                    }
                    dd.lists = arr
                    this.lists = arr
                })
            }else{
                this.lists = dd.lists
            }
        },
        async getBHS(){
            
            let allCategorys = this.$store.state.cms.categorys

            let gs = await getGuoHais({});
            this.guos = gs.data.guo
            this.hais = gs.data.hai
            //
            let relative = this.$store.state.app.cms
            let zydx = relative.other.zydx
            //////////////////////////////
            let cates = getCategoryByCode(allCategorys, zydx.code).children
            //getCategorys({parentId: this.cid}).then(res => {
            let chs = zydx.children
            //
            this.curCid = cates[0].id

            for(let d of cates){
                if(chs['m_' + d.code]){
                    let type = chs['m_' + d.code].type
                    let tmp = {
                        title: d.name, 
                        id: d.id,
                        type: type,
                        datas: {}
                    }
                    for(let d of gs.data[type]){
                        tmp.datas[d.id.value] = { text: d.text, lists: [] }
                    }
                    
                    this.datas.children.push(tmp)
                }
            }
            console.log(this.datas)
            ///
            this.setContent()
            //})
        }
    },
    mounted(){
        this.datas.title = this.cname

        this.getBHS()
        let ph = this.$refs.mapdom.parentElement.clientHeight - 20
        let ch = this.$refs.mapdom.clientHeight
        let scale = ph / ch
        this.$refs.mapdom.style.transform = `scale(${scale})`
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
</style>

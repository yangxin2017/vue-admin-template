<template>
<div class="cms-left-con">
    <div class="cms-d-title">
        <span class="cms-select">
            <select v-model="fcaid" @change="changesel">
                <option v-for="item in cates" v-if="item.show" :value="item.id" :key="item.id">{{item.name}}</option>
            </select>
        </span>
    </div>
    <div class="cms-d-menu">
        <ul class="menus">
            <li v-for="item in childrens" @click="changeli(item)" :key="item.id" :class="{sel: item.id==caid}">{{item.name}}</li>
        </ul>
    </div>
    <div class="cms-d-search">
        <div class="inp-container">
            <span class="lf"></span>
            <input type="text" v-model="keyword" />
            <span class="rg"></span>
        </div>
        <div class="inp-times">
            <el-date-picker popper-class="inp" style="margin:0 0 0 15px;"
                v-model="stime" value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <span class="line"></span>
            <el-date-picker popper-class="inp"
                v-model="etime" value-format="yyyy-MM-dd HH:mm:ss"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <input @click="search" type="button" value="确定" class="btnsearch" />
        </div>
    </div>
    <div class="cms-d-lists" v-if="contents.length>0">
        <div class="cms-d-mod" v-for="item in contents" :key="item.id">
            <div class="line-title">
                <span class="sjx"></span>
                <a @click="groute(item)" class="tl" :class="{sel: item.id==contentId}">{{item.title}}</a>
                <span class="clks">浏览量：{{item.clicks}}</span>
            </div>
            <div class="line-info">
                <span class="time">{{item.time}}</span>
                <span class="source">{{item.source}}</span>
            </div>
        </div>
    </div>
    <div class="cms-d-lists" style="color:#fff;" v-if="contents.length<=0">
        没有查询到数据。
    </div>
    <div class="cms-d-pages">
        <el-pagination
            background
            @current-change="pagechange"
            layout="prev, pager, next"
            :page-size="pagesize"
            :total="total">
        </el-pagination>
    </div>
</div>    
</template>
<script>
import { getAllCategorys, getSearchs, getContents } from '@/api/cms'
import { NewsModel } from '@/model/cms/news'

export default {
    props: {
        cid: {
            type: Number,
            default: -1
        },
        contentId: {
            type: Number,
            default: -1
        }
    },
    data(){
        return {
            stime: '',
            etime: '',
            cates: [],
            childrens: [],
            fcaid: -1,
            caid: -1,
            keyword: '',
            contents: [],
            total: 10,
            pagesize: 13,
            pageindex: 1
        };
    },
    methods: {
        groute(item){
            // window.location.href = "/web/#/cms/detail?id=" + item.id
            // window.location.reload();
            // window.open("/web/#/cms/detail?id=" + item.id, "_top")
            this.$emit('changeContent', item.id)
        },
        search(){
            this.setcontentlist()
        },
        setchildren(){
            let arr = [];
            for(let c of this.cates){
                if(c.id == this.fcaid){
                    arr = c.children
                    break
                }
            }
            this.childrens = [{id: -1, name: '全部'}, ...arr];
        },
        changesel(){
            this.setchildren()
            this.caid = -1
            this.pageindex = 1
            this.setcontentlist()
        },
        changeli(item){
            this.caid = item.id
            this.pageindex = 1
            this.setcontentlist()
        },
        pagechange(cpage){
            this.pageindex = cpage
            this.setcontentlist()
        },
        setcontentlist(){
            let cid = this.fcaid
            if(this.caid != -1){
                cid = this.caid
            }

            let st = this.stime ? this.stime : undefined
            let et = this.etime ? this.etime : undefined

            getContents({cid: cid, stime: st, etime: et, title: this.keyword, containChild: true, pageindex: this.pageindex, pagesize: this.pagesize}).then(res => {
                this.total = res.total
                let arr = []
                for(let c of res.data){
                    let tmp = new NewsModel(c)
                    arr.push(tmp)
                }
                this.contents = arr
            })
        },
        setFcaidByCid(){
            for(let f of this.cates){
                for(let c of f.children){
                    if(c.id == this.caid){
                        this.fcaid = f.id;
                        break
                    }
                }
            }
        }
    },
    mounted(){
        this.pagesize = this.$store.state.app.cms.other.meta.count.detailleft
        this.caid = this.cid
        getAllCategorys({}).then(res => {
            this.cates = res.data
            // this.fcaid = res.data[0].id
            ///////
            this.setFcaidByCid();
            this.setchildren()
            ///////
            this.setcontentlist()
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-left-con{
    height:calc(100% - 73px);
}
.cms-d-lists{
    padding:0 25px;margin:20px 0 0 0;
    height:calc(100% - 216px);
    .cms-d-mod{
        margin:0 0 20px 0;
        .line-title{
            display:flex;margin:0 0 5px 0;
            .sjx{
                background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
                width:6px;height:6px;float:left;position:relative;top:4px;
            }
            .tl{
                color:#fff;font-size:14px;margin:0 0 0 10px;flex:1;
                height:35px;
                &:hover{text-decoration:underline;}
                &.sel{
                    color:#8EA413;font-weight: bold;
                }
            }
            .clks{
                width:100px;color:#fff;font-size:12px;text-align:right;
            }
        }
        .line-info{
            display:flex;
            .time{color:#8EA413;flex:1;font-size:12px;margin-left:16px;}
            .source{color:#8EA413;flex:1;text-align:right;font-size:12px;}
        }
    }
}

.cms-d-search{
    padding:20px 15px 0 15px;
    .inp-container{
        display:flex;
        .lf{
            background:url('../../../../assets/cms/detail/icons_detail.png') no-repeat -11px -41px;
            width:14px;height:41px;
        }
        input{
            height:41px;width:100%;color:#fff;outline:none;
            border:none;background:url('../../../../assets/cms/detail/searbg.png') repeat-x 0 0;
        }
        .rg{
            background:url('../../../../assets/cms/detail/icons_detail.png') no-repeat -54px -41px;
            width:45px;height:41px;
        }
    }
    .inp-times{
        margin:15px 0 0 0;
        .btnsearch{
            width:75px;height:30px;border:none;border-radius:3px;
            background:#CBA452;cursor:pointer;
            font-size:14px;color:#fff;text-align:center;
            line-height:30px;margin:0 0 0 15px;
        }
    }
}

.cms-d-title{
    background:url('../../../../assets/cms/detail/headwg.png') repeat-x 0 0;
    width:100%;height:58px;border-bottom:solid 2px #5C6C0D;padding:12px 0 0 20px;
    select{font-weight:bold;}
}
.cms-d-menu{
    height:40px;border-bottom:dotted 2px #5C6C0D;
    .menus{
        list-style:none;padding:0px 20px 0 5px;margin:0;
        position:relative;top:16px;width:100%;overflow:auto;
        white-space:nowrap;
        li{
            margin:0 0px 0 20px;padding:0 5px 5px 5px;display:inline-block;
            color:#fff;font-size:14px;cursor:pointer;
            &.sel,&:hover{
                border-bottom:solid 3px #E1FF0F;font-weight:bold;
            }
        }
    }
}
</style>

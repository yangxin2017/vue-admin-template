<template>
    <div class="cms-search-container">
        <div class="menus">
            <a @click="curCid=item.id" v-for="item in cates" :key="item.id" :class="{sel: item.id == curCid}" class="menu-cate">
                {{item.name}}<span class="icon-bot"></span>
            </a>
        </div>
        <div class="search-con">
            <div class="inpsearch">
                <input class="inp" type="text" v-model="keyword" placeholder="请输入搜索内容" />
                <div class="btn" @click="searchContent">
                    <span class="icon-search"></span>
                </div>
            </div>
            <a class="btn-change">普通模式</a>
        </div>
        <div class="hots">
            <a class="word" @click="searchHots(item.name)" v-for="item in hots" :key="item.id"><span class="dot"></span>{{item.name}}</a>
        </div>
        <div class="conditions">
            <div class="cons">
                <div class="lines-one">
                    <span class="txt">时间</span>
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
                    </div>
                </div>
                <div class="lines-one" style="margin-top:15px;">
                    <span class="txt">单位</span>
                    <ul class="depts">
                        <li @click="curDid=-1" :class="{sel: curDid==-1}">全部</li>
                        <li @click="curDid=item.id" v-for="item in depts" :key="item.id" :class="{sel: item.id==curDid}">{{item.name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { getWords, getCategorys, getDepts } from '@/api/cms'

export default {
    data(){
        return {
            cates: [],
            stime: '',
            etime: '',
            curCid: -1,
            curDid: -1,
            keyword: '',
            depts: [],
            pageindex: 1,
            pagesize: 10,
            //
            hots: []
        }
    },
    methods: {
        searchContent(){
            this.$emit("searchContent", {
                stime: this.stime ? this.stime : undefined,
                etime: this.etime ? this.etime : undefined, 
                word: this.keyword ? this.keyword : undefined, 
                cid: this.curCid != -1 ? this.curCid : undefined, 
                lydw: this.curDid != -1 ? this.curDid : undefined,
                pageindex: this.pageindex,
                pagesize: this.pagesize
            })
        },
        searchHots(text){
            this.keyword = text
            this.searchContent();
        }
    },
    mounted(){
        getCategorys({}).then(res => {
            let tmp = [{name: '全部', id: -1}, ...res.data]
            this.cates = tmp
        })
        getWords({pagesize: 10}).then(res => {
            this.hots = res.data
        })
        getDepts({}).then(res => {
            this.depts = res.data
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-search-container{
    margin:25px 0 0 0;
    
    .conditions{
        display:flex;margin:15px 0 0 0;
        
        .cons{
            flex:1;margin:0 15px 0 0;
            .lines-one{
                display:flex;
                .txt{
                    width:60px;font-size:14px;color:#fff;margin:7px 0 0 0;
                }
                .depts{
                    flex:1;margin:5px 0 0 9px;flex-wrap:wrap;
                    list-style:none;padding:0;display:flex;
                    li{
                        font-size:14px;color:#fff;cursor:pointer;margin:0 20px 4px 0;
                        &:hover, &.sel{
                            text-decoration:underline;
                            color:#AF8734;font-weight:bold;
                        }
                    }
                }
            }
            
        }
    }

    .menus{
        display:flex;
        .menu-cate{
            margin:0 10px 0 0;padding-bottom:5px;width:auto;padding:0 5px;
            font-size:14px;font-weight:bold;color:#fff;text-align:center;
            .icon-bot{
                background:url('../../../../assets/cms/search/menubot.png') no-repeat center center;
                width:100%;height:10px;display:none;
            }
            &:hover .icon-bot,&.sel .icon-bot{
                display:inline-block;
            }
        }
        .menu-more{
            width:90px;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;
            .icon-more{
                background:url('../../../../assets/cms/search/icons_search.png') no-repeat -25px -36px;
                width:13px;height:14px;display:inline-block;vertical-align:middle;margin:0 0 0 9px;
            }
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .hots{
        margin:10px 0;
        display:flex;
        .word{
            .dot{display:inline-block;width:6px;height:6px;border-radius:6px;background:#E9C863;margin:0 3px 0 0;position:relative;top:-2px;}
            font-size:14px;color:#fff;margin-right:20px;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .search-con{
        display:flex;
        .btn-change{
            width:103px;height:42px;border-radius:10px;
            background:#CBA452;text-align:center;line-height:42px;
            display:inline-block;cursor:pointer;
            font-size:16px;color:#fff;font-weight:bold;
            &:hover{
                background:#AF8734;
            }
            margin:0 100px 0 40px;
        }
    }
    .inpsearch{
        width:100%;height:40px;background:#fff;border-radius:5px;display:flex;
        .btn{
            width:84px;height:40px;background:#CBA452;cursor:pointer;border-radius:0 5px 5px 0;text-align:center;
            line-height:40px;padding-top:5px;
            &:hover{
                background:#66522F;
            }
            .icon-search{
                background:url('../../../../assets/cms/search/icons_search.png') no-repeat -10px -70px;
                width:28px;height:28px;display:inline-block;
            }
        }
        .inp{
            flex:1;height:38px;font-size:16px;color:#333;padding:0 15px;border-radius:5px 0 0 5px;border:none;
        }
    }
}
</style>

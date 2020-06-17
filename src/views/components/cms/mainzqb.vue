<template>
    <div class="cms-panel-content rg-dir" :style="{height: hei + 'px'}">
        <div class="bg-color">
            <div class="bg-color-top"><div class="bd"></div></div>
            <div class="bg-color-mid"></div>
            <div class="bg-color-bottom"><div class="bd"></div></div>
        </div>
        <div class="inner">
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
            <div class="lists cms-lbt">
                <table class="table-list">
                    <thead>
                        <tr>
                            <th width="30%">
                                <span class="zqb-select">
                                    <select @change="changeDept($event)">
                                        <option v-for="item in data" :key="item.id" :value="item.id">{{item.name}}</option>
                                    </select>
                                </span>
                            </th>
                            <th width="20%">席位</th>
                            <th width="20%">姓名</th>
                            <th width="30%">电话</th> 
                        </tr>
                    </thead>
                </table>
                <el-carousel trigger="click" arrow="hover">
                    <el-carousel-item v-for="(item, index) in curTable" :key="index">
                        <table class="table-list">
                            <tbody>
                                <tr v-for="(inItem, indexJ) in item" :key="indexJ">
                                    <td width="30%">{{curDept.name}}</td>
                                    <td width="20%">{{inItem.xw}}</td>
                                    <td width="20%">{{inItem.xm}}</td>
                                    <td width="30%">{{inItem.dh}}</td>
                                </tr>
                            </tbody>
                        </table>
                    </el-carousel-item>

                </el-carousel>
                
            </div>
        </div>

    </div>
</template>
<script>
import { getContents, getDepts } from '@/api/cms'
import { Base64 } from 'js-base64';
export default {
    props: {
        cid: {
            type: Number,
            default: -1
        },
        hei: {
            type: Number,
            default: 150
        },
        count: {
            type: Number,
            default: 5
        }
    },
    data(){
        return {
            data: [],
            curTable: [],
            tmpDataObj: {},
            curDept: {}
        }
    },
    methods: {
        getTablesData(deptId){
            if(!this.tmpDataObj['m' + deptId]){
                getContents({cid: this.cid, iszqb: true, lydw: deptId, pagesize: 1}).then(res => {
                    if(res.data.length > 0){
                        let d = res.data[0]
                        let tables = []
                        if(d.sftt){
                            let strs = Base64.decode(d.sftt)
                            console.log(strs)
                            tables = strs ? JSON.parse(strs) : []
                        }
                        let fts = []
                        
                        //////////////////
                        for(let i=0;i<tables.length;){
                            let tmp = []
                            for(let j=0;j<2;j++){
                                let inx = i + j
                                if(inx < tables.length){
                                    tmp.push(tables[inx])
                                }
                            }
                            i += 2
                            fts.push(tmp)
                        }

                        this.tmpDataObj['m_' + deptId] = fts
                    }else{
                        this.tmpDataObj['m_' + deptId] = []
                    }
                    //////////
                    this.curTable = this.tmpDataObj['m_' + deptId]
                })
            }
        },
        changeDept(ix){
            let deptId = ix.target.value
            this.getDeptById(deptId)
            this.getTablesData(deptId)
        },
        getDeptById(id){
            for(let d of this.data){
                if(d.id == id){
                    this.curDept = d
                    break
                }
            }
        }
    },
    mounted(){
        getDepts({}).then(res => {
            this.data = res.data
            this.getTablesData(res.data[0].id)
            this.getDeptById(res.data[0].id)
        })
    }
}
</script>
<style lang="scss" scoped>
.cms-panel-content{
    .lists{
        margin:15px 0 0 0;
    }

    padding:0px 25px 10px 19px;position: relative;

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
        height:100%;

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
            right:0px;
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
.table-list{
    width:100%;position:relative;top:-9px;
    th{
        background:rgba(255,255,255,0.2);text-align:center;color:#fff;font-size:14px;font-weight:bold;
        height:30px;vertical-align:middle;
    }
    td{
        line-height:30px;vertical-align:middle;
        text-align:center;color:#fff;font-size:14px;
    }
}
.zqb-select{
    position:relative;top:3px;
    display:inline-block;
    background:url('../../../assets/cms/content/icons.png') no-repeat -151px -178px;
    width:135px;height:30px;cursor:pointer;
    select{
        position:absolute;left:0px;top:-2px;
        width:100%;height:100%;background:transparent;
        color:#fff;font-size:14px;color:#ebebeb;
        border:none;outline:none;
        option{
            background:#000;
        }
        padding:0 0 0 10px;appearance:none;
    }
}
.cms-lbt{
    height:100%;width:100%;
    .el-carousel{
        width:100%;
        height:calc(100% - 45px);
    }
    .img{
        border:solid 1px #fff;width:100%;height:100%;
    }
}
</style>

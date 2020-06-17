<template>
<div class="cms-panel">
    <div class="cms-panel-title">
        <span class="spe-title-font title">执勤表</span>
        <span class="zqb-select">
            <select @change="changeDept($event)">
                <option v-for="item in data" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
        </span>
        <div class="bot-line">
            <span class="dot1"></span>
            <span class="dot-line"></span>
            <span class="dot2"></span>
        </div>
    </div>   
    <div class="cms-panel-content">
        <br class="cfx"/>
        <table class="cms-zqb-table">
            <tr>
                <td>席位</td>
                <td>姓名</td>
                <td>电话</td>
            </tr>
            <tr v-for="(item, index) in tables" :key="index">
                <td>{{item.xw}}</td>
                <td>{{item.xm}}</td>
                <td>{{item.dh}}</td>
            </tr>
        </table>
    </div>
</div>    
</template>
<script>
import { getContents, getDepts } from '@/api/cms'
import { Base64 } from 'js-base64';
export default {
    props: {
        cid: {
            type: String,
            default: '-1'
        },
        count: {
            type: Number,
            default: 3
        }
    },
    data(){
        return {
            data: [],
            zqbtable: {},
            tables: []
        }
    },
    methods: {
        setDeptTable(deptId){
            if(!this.zqbtable['m_' + deptId]){
                getContents({cid: this.cid, iszqb: true, lydw: deptId, pagesize: 1}).then(res => {
                    if(res.data.length > 0){
                        let d = res.data[0]
                        let tables = []
                        if(d.sftt){
                            let strs = Base64.decode(d.sftt)
                            tables = strs != '' ? JSON.parse(d.sftt) : []
                        }

                        let fts = []
                        if(tables.length > this.count){
                            for(let i=0;i<this.count;i++){
                                fts.push(tables[i])
                            }
                        }
                        this.zqbtable['m_' + deptId] = fts
                    }else{
                        this.zqbtable['m_' + deptId] = []
                    }
                    //////////
                    this.tables = this.zqbtable['m_' + deptId]
                })
            }else{
                //////////
                this.tables = this.zqbtable['m_' + deptId]
            }
        },
        changeDept(ix){
            let deptId = ix.target.value

            this.setDeptTable(deptId)
        }
    },
    mounted(){
        getDepts({}).then(res => {
            this.data = res.data
            this.setDeptTable(res.data[0].id)
        })
        // 
    }
}
</script>
<style lang="scss" scoped>
.cfx{clear:both;}
.cms-zqb-table{
    width:100%;margin-top:4px;clear:both;
    td{
        height:41px;text-align:center;
        color:#fff;font-weight:bold;font-size:14px;
    }
    tr:nth-child(odd) td{
        background:rgba(255,255,255,0.15);
    }
    tr:hover td{
        background:rgba(255,255,255,0.2);
    }
}
.zqb-select{
    position:relative;top:-8px;
    display:inline-block;float:right;margin-right:40px;
    background:url('../../../../assets/cms/content/icons.png') no-repeat -108px -58px;
    width:185px;height:34px;cursor:pointer;
    select{
        position:absolute;left:0px;top:-2px;
        width:100%;height:100%;background:transparent;
        color:#fff;font-size:16px;color:#ebebeb;
        border:none;
        option{
            background:#000;
        }
        padding:0 0 0 10px;appearance:none;
    }
}
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
</style>

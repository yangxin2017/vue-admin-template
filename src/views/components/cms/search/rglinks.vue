<template>
    <div class="links">
        <b>单位贡献排名</b>
        <ul class="tls">
            <li @click="choosedept(item)" v-for="(item,index) in depts" :key="index" :class="{sel: item.id==curDid}">
                <span class="num">{{index+1}}</span>
                <span class="title">{{item.name}}</span>
                <span class="clks">{{item.count}}</span>
            </li>
        </ul>
    </div>
</template>
<script>

import { getContributes, getDepts } from '@/api/cms'

export default {
    data(){
        return {
            depts: [],
            curDid: -1
        }
    },
    methods: {
        clearInfor(){
            this.curDid = -1
        },
        choosedept(item){
            this.curDid = item.id
            let params = {
                top: null,
                cur: {},
                next: null
            }

            let count = this.depts.length
            for(let i=0;i<count;i++){
                let d = this.depts[i]
                if(d.id == this.curDid){
                    params.cur = {count: d.count, pm: (i+1), deptid: d.id}
                    ///////
                    if(i > 0){
                        let prev = this.depts[i - 1]
                        params.top = {count: prev.count}
                    }
                    if(i < count-1){
                        let next = this.depts[i + 1]
                        params.next = {count: next.count}
                    }
                }
            }

            this.$emit("clickdept", params)
        },
        getdeptbyname(depts, name){
            let dept = null
            for(let d of depts){
                if(d.name == name){
                    d.added = true
                    dept = d
                }
            }
            return dept
        }
    },
    mounted(){
        getDepts({}).then(resdept => {
            let alldept = resdept.data
            getContributes({size: 30}).then(res => {
                let arr = [];
                for(let r of res.data){
                    let d = this.getdeptbyname(alldept, r[0])
                    if(d){
                        arr.push({ name: d.name, id: d.id, count: r[1] })
                    }
                }
                for(let d of alldept){
                    if(!d.added){
                        arr.push({ name: d.name, id: d.id, count: 0 })
                    }
                }
                this.depts = arr
            })
        })
    }
}
</script>
<style lang="scss" scoped>
.links{
    width:678px;margin-top:32px;
    b{font-size:18px;color:#fff;}
    .tls{
        list-style:none;margin:25px 0 0 0;padding:0;
        li{
            border-bottom:dotted 1px #fff;display:flex;padding:0 0 5px 0;margin:0 0 20px 0;
            .num{
                width:40px;font-size:14px;font-weight:bold;color:#fff;
            }
            .title{
                font-size:14px;color:#fff;flex:1;cursor:pointer;
            }
            .clks{
                font-size:14px;color:#fff;width:100px;text-align:right;
            }
            &:hover, &.sel{
                border-bottom:dotted 1px #AF8734;
                .title, .num, .clks{
                    color:#AF8734;font-weight:bold;
                    text-decoration:underline;
                }
            }
        }
    }
}
</style>

<template>
    <div class="cms-bg">
        <comrender :html="head" />
        <div class="cms-contents">
            
            <div class="cms-con-left">
                <div class="cms-com">
                    <comrender :html="l1" />
                </div>
                <div class="cms-com">
                    <comrender :html="l2" />
                </div>
            </div>

            <div class="cms-con-mid" :style="{width: midwidth + 'px'}">
                <div class="cms-com">
                    <comrender :html="t1" />
                </div>
                <div class="cms-com">
                    <comrender :html="t2" />
                </div>
                <div class="cms-com">
                    <comrender :html="b1" />
                </div>
            </div>

            <div class="cms-con-right">
                <div class="cms-com">
                    <comrender :html="r2" />
                </div>
                <div class="cms-com">
                    <comrender :html="r3" />
                </div>
            </div>

        </div>
    </div>
</template>
<script>

import comrender from '@/views/components/render'
import { getCategorys, getDeptById } from '@/api/cms';

export default {
    components: {
        comrender: comrender
    },
    data(){
        return {
            head: ``,
            l1: ``,
            l2: ``,
            r2: ``,
            r3: ``,
            t1: ``,
            t2: ``,
            b1: ``,
            b2: ``,
            midwidth: 1120,
            dept: null
        }
    },
    methods: {
        getCategoryById(datas, id){
            let cate = null
            for(let d of datas){
                if(d.id == id){
                    cate = d
                    break
                }
            }
            return cate
        }
    },
    mounted(){
        let lydw = this.$route.query.id

        getDeptById({deptId: lydw}).then(res => {
            this.dept = res.data
            this.head = `<main-header hname="${res.data.name}"></main-header>`
        })

        let relative = this.$store.state.app.cms_gw
        
        this.midwidth = relative.other.meta.midwidth

        getCategorys({}).then(res => {
            for(let k in relative){
                if(k != 'other') {
                    let d = this.getCategoryById(res.data, relative[k].id)
                    let hstr = relative[k].height ? `hei=${relative[k].height}` : ''
                    let pstr = relative[k].percount ? `:percount=${relative[k].percount}` : ''

                    this[k] = `<main-panel lydw="${lydw}" isgw="true" dir="${relative[k].dir}" ${hstr} ${pstr} pkey="${k}" cid="${relative[k].id}" cname="${d.name}"></main-panel>`
                }else{
                    let d = this.getCategoryById(res.data, relative.other.timeline.id)
                    this.t2 = `<gw-timeline isgw="true" lydw="${lydw}" hei="${relative.other.timeline.height}" cname="${d.name}" cid="${d.id}"></gw-timeline>`
                }
            }
        });
        let obj = relative['other'];

        this.t1 = `<zqb-full cid="${obj.zqb.id}" hei="${obj.zqb.height}" :isgw="true" lydw="${lydw}"></zqb-full>`
        // this.r4 = `<main-panel :count="${obj.ranks.count}" type="rank" dir="right" hei="180" spec="rank" cname="排行榜"></main-panel>`
        // this.r5 = `<main-contact :count="${obj.contact.count}"></main-contact>`
    }
}
</script>
<style lang="scss" scoped>
.cms-bg{
    background:url(../../../assets/cms/header/bg.jpg) no-repeat 0 0;
    width:100%;height:100%;
    background-size:100% 100%;
}
.cms-contents{
    display:flex;height:calc(100% - 106px);

    .cms-con-right{
        flex:1;height:calc(100% + 20px);
        display:flex;justify-content:space-between;
        margin-top:-40px;
        flex-direction:column;
        .cms-com{
            
        }
    }
    .cms-con-left{
        flex:1;height:calc(100% + 20px);
        display:flex;justify-content:space-between;
        margin-top:-40px;
        flex-direction:column;
        .cms-com{
            margin:0 0 0 0;
        }
    }

    .cms-con-mid{
        .midone{
            position:relative;
            .line-top{
                position:absolute;width:100%;display:flex;
                .lf{
                    position:absolute;left:0;top:0;
                    background:url('../../../assets/cms/content/mid_icons.png') no-repeat 0 0;
                    width:52px;height:37px;
                }
                .rg{
                    position:absolute;right:0;top:0;
                    background:url('../../../assets/cms/content/mid_icons.png') no-repeat -1069px 0;
                    width:52px;height:37px;
                }
                .md{
                    position:absolute;left:52px;top:0;
                    width:calc(100% - 104px);height:10px;text-align:center;
                    .md-in{
                        background:url('../../../assets/cms/content/mid_icons.png') no-repeat -455px 0;
                        width:210px;height:3px;display:inline-block;position:absolute;top:0;left:50%;margin:0 0 0 -105px;
                    }
                    .md-line{
                        position:absolute;left:0;top:1px;height:1px;
                        background:rgba(255,255,255,0.4);width:100%;
                    }
                }
            }
            &.midbot{
                .line-top{bottom:5px;}
                .lf{
                    background:url('../../../assets/cms/content/mid_icons.png') no-repeat 0 -558px;
                    top:-33px;
                }
                .rg{
                    background:url('../../../assets/cms/content/mid_icons.png') no-repeat -1069px -558px;
                    top:-33px;
                }
            }
        }
        margin:0 10px;
        width:1120px;height:calc(100% - 20px);
        display:flex;
        justify-content: space-between;
        flex-direction:column;
        .cms-com{
            
        }
        .dflex{
            display:flex;
            justify-content: space-around;
            .cms-com-in{
                flex:1;margin:0 0px 0px 0;
            }
        }
    }
}
</style>
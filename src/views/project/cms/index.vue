<template>
    <div class="cms-bg">
        <comrender :html="head" />
        <div class="cms-contents">
            <div class="cms-con-left">
                <div class="cms-com" v-if="l1">
                    <comrender :html="l1" />
                </div>
                <div class="cms-com">
                    <comrender :html="l2" />
                </div>
                <div class="cms-com">
                    <comrender :html="l3" />
                </div>
                <div class="cms-com">
                    <comrender :html="l4" />
                </div>
            </div>
            <div class="cms-con-mid" :style="{width: midwidth + 'px'}">
                <div class="cms-com midone">
                    <div class="line-top">
                        <span class="lf"></span>
                        <div class="md">
                            <span class="md-in"></span>
                            <span class="md-line"></span>
                        </div>
                        <span class="rg"></span>
                    </div>
                    <comrender :html="t1" />
                </div>
                <div class="cms-com midone midbot">
                    <div class="line-top">
                        <span class="lf"></span>
                        <div class="md">
                            <span class="md-in"></span>
                            <span class="md-line"></span>
                        </div>
                        <span class="rg"></span>
                    </div>
                    <comrender :html="t2" />
                </div>
                <div class="cms-com dflex">
                    <div class="cms-com-in" style="margin-right:10px;">
                        <comrender :html="b1" />    
                    </div>
                    <div class="cms-com-in">
                        <comrender :html="b2" />   
                    </div>
                </div>
            </div>
            <div class="cms-con-right">
                <!-- <comrender :html="l1" /> -->
                <div class="cms-com">
                    <comrender :html="r1" />
                </div>
                <div class="cms-com">
                    <comrender :html="r2" />
                </div>
                <div class="cms-com">
                    <comrender :html="r3" />
                </div>
                <div class="cms-com">
                    <comrender :html="r4" />
                </div>
                <div class="cms-com" style="position:relative;">
                    <comrender :html="r5" />
                </div>
            </div>
        </div>
        <div class="footer">
            <comrender :html="ft" />
        </div>
    </div>
</template>
<script>
import comrender from '@/views/components/render'
import { getCategorys, login } from '@/api/cms';
import { getCategoryByCode } from '@/utils/cms'

export default {
    components: {
        comrender: comrender
    },
    data(){
        return {
            head: `<main-header></main-header>`,
            l1: ``,
            l2: ``,
            l3: ``,
            l4: ``,
            t1: ``,
            t2: ``,
            r1: ``,
            r2: ``,
            r3: ``,
            r4: ``,
            r5: ``,
            b1: ``,
            b2: ``,
            ft: `<main-footer></main-footer>`,
            ms: ``,
            showTJ: false,
            midwidth: 1120
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
        let allCategorys = this.$store.state.cms.categorys

        let relative = this.$store.state.app.cms
        
        this.midwidth = relative.other.meta.midwidth
        ///
        let t1Cate = {}

        //getCategorys({}).then(res => {
        for(let k in relative){
            if(k != 'other') {
                let d = getCategoryByCode(allCategorys, relative[k].code)
                if(d){
                    let hstr = relative[k].height ? `hei=${relative[k].height}` : ''
                    let pstr = relative[k].percount ? `:percount=${relative[k].percount}` : ''

                    this[k] = `<main-panel dir="${relative[k].dir}" ${hstr} ${pstr} pkey="${k}" cid="${d.id}" cname="${d.name}"></main-panel>`
                }
                
            }else{
                let d = getCategoryByCode(allCategorys, relative.other.zydx.code)
                this.t2 = `<main-top-mid hei="${relative.other.zydx.height}" cname="${d.name}" cid="${d.id}"></main-top-mid>`
            }
        }
        
        t1Cate = getCategoryByCode(allCategorys, relative['other'].ncpd.pcode)
        let firstNCPD = t1Cate.children[0]

        this.t1 = `<main-top title="${t1Cate.name}" hei="${relative['other'].ncpd.height}" :count="${relative['other'].ncpd.count}" cid="${firstNCPD.id}"></main-top>`
        //});
        let obj = relative['other'];

        
        this.r4 = `<main-panel :count="${obj.ranks.count}" type="rank" dir="right" hei="180" spec="rank" cname="排行榜"></main-panel>`
        // this.r5 = `<main-contact :count="${obj.contact.count}"></main-contact>`
        let r5cate = getCategoryByCode(allCategorys, obj.zqb.pcode)
        let firstZQB = r5cate.children[0]
        this.r5 = `<main-zqb :cid="${firstZQB.id}" :hei="${obj.zqb.height}" :count="${obj.zqb.count}"></main-zqb>`
        

        /////
        // login({username: 'f1', password: '123456'});
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
    display:flex;height:calc(100% - 256px);

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
<style>
input:outline,input:focus{
    border:none;
}
.spe-font{
    font-size:46px;color:#fff;
}
.spe-title-font{
    font-family:'微软雅黑';
    background-image:-webkit-linear-gradient(top,#ffffff,#E0FF0F); 
    background-clip:text;
    -webkit-text-fill-color:transparent;
    -webkit-text-shadow:1px 1px 4px #ccc;
}
</style>

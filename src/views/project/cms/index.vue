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
                <div class="cms-com" style="flex:none;height:200px;">
                    <comrender :html="l4" />
                </div>
            </div>
            <div class="cms-con-mid">
                <div class="cms-com midone" style="flex:5;">
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
                <div class="cms-com midone midbot" style="flex:7;">
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
                <div class="cms-com dflex" style="flex:none;height:200px;">
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
                <div class="cms-com">
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
            r4: `<main-panel type="rank" dir="right" hei="135" spec="rank" cname="排行榜"></main-panel>`,
            r5: `<main-contact></main-contact>`,
            b1: ``,
            b2: ``,
            ft: `<main-footer></main-footer>`,
            ms: ``,
            showTJ: false
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
        },
        showtj(){
            console.log('112233')
        }
    },
    mounted(){
        let relative = this.$store.state.app.cms
        getCategorys({}).then(res => {
            for(let k in relative){
                if(k != 'other') {
                    let d = this.getCategoryById(res.data, relative[k].id)
                    let hstr = relative[k].height ? `hei=${relative[k].height}` : ''
                    this[k] = `<main-panel dir="${relative[k].dir}" ${hstr} pkey="${k}" cid="${relative[k].id}" cname="${d.name}"></main-panel>`
                }else{
                    let d = this.getCategoryById(res.data, relative.other.zydx.id)
                    console.log(d, res.data)
                    this.t2 = `<main-top-mid cname="${d.name}" cid="${d.id}"></main-top-mid>`
                }
            }
        });
        let obj = relative['other'];
        this.t1 = `<main-top lbtid="${obj.lbt.id}" zqbid="${obj.zqb.id}"></main-top>`


        /////
        // login({username: 'f1', password: '123456'});
    }
}
</script>
<style lang="scss" scoped>
.cms-bg{
    background:url(../../../assets/cms/header/bg.jpg) no-repeat 0 0;
    width:2560px;height:1080px;
    background-size:100% 100%;
}
.cms-contents{
    display:flex;height:calc(100% - 256px);

    .cms-con-right{
        flex:1;height:calc(100% + 42px);
        display:flex;
        margin-top:-40px;
        justify-content: space-around;
        flex-direction:column;
        .cms-com{
            margin:0 0 6px 0;
        }
    }
    .cms-con-left{
        flex:1;height:calc(100% + 42px);
        display:flex;
        margin-top:-40px;
        justify-content: space-around;
        flex-direction:column;
        .cms-com{
            flex:1;margin:0 0 10px 0;
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
        width:1120px;height:100%;
        display:flex;
        justify-content: space-around;
        flex-direction:column;
        .cms-com{
            flex:1;margin:0 0 10px 0;
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

<template>
    <div class="cms-panel-content rg-dir">
        <div class="bg-color">
            <div class="bg-color-top"></div>
            <div class="bg-color-mid"></div>
            <div class="bg-color-bottom"></div>
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
            <div class="lists">
                <div class="li">
                    <span>单位名称单位</span><br/>
                    <span class="tel">010-87708770</span>
                </div>
                <div class="li">
                    <span>单位名称单位</span><br/>
                    <span class="tel">010-87708770</span>
                </div>
                <div class="li">
                    <span>单位名称单位</span><br/>
                    <span class="tel">010-87708770</span>
                </div>
                <div class="li">
                    <span>单位名称单位</span><br/>
                    <span class="tel">010-87708770</span>
                </div>
                <div class="li icons">
                    <span class="news"></span>
                    <span class="suggest"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cms-panel-content{
    .lists{
        display:flex;margin:15px 0 0 0;
        justify-content:space-around;
        .li{
            flex:1;
            background:url('../../../assets/cms/content/contactbg.png') no-repeat center 0;height:28px;text-align:center;
            span{
                font-size:14px;color:#fff;
                &.tel{
                    color:#DFFF0E;
                }
            }
            &.icons{
                background:none;padding-top:5px;
            }
            .news{
                background:url('../../../assets/cms/content/icons.png') no-repeat -109px -115px;
                width:17px;height:18px;display:inline-block;cursor:pointer;margin-right:10px;
            }
            .suggest{
                background:url('../../../assets/cms/content/icons.png') no-repeat -138px -114px;
                width:20px;height:19px;display:inline-block;cursor:pointer;
            }
        }
    }

    padding:10px 25px 10px 19px;position: relative;

    .bg-color{
        width:100%;height:calc(100% - 22px);
        position:absolute;top:11px;right:5px;
        .bg-color-top{
            position:absolute;left:0;top:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right 0;
            width:100%;height:30px;
        }
        .bg-color-mid{
            background:rgba(0,0,0,0.4);
            position:absolute;top:30px;width:100%;height:calc(100% - 60px);left:0;
        }
        .bg-color-bottom{
            position:absolute;left:0;bottom:0;
            background:url('../../../assets/cms/content/panel_bg.png') no-repeat right -132px;
            width:100%;height:30px;
        }
    }

    .inner{    
        position:relative;
        border-top:solid 1px rgba(255,255,255,0.3);
        border-bottom:solid 1px rgba(255,255,255,0.3);
        height:59px;

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
            right:-4px;
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

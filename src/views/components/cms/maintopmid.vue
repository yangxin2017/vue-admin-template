<template>
<div class="cms-panel">
    <div class="cms-panel-title">
        <span class="spe-title-font title">重要动向</span>
        <ul class="menus">
            <li class="sel">
                <a>四个字的</a>
            </li>
            <li>
                <a>六六六个字的</a>
            </li>
        </ul>
        <div class="bot-line">
            <span class="dot1"></span>
            <span class="dot-line"></span>
            <span class="dot2"></span>
        </div>
    </div>   
    <div class="cms-panel-content">
        <div class="map1">
            <span class="zhongyin txt sel">中印边境</span>
            <span class="bohai txt">黄渤海方向</span>
            <span class="zhongchao txt">中朝边境</span>
            <span class="donghai txt">东海方向</span>
            <span class="taihai txt">台海方向</span>
            <span class="nanhai txt">南海方向</span>
        </div>
        <div class="map2">
            <span class="meiguo txt sel">美国</span>
            <span class="lamei txt">拉美</span>
            <span class="ouzhou txt">欧洲</span>
            <span class="eluosi txt">俄罗斯</span>
            <span class="zhongdong txt">中东</span>
            <span class="feizhou txt">非洲</span>
        </div>
        <div class="map-data">
            <div class="map-data-title">
                <span class="spe-font">美 国</span>
            </div>
            <ul class="data-lists">
                <li>
                    <span class="sjx"></span><a href="#">标题名称标题名称标题题题名称标称称标标题标题...</a>
                    <div class="data-info">
                        <span class="time">2019-10-10</span>
                        <span class="source">XXXXXXXX单位</span>
                    </div>
                </li>
                <li>
                    <span class="sjx"></span><a href="#">标题名称标题名称标题题题名称标称称标标题标题...</a>
                    <div class="data-info">
                        <span class="time">2019-10-10</span>
                        <span class="source">XXXXXXXX单位</span>
                    </div>
                </li>
                <li>
                    <span class="sjx"></span><a href="#">标题名称标题名称标题题题名称标称称标标题标题...</a>
                    <div class="data-info">
                        <span class="time">2019-10-10</span>
                        <span class="source">XXXXXXXX单位</span>
                    </div>
                </li>
                <li>
                    <span class="sjx"></span><a href="#">标题名称标题名称标题题题名称标称称标标题标题...</a>
                    <div class="data-info">
                        <span class="time">2019-10-10</span>
                        <span class="source">XXXXXXXX单位</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.cms-panel{
    padding:0 0 0 10px;
}
.map1{
    display:none;
    background:url('../../../assets/cms/content/map1.png') no-repeat 0 0;
    width:409px;height:301px;float:left;margin:10px 0 0 100px;position:relative;
    .txt{
        position:absolute;text-align:center;line-height:20px;width:62px;height:20px;
        font-size:12px;color:#fff;font-weight:bold;cursor:pointer;
        &.sel{
            color: #13B8F6;
        }
    }
    .zhongyin{left:117px;top:65px;}
    .bohai{left:243px;top:47px;}
    .zhongchao{left:317px;top:43px;}
    .donghai{left:329px;top:100px;}
    .taihai{left:237px;top:108px;}
    .nanhai{left:213px;top:143px;}
}
.map2{
    background:url('../../../assets/cms/content/map2.png') no-repeat 0 0;
    width:582px;height:289px;float:left;margin:19px 0 0 32px;position:relative;
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
    float:right;
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

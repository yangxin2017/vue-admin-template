<template>
<div class="cms-panel">
    <div class="cms-panel-title">
        <span class="spe-title-font title">执勤表</span>
        <span class="zqb-select">
            <select>
                <option>网络空间部队1</option>
                <option>网络空间部队2</option>
                <option>网络空间部队3</option>
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
            <tr>
                <td>席位</td>
                <td>姓名</td>
                <td>电话</td>
            </tr>
            <tr>
                <td>席位</td>
                <td>姓名</td>
                <td>电话</td>
            </tr>
            <tr>
                <td>席位</td>
                <td>姓名</td>
                <td>电话</td>
            </tr>
        </table>
    </div>
</div>    
</template>
<script>
export default {
    
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

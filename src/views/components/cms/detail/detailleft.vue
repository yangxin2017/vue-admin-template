<template>
<div class="cms-left-con">
    <div class="cms-d-title">
        <span class="cms-select">
            <select>
                <option>网络空间部队1</option>
                <option>网络空间部队2</option>
                <option>网络空间部队3</option>
            </select>
        </span>
    </div>
    <div class="cms-d-menu">
        <ul class="menus">
            <li class="sel">全部</li>
            <li>六个字啊啊啊</li>
            <li>六个字啊</li>
            <li>六个字啊</li>
        </ul>
    </div>
    <div class="cms-d-search">
        <div class="inp-container">
            <span class="lf"></span>
            <input type="text" />
            <span class="rg"></span>
        </div>
        <div class="inp-times">
            <el-date-picker popper-class="inp" style="margin:0 0 0 15px;"
                v-model="stime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <span class="line"></span>
            <el-date-picker popper-class="inp"
                v-model="etime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
            <input type="button" value="确定" class="btnsearch" />
        </div>
    </div>
    <div class="cms-d-lists">
        <div class="cms-d-mod">
            <div class="line-title">
                <span class="sjx"></span>
                <a href="#" class="tl">标题名称标题名称标题名称标题名称标...</a>
                <span class="clks">浏览量：56</span>
            </div>
            <div class="line-info">
                <span class="time">2019-10-01 12:30</span>
                <span class="source">XXXXXXXX单位</span>
            </div>
        </div>
        <div class="cms-d-mod">
            <div class="line-title">
                <span class="sjx"></span>
                <a href="#" class="tl">标题名称标题名称标题名称标题名称标...</a>
                <span class="clks">浏览量：56</span>
            </div>
            <div class="line-info">
                <span class="time">2019-10-01 12:30</span>
                <span class="source">XXXXXXXX单位</span>
            </div>
        </div>
        <div class="cms-d-mod">
            <div class="line-title">
                <span class="sjx"></span>
                <a href="#" class="tl">标题名称标题名称标题名称标题名称标...</a>
                <span class="clks">浏览量：56</span>
            </div>
            <div class="line-info">
                <span class="time">2019-10-01 12:30</span>
                <span class="source">XXXXXXXX单位</span>
            </div>
        </div>
    </div>
    <div class="cms-d-pages">
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</div>    
</template>
<script>
export default {
    data(){
        return {
            stime: '',
            etime: ''
        };
    }
}
</script>
<style lang="scss" scoped>
.cms-left-con{
    height:calc(100% - 73px);
}
.cms-d-lists{
    padding:0 25px;margin:20px 0 0 0;
    height:calc(100% - 199px);
    .cms-d-mod{
        margin:0 0 20px 0;
        .line-title{
            display:flex;margin:0 0 5px 0;
            .sjx{
                background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
                width:6px;height:6px;float:left;position:relative;top:4px;
            }
            .tl{
                color:#fff;font-size:14px;margin:0 0 0 10px;flex:1;
                &:hover{text-decoration:underline;}
            }
            .clks{
                width:100px;color:#fff;font-size:12px;text-align:right;
            }
        }
        .line-info{
            display:flex;
            .time{color:#8EA413;flex:1;font-size:12px;margin-left:16px;}
            .source{color:#8EA413;flex:1;text-align:right;font-size:12px;}
        }
    }
}

.cms-d-search{
    padding:20px 15px 0 15px;
    .inp-container{
        display:flex;
        .lf{
            background:url('../../../../assets/cms/detail/icons_detail.png') no-repeat -11px -41px;
            width:14px;height:41px;
        }
        input{
            height:41px;width:100%;color:#fff;outline:none;
            border:none;background:url('../../../../assets/cms/detail/searbg.png') repeat-x 0 0;
        }
        .rg{
            background:url('../../../../assets/cms/detail/icons_detail.png') no-repeat -54px -41px;
            width:45px;height:41px;
        }
    }
    .inp-times{
        margin:15px 0 0 0;
        .btnsearch{
            width:75px;height:30px;border:none;border-radius:3px;
            background:#CBA452;cursor:pointer;
            font-size:14px;color:#fff;text-align:center;
            line-height:30px;margin:0 0 0 15px;
        }
    }
}

.cms-d-title{
    background:url('../../../../assets/cms/detail/headwg.png') no-repeat 0 0;
    width:560px;height:58px;border-bottom:solid 2px #5C6C0D;padding:12px 0 0 20px;
    select{font-weight:bold;}
}
.cms-d-menu{
    height:40px;border-bottom:dotted 2px #5C6C0D;
    .menus{
        list-style:none;margin:0px 0 0 25px;padding:0;
        position:relative;top:16px;
        li{
            float:left;margin:0 20px 0 0;padding:0 5px 5px 5px;
            color:#fff;font-size:14px;cursor:pointer;
            &.sel,&:hover{
                border-bottom:solid 3px #E1FF0F;font-weight:bold;
            }
        }
    }
}
</style>

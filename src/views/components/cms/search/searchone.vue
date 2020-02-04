<template>
    <div class="cms-search-container">
        <div class="menus">
            <a class="menu-cate sel">全部<span class="icon-bot"></span></a>
            <a class="menu-cate">版块版块<span class="icon-bot"></span></a>
            <a class="menu-cate">版块版块<span class="icon-bot"></span></a>
            <a class="menu-cate">版块版块<span class="icon-bot"></span></a>
            <a class="menu-cate">版块版块<span class="icon-bot"></span></a>
            <a class="menu-more">更多<span class="icon-more"></span></a>
        </div>
        <div class="inpsearch">
            <input class="inp" type="text" placeholder="请输入搜索内容" />
            <div class="btn">
                <span class="icon-search"></span>
            </div>
        </div>
        <div class="conditions">
            <div class="cons">
                <div class="lines-one">
                    <span class="txt">时间</span>
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
                    </div>
                </div>
                <div class="lines-one" style="margin-top:15px;">
                    <span class="txt">单位</span>
                    <ul class="depts">
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                        <li>单位名称</li>
                    </ul>
                </div>
            </div>
            <a class="btn-change">普通模式</a>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            stime: '',
            etime: ''
        }
    }
}
</script>
<style lang="scss" scoped>
.cms-search-container{
    margin:25px 0 0 0;
    
    .conditions{
        display:flex;margin:15px 0 0 0;
        .btn-change{
            width:103px;height:42px;border-radius:10px;
            background:#CBA452;text-align:center;line-height:42px;
            display:inline-block;cursor:pointer;
            font-size:16px;color:#fff;font-weight:bold;
            &:hover{
                background:#AF8734;
            }
        }
        .cons{
            flex:1;margin:0 15px 0 0;
            .lines-one{
                display:flex;
                .txt{
                    width:60px;font-size:14px;color:#fff;margin:7px 0 0 0;
                }
                .depts{
                    flex:1;margin:5px 0 0 9px;flex-wrap:wrap;
                    list-style:none;padding:0;display:flex;
                    li{
                        flex:0 1 20%;font-size:14px;color:#fff;cursor:pointer;margin:0 0 4px 0;
                        &:hover{
                            text-decoration:underline;
                        }
                    }
                }
            }
            
        }
    }

    .menus{
        display:flex;
        .menu-cate{
            flex:1;margin:0 20px 0 0;padding-bottom:5px;
            font-size:14px;font-weight:bold;color:#fff;text-align:center;
            .icon-bot{
                background:url('../../../../assets/cms/search/menubot.png') no-repeat center center;
                width:100%;height:10px;display:none;
            }
            &:hover .icon-bot,&.sel .icon-bot{
                display:inline-block;
            }
        }
        .menu-more{
            width:90px;color:#fff;font-size:14px;font-weight:bold;cursor:pointer;
            .icon-more{
                background:url('../../../../assets/cms/search/icons_search.png') no-repeat -25px -36px;
                width:13px;height:14px;display:inline-block;vertical-align:middle;margin:0 0 0 9px;
            }
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .inpsearch{
        width:100%;height:40px;background:#fff;border-radius:5px;display:flex;
        .btn{
            width:84px;height:40px;background:#CBA452;cursor:pointer;border-radius:0 5px 5px 0;text-align:center;
            line-height:40px;padding-top:5px;
            &:hover{
                background:#66522F;
            }
            .icon-search{
                background:url('../../../../assets/cms/search/icons_search.png') no-repeat -10px -70px;
                width:28px;height:28px;display:inline-block;
            }
        }
        .inp{
            flex:1;height:38px;font-size:16px;color:#333;padding:0 15px;border-radius:5px 0 0 5px;border:none;
        }
    }
}
</style>

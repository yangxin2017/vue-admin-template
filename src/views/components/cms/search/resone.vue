<template>
    <div class="lists">
        <div class="lis">
            <label class="res-tl">以下是<b>“中国”</b>的搜索结果</label>
            <span class="icon-close"></span>
            <ul class="news-lists">
                <li class="li">
                    <txtli />
                </li>
                <li class="li">
                    <txtli />
                </li>
                <li class="li">
                    <txtli />
                </li>
            </ul>
            <div class="cms-d-pages">
                <el-pagination
                    background small
                    layout="prev, pager, next"
                    :total="100">
                </el-pagination>
            </div>
        </div>
    </div>    
</template>
<script>
var txtli = () => import('@/views/components/cms/search/txtli')
export default {
    components: {
        'txtli': txtli
    }
}
</script>
<style lang="scss" scoped>
.lists{
    .res-tl{
        font-size:14px;
        b{
            font-size:20px;font-weight:bold;
        }
    }
    height:calc(100% - 20px);margin-top:20px;
    .lis{
        float:left;
        width:323px;height:calc(100% - 20px);padding:15px 10px;
        background:#fff;position:relative;
        .icon-close{
            background:url('../../../../assets/cms/search/icons_search.png') no-repeat -64px -36px;
            width:24px;height:24px;position:absolute;top:10px;right:10px;cursor:pointer;
        }
        .news-lists{
            margin:28px 0 0 0;padding:0;list-style:none;
            height:calc(100% - 87px);
            li{margin-bottom:20px;}
        }
    }
}
</style>


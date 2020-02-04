<template>
    <div class="lists">
        <div class="li">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <a>标题名称标题名称标题名称标题名称标题标题标题标题</a>
                </div>
                <div class="contents">
                    <span class="time">2019-10-01</span><br/>
                    <span class="source">网络网络网络</span>
                </div>
            </div>
        </div>
        <div class="li">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <a>标题名称标题名称</a>
                </div>
                <div class="contents">
                    <span class="time">2019-10-01</span><br/>
                    <span class="source">网络网络网络</span>
                </div>
            </div>
        </div>
        <div class="li">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <a>标题名称标题名称</a>
                </div>
                <div class="contents">
                    <span class="time">2019-10-01</span><br/>
                    <span class="source">网络网络网络</span>
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
.lists{
    display: flex;margin:10px 0 0 0;
    flex-flow: row wrap;width:100%;
    justify-content: space-between;
    .li{
        flex:0 1 100%;
        padding:0 10px 0 0;
        margin-bottom:8px;
    }
}
.cms-text-com{
    .title{
        float:left;width:360px;
        .sjx{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;float:left;position:relative;top:4px;
        }
        a{
            font-size:16px;color:#fff;
            margin-left:15px;display:block;height:36px;
        }
    }
    .contents{
        margin:5px 0 0 360px;
        text-align:right;
        span{
            color:#B8D517;font-size:14px;
            &.source{font-weight:bold;}
            &.time{margin-left:15px;}
        }
    }
}
</style>

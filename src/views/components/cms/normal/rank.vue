<template>
    <div class="ranks">
        <div class="li">
            <span class="icons i1"></span>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
        </div>
        <div class="li">
            <span class="icons i2"></span>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
        </div>
        <div class="li">
            <span class="icons i3"></span>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
            <a>
                <span class="jt"></span>东部战区联参情报局
            </a>
        </div>
    </div>    
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.ranks{
    display:flex;margin-top:5px;
    justify-content:space-around;
    .li{
        flex:1;
        a{
            display:block;
            color:#fff;
            line-height:23px;
            margin-top:2px;
        }
        .jt{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;position:relative;top:4px;display:inline-block;vertical-align:middle;
            margin-right:5px;position:relative;top:-2px;
        }
    }
    .icons{
        background:url('../../../../assets/cms/content/ranks.png') no-repeat 0 0;
        width:178px;height:51px;display:block;
        &.i2{
            background-position:-217px 0;
        }
        &.i3{
            background-position:-434px 0;
        }
    }
}
</style>

<template>
<div>
    <div class="tls">
        <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
    </div>
    <div class="tls-infor">
        <span class="time">2019-01-01</span>
        <span class="source">网络空间部队</span>
        <span class="clks">点击量：123123</span>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tls{
    display:flex;
    .sjx{
        background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
        width:6px;height:6px;position:relative;top:4px;display:inline-block;
    }
    .title{
        font-size:14px;color:#333;margin-left:1px;
        &:hover{
            text-decoration:underline;
        }
    }
}
.tls-infor{
    display:flex;margin:10px 0 0 0;
    span{
        font-size:12px;color:#AF8734;flex:1;
        .source{text-align:center;}
        .clks{text-align:right;}   
    }
}
</style>

<template>
<div>
    <div class="tls">
        <router-link :to="dat.link" v-if="dat.link">
            <a class="title" >{{dat.title}}</a>
        </router-link>
    </div>
    <div class="tls-infor">
        <span class="time">{{dat.time}}</span>
        <span class="source">{{dat.source}}</span>
        <span class="clks">点击量：{{dat.clicks}}</span>
    </div>
</div>
</template>
<script>
export default {
    props: {
        dat: {
            type: Object,
            default: {}
        }
    },
    methods: {
    }
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
        display:block;height:35px;overflow:hidden;
        &:hover{
            text-decoration:underline;
        }
    }
}
.tls-infor{
    display:flex;margin:10px 0 0 0;
    span{
        font-size:12px;color:#AF8734;flex:1;
        &.source{text-align:center;}
        &.clks{text-align:right;}   
    }
}
</style>

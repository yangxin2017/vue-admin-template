<template>
    <div class="cms-top" :style="{height: hei + 'px'}">
        <div class="lbt">
            <lbt :cid="lbtid"></lbt>
        </div>
        <div class="zqb">
            <zqb :cid="zqbid"></zqb>
        </div>
    </div>
</template>
<script>
var lbt = () => import('@/views/components/cms/normal/lbt')
var zqb = () => import('@/views/components/cms/normal/zqb')
export default {
    components: {
        'lbt': lbt,
        'zqb': zqb
    },
    props: {
        lbtid: {
            type: String,
            default: null
        },
        zqbid: {
            type: String,
            default: null
        },
        hei: {
            type: String,
            default: '280'
        }
    }
}
</script>
<style lang="scss" scoped>
.cms-top{
    display:flex;height:100%;
    justify-content:space-around;
    .lbt{
        flex: 4;margin:20px 20px 0 40px;
        height:calc(100% - 15px);padding:5px;border:solid 1px rgba(255,255,255,0.3);
        border-radius:0 5px 0 5px;
    }
    .zqb{flex: 5;height:calc(100% - 15px);margin:20px 0px 0 0px;}
}
</style>
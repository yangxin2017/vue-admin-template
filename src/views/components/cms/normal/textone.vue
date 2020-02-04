<template>
    <div class="lists">
        <div class="li" v-for="item in data" :key="item.id">
            <div class="cms-text-com">
                <div class="title">
                    <span class="sjx"></span>
                    <a :href="item.link">{{item.title}}</a>
                </div>
                <div class="contents">
                    <span class="time">{{item.time}}</span>
                    <span class="source">{{item.source}}</span>
                    <span class="views">浏览量：{{item.clicks}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: []
        }
    },
    mounted(){

    }
}
</script>
<style lang="scss" scoped>
.lists{
    display: flex;margin:10px 0 0 0;
    flex-flow: row wrap;width:100%;
    justify-content: space-between;
    .li{
        flex:0 1 50%;
        padding:0 10px 0 0;
        margin:5px 0 15px 0;
    }
    &.lifull .li{
        flex: 0 1 100%;
    }
}
.cms-text-com{
    .title{
        .sjx{
            background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
            width:6px;height:6px;float:left;position:relative;top:4px;
        }
        a{
            font-size:16px;color:#fff;
            margin-left:15px;display:block;height:36px;
            &:hover{
                text-decoration:underline;
            }
        }
    }
    .contents{
        display:flex;margin:5px 0 0 0;
        flex-direction: row;
        justify-content: space-between;
        span{
            color:#B8D517;font-size:14px;
            &.source{font-weight:bold;}
            &.time{margin-left:15px;}
        }
    }
}
</style>

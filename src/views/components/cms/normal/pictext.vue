<template>
<div class="lists">
    <div class="li" v-for="item in data" :key="item.id">
        <div class="cms-pictxt-bg">
            <img class="img" :src="item.pic" alt="" />
            <p class="title">
                <a :href="item.link">{{item.title}}</a>
            </p>
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
    }
}
</script>
<style lang="scss" scoped>
    .lists{
        display: flex;margin:10px 0 0 0;
        flex-direction: row;
        .li{
            flex: 0 1 25%;
        }
    }
    .cms-pictxt-bg{
        background:url('../../../../assets/cms/content/icons.png') no-repeat -7px -350px;
        width:135px;height:148px;position:relative;
        .img{
            width:120px;height:75px;position:absolute;top:5px;left:8px;
        }
        .title{
            width:120px;height:40px;color:#fff;font-size:14px;line-height:19px;
            position:absolute;top:85px;left:10px;
            a:hover{
                text-decoration:underline;
            }
        }
    }
</style>

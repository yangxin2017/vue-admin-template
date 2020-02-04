<template>
    <div class="lists">
        <div class="md">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
            </div>
            <div class="tls-infor">
                <span class="time">2019-01-01</span>
                <span class="source">网络空间部队</span>
                <span class="clks">点击量：123123</span>
            </div>
        </div>
        <div class="md">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
            </div>
            <div class="tls-infor">
                <span class="time">2019-01-01</span>
                <span class="source">网络空间部队</span>
                <span class="clks">点击量：123123</span>
            </div>
        </div>
        <div class="md">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
            </div>
            <div class="tls-infor">
                <span class="time">2019-01-01</span>
                <span class="source">网络空间部队</span>
                <span class="clks">点击量：123123</span>
            </div>
        </div>
        <div class="md">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
            </div>
            <div class="tls-infor">
                <span class="time">2019-01-01</span>
                <span class="source">网络空间部队</span>
                <span class="clks">点击量：123123</span>
            </div>
        </div>
        <div class="md">
            <div class="tls">
                <span class="sjx"></span>
                <a class="title">中国政府网_中央人民政府门户网站中国政府网_中央人民政府门户网站</a>
            </div>
            <div class="tls-infor">
                <span class="time">2019-01-01</span>
                <span class="source">网络空间部队</span>
                <span class="clks">点击量：123123</span>
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
    display:flex;
    flex-wrap:wrap;
    padding:10px 0 0 0;
    .md{
        flex: 0 1 23%;margin:10px 2% 10px 0;
        .tls{
            display:flex;
            .sjx{
                background:url('../../../../assets/cms/content/icons.png') no-repeat -11px -67px;
                width:6px;height:6px;position:relative;top:4px;display:inline-block;
            }
            .title{
                font-size:14px;color:#fff;margin-left:5px;height:34px;overflow:hidden;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
        .tls-infor{
            display:flex;margin:10px 0 0 0;
            span{
                font-size:12px;color:#B8D417;flex:1;
                &.time{margin-left:10px;}
                &.source{text-align:center;}
                &.clks{text-align:right;}   
            }
        }
    }
}
</style>

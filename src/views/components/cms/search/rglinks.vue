<template>
    <div class="links">
        <b>搜索热点</b>
        <ul class="tls">
            <li>
                <span class="num">1</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
            <li>
                <span class="num">2</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
            <li>
                <span class="num">3</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
            <li>
                <span class="num">4</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
            <li>
                <span class="num">5</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
            <li>
                <span class="num">6</span>
                <span class="title">热词热词热词热词</span>
                <span class="clks">1234</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.links{
    width:678px;margin-top:32px;
    b{font-size:18px;color:#fff;}
    .tls{
        list-style:none;margin:25px 0 0 0;padding:0;
        li{
            border-bottom:dotted 1px #fff;display:flex;padding:0 0 5px 0;margin:0 0 20px 0;
            .num{
                width:40px;font-size:14px;font-weight:bold;color:#fff;
            }
            .title{
                font-size:14px;color:#fff;flex:1;cursor:pointer;
                &:hover{
                    text-decoration:underline;
                }
            }
            .clks{
                font-size:14px;color:#fff;width:100px;text-align:right;
            }
        }
    }
}
</style>

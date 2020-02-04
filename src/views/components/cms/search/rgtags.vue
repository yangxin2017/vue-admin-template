<template>
    <div class="tags">
        <b>标签</b>
        <ul class="tls">
            <li>标签标签标签</li>
            <li>标签标签标签</li>
            <li>标签标签</li>
            <li>标签标标签</li>
            <li>签标签</li>
            <li>标签标签标签</li>
            <li>标签标签标签</li>
            <li>标签标签标签</li>
            <li>标签标签</li>
            <li>标签标标签</li>
            <li>签标签</li>
            <li>标签标签标签</li>
            <li>标签标签标签</li>
            <li>标签标签标签</li>
            <li>标签标签</li>
            <li>标签标标签</li>
            <li>签标签</li>
            <li>标签标签标签</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.tags{
    width:678px;margin-top:62px;
    b{font-size:18px;color:#fff;}
    .tls{
        list-style:none;margin:25px 0 0 0;display:flex;
        flex-wrap:wrap;padding:0;
        li{
            flex:0 1 16.66%;font-size:14px;color:#fff;
            text-align:left;cursor:pointer;margin:0 0 20px 0;
            &:hover{
                text-decoration:underline;
            }
        }
    }
}
</style>

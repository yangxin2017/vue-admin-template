<template>
    <div class="cms-lbt">
        <el-carousel trigger="click" height="128px" indicator-position="none" arrow="hover">
            <el-carousel-item v-for="item in 1" :key="item">
                <div class="syses">
                    <div class="li">
                        <img src="@/assets/cms/content/sys.png" alt="" /><br/>
                        <a>全军联合作战战场态势系统</a>
                    </div>
                    <div class="li">
                        <img src="@/assets/cms/content/sys.png" alt="" /><br/>
                        <a>全军联合作战战场态势系统</a>
                    </div>
                    <div class="li">
                        <img src="@/assets/cms/content/sys.png" alt="" /><br/>
                        <a>全军联合作战战场态势系统</a>
                    </div>
                    <div class="li">
                        <img src="@/assets/cms/content/sys.png" alt="" /><br/>
                        <a>全军联合作战战场态势系统</a>
                    </div>
                    <div class="li">
                        <img src="@/assets/cms/content/sys.png" alt="" /><br/>
                        <a>全军联合作战战场态势系统</a>
                    </div>  
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.syses{
    display:flex;margin-top:20px;
    .li{
        flex:0 1 20%;position:relative;text-align:center;
        a{color:#fff;display:inline-block;width:80px;font-weight:bold;font-size:12px;margin-top:8px;position:absolute;top:51px;left:50%;margin-left:-40px;}
    }
}
</style>

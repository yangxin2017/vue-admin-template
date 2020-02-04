<template>
    <div class="cms-lbt">
        <el-carousel trigger="click" height="198px" indicator-position="none" arrow="hover">
            <el-carousel-item v-for="item in 4" :key="item">
                <div class="img">
                    <img width="100%" height="100%" src="https://www.w3cplus.com/sites/default/files/blogs/2019/1908/2FD3FF4F@3CB03877.1C8D5B5D.png" alt="" />
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
.cms-lbt{
    height:100%;
    .img{
        border:solid 1px #fff;width:100%;height:100%;
    }
}
</style>

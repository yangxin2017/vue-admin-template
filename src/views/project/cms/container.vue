<template>
    <div v-if="meta" :style="{width: meta.width + 'px', height: meta.height + 'px'}">
      <router-view :key="key" />
    </div>
</template>
<script>
export default {
  name: 'CmsMain',
  computed: {
    key() {
      return this.$route.path
    }
  },
  data(){
    return {
      meta: null
    }
  },
  mounted(){
    this.meta = this.$store.state.app.cms.other.meta
  }
}
</script>
<style lang="scss">
.cms-hide{
  display:none;
}
@font-face
{
  font-family: zz;
  src: url('../../../assets/cms/font/zz.OTF');
}
.spe-font{
    font-size:46px;color:#fff;font-family:zz;
    background-image: -webkit-linear-gradient(top, #ffffff, #bbbbbb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.el-carousel{
  height:100%;
}
.el-carousel__container{
    height: 100%;
}

input,input:focus{
    outline:none;
}
.spe-font{
    font-size:46px;color:#fff;
}
.spe-title-font{
    font-family:'微软雅黑';
    background-image:-webkit-linear-gradient(top,#ffffff,#E0FF0F); 
    background-clip:text;
    -webkit-text-fill-color:transparent;
    -webkit-text-shadow:1px 1px 4px #ccc;
}
</style>

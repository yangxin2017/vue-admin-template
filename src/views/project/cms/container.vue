<template>
    <router-view :key="key" />
</template>
<script>
export default {
  name: 'CmsMain',
  computed: {
    key() {
      return this.$route.path
    }
  }    
}
</script>
<style lang="scss">
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
</style>

<template>
  <div
    v-if="meta"
    :style="{width: `calc(${meta.width}px - 18px)`, height: `calc(${meta.height}px - 1px)`}"
  >
    <router-view :key="key" />
  </div>
</template>
<script>
export default {
  name: "CmsMain",
  computed: {
    key() {
      return this.$route.path;
    }
  },
  data() {
    return {
      meta: null
    };
  },
  mounted() {
    this.resizeWin();
    window.onresize = () => {
      this.resizeWin();
    };
  },
  methods: {
    resizeWin() {
      let h = window.innerHeight;
      this.meta = this.$store.state.app.cms.other.meta;
      if (h >= (this.meta.height - 1)) {
        this.meta.width += 18;
        this.meta.height += 0;
      }
    }
  }
};
</script>
<style lang="scss">
.cms-hide {
  display: none;
}
@font-face {
  font-family: zz;
  src: url("../../../assets/cms/font/zz.OTF");
}
.spe-font {
  font-size: 46px;
  color: #fff;
  font-family: zz;
  background-image: -webkit-linear-gradient(top, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.el-carousel {
  height: 100%;
}
.el-carousel__container {
  height: 100%;
}

input,
input:focus {
  outline: none;
}
.spe-font {
  font-size: 46px;
  color: #fff;
}
.spe-title-font {
  font-family: "微软雅黑";
  background-image: -webkit-linear-gradient(top, #ffffff, #e0ff0f);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-shadow: 1px 1px 4px #ccc;
}
</style>

<template>
  <div class="cms-top" :style="{height: hei + 'px'}">
    <div class="lbt">
      <el-carousel height="188px" indicator-position="none">
        <el-carousel-item v-for="item in data" :key="item.id">
          <div style="position:relative;height:100%;">
            <video controls="controls" :src="item.video"></video>
            <router-link :to="item.link" target="_blank">
              <span class="tls" style>{{item.title}}</span>
            </router-link>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="zqb">
      <ncpd v-if="pid != -1" :fldatas="fldatas" :data="data" :title="title" :pid="pid" :count="count"></ncpd>
    </div>
  </div>
</template>
<script>
var ncpd = () => import("@/views/components/cms/normal/ncpd");
import { getContents } from "@/api/cms";
import { NewsModel } from "@/model/cms/news";
import { getCategoryByCode } from "@/utils/cms";

export default {
  components: {
    ncpd: ncpd
  },
  props: {
    cid: {
      type: String,
      default: null
    },
    hei: {
      type: String,
      default: "280"
    },
    count: {
      type: Number,
      default: 6
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      first: {},
      data: [],
      fldatas: [],
      pid: -1
    };
  },
  mounted() {
    let allCategorys = this.$store.state.cms.categorys;
    let t1Cate = getCategoryByCode(allCategorys, this.cid);
    this.pid = t1Cate.id;

    this.fldatas = t1Cate.children;
    getContents({
      cid: t1Cate.id,
      pagesize: this.count,
      containChild: true
    }).then(res => {
      if (res.data.length > 0) {
        for (let i = 0; i < res.data.length; i++) {
          let tmp = new NewsModel(res.data[i]);
          this.data.push(tmp);
        }
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.cms-top {
  height: 100%;
  justify-content: space-between;
  .lbt {
    float: left;
    width: 321px;
    margin: 0px 20px 0 40px;
    height: calc(100% - 15px);
    padding: 5px;
    border: solid 1px rgba(255, 255, 255, 0.3);
    border-radius: 0 5px 0 5px;
    video {
      object-fit: fill;
      width: 100%;
      height: 100%;
    }
    .tls {
      position: absolute;
      width: 100%;
      height: 25px;
      background: rgba(255, 255, 255, 0.3);
      font-size: 12px;
      color: #fff;
      left: 0;
      bottom: 0;
      line-height: 25px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      padding: 0 0 0 5px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .zqb {
    height: calc(100% - 15px);
    margin: 20px 0px 0 372px;
  }
}
</style>
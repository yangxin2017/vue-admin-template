<template>
  <div class="cms-d-detail" v-if="obj">
    <h2>{{obj.title}}</h2>
    <div class="cms-d-tags">
      <span class="tg" v-for="item in obj.tags" :key="item.id">{{item.name}}</span>
    </div>
    <div class="infor">
      <span class="source">来源单位：{{obj.source}}</span>
      <span class="time">发布时间：{{obj.time}}</span>
    </div>
    <div class="ifas">
      <!-- <pdf v-if="obj.file" :src="obj.file"></pdf> -->
      <!-- <div v-if="ispdf==1 && loadTask" v-loading="loadingpdf" style="height:100%;overflow:auto;">
        <pdf v-for="i in numPages" :key="i" :src="loadTask" :page="i"></pdf>
      </div>-->
      <iframe
        v-if="fileurl && !obj.video"
        :src="fileurl"
        width="100%"
        height="100%"
        marginwidth="0"
        marginheight="0"
        frameborder="0"
      ></iframe>
      <video v-if="obj.video" controls="controls" :src="obj.video"></video>
    </div>

    <div class="d-hideinfo" :class="{hide: !showdesc}">
      <i @click="showdesc=true" class="el-icon-d-arrow-left" v-if="!showdesc"></i>
      <i @click="showdesc=false" class="el-icon-d-arrow-right" v-if="showdesc"></i>

      <div class="desc" v-if="obj.desc">
        <b>摘要：</b>
        <br />
        {{obj.desc}}
      </div>
      <div class="img" v-if="obj.pic">
        <b>图片：</b>
        <br />
        <img :src="obj.pic" alt @click="dialogVisible=true" />
      </div>
    </div>

    <el-dialog title="图片预览" :visible.sync="dialogVisible" width="80%">
      <div style="text-align:center">
        <img :src="obj.pic" alt style="width:100%" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf
  },
  props: {
    obj: {
      type: Object,
      default: false
    }
  },
  data() {
    return {
      showdesc: false,
      loadTask: null,
      numPages: undefined,
      loadingpdf: false,
      loadingword: false,
      dialogVisible: false
    };
  },
  methods: {
    loadIframe() {
      this.loadingword = false;
    }
  },
  mounted() {},
  computed: {
    fileurl() {
      if (this.obj.file) {
        return "/cms/webfile/" + this.obj.file;
      }
      return "";
    }
    // ispdf() {
    //   let ispdf = 1;
    //   if (this.obj.file) {
    //     if (this.obj.file.indexOf(".pdf") >= 0) {
    //       ispdf = 1;
    //       this.loadingpdf = true;
    //       this.loadTask = pdf.createLoadingTask(this.obj.file);
    //       this.loadTask.then(res => {
    //         this.numPages = res.numPages;
    //         ////
    //         this.loadingpdf = false;
    //         ///
    //         res = null;
    //       });
    //     } else if (this.obj.file.indexOf(".doc") >= 0) {
    //       this.loadingword = true;
    //       ispdf = 2;
    //       this.loadTask = null;
    //     } else {
    //       ispdf = -1;
    //       this.loadTask = null;
    //     }
    //   } else {
    //     ispdf = -1;
    //     this.loadTask = null;
    //   }
    //   return ispdf;
    // }
  }
};
</script>
<style lang="scss" scoped>
.cms-d-detail {
  height: calc(100% - 28px);
  position: relative;
  h2 {
    color: #fff;
    text-align: center;
    display: block;
  }
  .ifas {
    height: calc(100% - 149px);
    width: 95%;
    margin: 20px auto;
    border: dotted 1px #e1ff0f;
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .cms-d-tags {
    text-align: center;
    .tg {
      display: inline-block;
      padding: 3px 7px;
      color: #333;
      background: #e1ff0f;
      font-style: italic;
      border-radius: 3px;
      margin: 3px 5px;
    }
  }
  .infor {
    display: flex;
    width: 90%;
    margin: 0 auto;
    .time {
      color: #fff;
      text-align: right;
      flex: 1;
    }
    .source {
      color: #fff;
      text-align: left;
      flex: 1;
    }
  }
  .d-hideinfo {
    position: absolute;
    width: 400px;
    height: calc(100% + 28px);
    background: rgba(0, 0, 0, 0.66);
    border-left: solid 1px #e1ff0f;
    padding: 20px 20px;
    top: -20px;
    right: 0px;
    .desc {
      b {
        color: #e1ff0f;
        font-size: 16px;
        display: inline-block;
        margin-bottom: 8px;
      }
      color: #fff;
      word-break: break-all;
      font-style: 14px;
    }
    .img {
      margin-top: 30px;
      b {
        color: #e1ff0f;
        font-size: 16px;
        display: inline-block;
        margin-bottom: 8px;
      }
      img {
        width: 100%;
      }
    }
    .el-icon-d-arrow-left,
    .el-icon-d-arrow-right {
      position: absolute;
      top: 50%;
      left: 2px;
      color: #e1ff0f;
      cursor: pointer;
    }
    &.hide {
      width: 10px;
      padding: 20px 10px;
      .desc,
      .img {
        display: none;
      }
    }
  }
}
</style>
<template>
  <div class="cms-d-detail" v-if="obj">
    <h2>{{obj.title}}</h2>
    <div class="cms-d-tags">
      <span class="tg" v-for="item in obj.tags" :key="item.id">{{item}}</span>
    </div>
    <div class="infor">
      <span class="source">来源单位：{{obj.source}}</span>
      <span class="time">发布时间：{{obj.time}}</span>
    </div>

    <div class="ifas-container">
      <div v-for="item in defaultsort" :key="item" style="height:100%;">
        <div style="position:relative;height:100%;">
          <div
            v-if="busy"
            style="text-align:center;z-index:99;position:absolute;top:0;left:0;width:100%;height:30px;background:rgba(0,0,0,0.33);font-size:14px;color:#fff;padding:0 0 0 10px;line-height:30px;"
          >正在获取文件，请稍候...</div>
          <div
            class="ifas"
            style="position:relative;height:100%;overflow:auto"
            v-if="item == 'nrwj' && fileurl"
          >
            <div
              class="imgs"
              v-infinite-scroll="loadMore"
              :infinite-scroll-disabled="busy"
              :infinite-scroll-distance="100"
            >
              <img v-for="(item, inx) in resimages" :key="inx" :src="item" alt />
            </div>
            <!-- <div
            style="background:rgb(50, 54, 57);width:100%;height:43px;position:absolute;z-index:0;left:0;top:0;"
            ></div>-->
            <!-- <embed ref="myiframe" :src="fileurl" style="width:100%;height:100%;"  oncontextmenu="return false;" onselectstart="return false;" /> -->
            <!-- <iframe
            @load="loadFile"
            :src="fileurl"
            width="100%"
            height="100%"
            marginwidth="0"
            marginheight="0"
            frameborder="0"
            ref="myiframe"
            ></iframe>-->
            <!-- <pdf
            v-for="i in numPages"
            :key="i"
            :src="loadTask"
            :page="i"
            style="display: block;margin:10px 0;"
            ></pdf>-->
          </div>
        </div>
        <div class="ifas" style="position:relative;height:100%;" v-if="item == 'spwj' && obj.video">
          <video controls="controls" :src="obj.video"></video>
        </div>

        <div
          class="ifas"
          style="position:relative;text-align:center;display:flex;align-items:center;justify-content: center;height:100%;"
          v-if="item == 'tpwj' && obj.pic"
        >
          <img
            :src="obj.pic"
            alt
            @click="dialogVisible=true"
            style="max-width:100%;max-height:100%;"
          />
        </div>
      </div>
    </div>

    <div class="d-hideinfo" :class="{hide: !showdesc}">
      <i @click="showdesc=true" class="el-icon-d-arrow-left" v-if="!showdesc"></i>
      <i @click="showdesc=false" class="el-icon-d-arrow-right" v-if="showdesc"></i>

      <div class="desc" v-if="obj.desc">
        <b>摘要：</b>
        <br />
        {{obj.desc}}
      </div>
      <!-- <div class="img" v-if="obj.pic">
        <b>图片：</b>
        <br />
        <img :src="obj.pic" alt @click="dialogVisible=true" />
      </div>-->
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
import { getPdfImage } from "@/api/cms";
import { Base64 } from "js-base64";

export default {
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
      dialogVisible: false,
      pages: 0,
      busy: false,
      resimages: [],
      isfirst: false
    };
  },
  methods: {
    loadIframe() {
      this.loadingword = false;
    },
    loadFile(url) {
      this.loadTask = pdf.createLoadingTask(url);
      this.loadTask.promise.then(pdf => {
        this.numPages = pdf.numPages;
      });
    },
    async loadMore() {
      this.busy = true;
      console.log("我是懒加载")
      let furl = this.obj.file;
      furl = Base64.encode(furl);
      let dataobj = await getPdfImage({ nrwj: furl, page: this.pages++ });
      if (dataobj.success == true) {
        this.resimages.push(dataobj.data);
        this.busy = false;
      } else {
        this.$message({
          message: dataobj.msg,
          type: "warning"
        });
      }
    },
    reset() {
      this.pages = 0;
      this.busy = false;
      this.resimages = [];
      this.isfirst = true;

      // if(this.isfirst){
      //   this.loadMore();
      //   this.isfirst = false;
      // }
    }
  },
  mounted() {},
  computed: {
    defaultsort() {
      if (this.obj && this.obj.sortstr && this.obj.sortstr != "") {
        let sortarr = [];
        let finx = this.obj.sortstr.indexOf("nrwj");
        let vinx = this.obj.sortstr.indexOf("spwj");
        let pinx = this.obj.sortstr.indexOf("tpwj");

        let arr = [];
        if (this.obj.file) {
          arr.push({ inx: finx, text: "nrwj" });
        }
        if (this.obj.video) {
          arr.push({ inx: vinx, text: "spwj" });
        }
        if (this.obj.pic) {
          arr.push({ inx: pinx, text: "tpwj" });
        }

        arr.sort((a, b) => {
          return a.inx - b.inx;
        });
        for (let a of arr) {
          sortarr.push(a.text);
        }
        return sortarr;
      } else if (this.obj) {
        let ifarr = [];
        if (this.obj.file) {
          ifarr.push("nrwj");
        }
        if (this.obj.video) {
          ifarr.push("spwj");
        }
        if (this.obj.pic) {
          ifarr.push("tpwj");
        }
        return ifarr;
      }
      return ["nrwj", "tpwj", "spwj"];
    },
    fileurl() {
      this.reset();
      if (this.obj.file) {
        // this.loadFile("/cms/webfile/" + this.obj.file);
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
    //       this.loadTask = pdf.createLoadingTask("/cms/webfile/" + this.obj.file);
    //       // console.log(this.loadTask)
    //       this.loadTask.promise.then(res => {
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
  .ifas-container {
    height: calc(100% - 149px);
    width: 100%;
    overflow: auto;
  }
  .ifas {
    height: calc(100% - 14px) !important;
    width: 95%;
    margin: 20px auto;
    border: dotted 1px #e1ff0f;
    video {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }
  .imgs {
    text-align: center;
    img {
      width: 60%;
    }
    //overflow: auto;
    //height:100%;
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
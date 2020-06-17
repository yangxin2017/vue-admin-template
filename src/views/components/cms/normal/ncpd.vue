<template>
  <div class="cms-panel">
    <div class="cms-panel-title">
      <span class="spe-title-font title" style="padding-right:8px" @click="chooseAll()">{{title}}</span>
      <div class="menu-con">
        <div ref="wrapperdom" class="wrapper">
          <ul class="menus" v-if="fldatas.length > 1">
            <li :class="index==curIndex ? 'sel' : ''" v-for="(item, index) in fldatas" :key="index">
              <a @click="chooseItem(item, index)">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="bot-line">
        <span class="dot1"></span>
        <span class="dot-line"></span>
        <span class="dot2"></span>
      </div>
    </div>
    <div class="cms-panel-content" v-loading="loading">
      <div class="lists" style="height:158px;">
        <div class="li" v-for="item in alldatas" :key="item.id">
          <div class="cms-text-com">
            <div class="title">
              <span class="sjx"></span>
              <router-link :to="item.link" target="_blank">
                <a>{{item.title}}</a>
              </router-link>
            </div>
            <div class="contents">
              <span class="source">{{item.source}}</span>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getContents, getDepts } from "@/api/cms";
import { NewsModel } from "@/model/cms/news";
export default {
  props: {
    data: {
      type: Array,
      default: []
    },
    title: {
      type: String,
      default: ""
    },
    fldatas: {
      type: Array,
      default: []
    },
    pid: {
      type: Number,
      default: -1
    },
    count: {
      type: Number,
      default: 6
    }
  },
  data() {
    return {
      curIndex: -1,
      alldatas: [],
      loading: false
    };
  },
  mounted() {
    this.initInfo(this.pid);
  },
  methods: {
    chooseAll() {
      this.curIndex = -1;
      this.initInfo(this.pid);
    },
    chooseItem(item, index) {
      this.curIndex = index;

      this.initInfo(item.id);
    },
    async initInfo(cid) {
      this.alldatas = [];
      this.loading = true;
      let res = await getContents({
        cid: cid,
        pagesize: this.count,
        containChild: true
      });
      if (res.data.length > 0) {
        let c = res.data[0];
        let tmp = new NewsModel(c);
        this.first = tmp;
        for (let i = 0; i < res.data.length; i++) {
          let tmp = new NewsModel(res.data[i]);
          this.alldatas.push(tmp);
        }
      }
      this.loading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.cfx {
  clear: both;
}
.cms-panel {
  padding: 0 0 0 10px;
}

.cms-panel-title {
  position: relative;
  .bot-line {
    position: absolute;
    left: 0px;
    bottom: -10px;
    width: 100%;
    height: 5px;
    display: flex;
    justify-content: space-around;
    .dot1 {
      background: url("../../../../assets/cms/content/mid_icons.png") no-repeat -16px -229px;
      width: 12px;
      height: 6px;
      display: block;
      margin-right: 3px;
      position: relative;
      top: -2px;
    }
    .dot-line {
      flex: 1;
      background: rgba(255, 255, 255, 0.6);
      height: 1px;
      margin-right: 3px;
    }
    .dot2 {
      background: url("../../../../assets/cms/content/mid_icons.png") no-repeat -586px -231px;
      width: 2px;
      height: 2px;
      display: block;
    }
  }
  background: url("../../../../assets/cms/content/icons.png") no-repeat -9px -11px;
  width: 100%;
  height: 26px;
  .title {
    font-size: 22px;
    font-weight: bold;
    padding-left: 20px;
    font-style: italic;
    float: left;
  }
  .menu-con {
    float: left;
    flex: 1;
    width: calc(100% - 200px);
  }
  .wrapper {
    overflow: hidden;
    width: calc(100% - 50px);
  }
  .menus {
    list-style: none;
    margin: 0px 0 0 0;
    padding: 6px 0 0 8px;
    white-space: nowrap;
    li {
      margin: 0 9px 0 0;
      display: inline-block;
      a {
        font-size: 14px;
        color: #fff;
        font-style: italic;
        font-weight: bold;
      }
      &.sel a {
        color: #14baf6;
      }
    }
  }
}
.lists {
  display: flex;
  margin: 20px 0 0 0;
  flex-flow: column;
  width: 100%;
  height: calc(100% - 18px);
  .li {
    padding: 0 0px 0 0;
    margin-bottom: 13px;
  }
}
.cms-text-com {
  .title {
    width: calc(100% - 148px);
    display: inline-block;
    .sjx {
      background: url("../../../../assets/cms/content/icons.png") no-repeat -11px -67px;
      width: 6px;
      height: 6px;
      float: left;
      position: relative;
      top: 7px;
      left: 6px;
    }
    a {
      font-size: 14px;
      color: #fff;
      margin-left: 8px;
      display: block;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .contents {
    width: 142px;
    text-align: right;
    display: inline-block;
    span {
      color: #b8d517;
      font-size: 12px;
      &.source {
        font-weight: bold;
      }
      &.time {
        margin-left: 11px;
      }
    }
  }
}
</style>

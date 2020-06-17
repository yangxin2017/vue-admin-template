<template>
  <div class="lists">
    <div class="li" v-for="item in data" :key="item.id">
      <div class="cms-text-com">
        <div class="title">
          <span class="sjx"></span>
          <router-link :to="item.link" target="_blank">
            <a :title="item.title">{{item.title}}</a>
          </router-link>
        </div>
        <div class="contents">
          <span class="source">{{item.source}}</span>
          <span class="time">{{item.time}}</span>
          <!-- {{item.source}} -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getContents } from "@/api/cms";
import { NewsModel } from "@/model/cms/news";

export default {
  props: {
    pid: {
      type: String,
      default: "-1"
    },
    cid: {
      type: Number,
      default: -1
    },
    count: {
      type: Number,
      default: 4
    },
    isgw: {
      type: String,
      default: "false"
    },
    lydw: {
      type: String,
      default: "-1"
    }
  },
  data() {
    return {
      data: []
    };
  },
  methods: {},
  mounted() {
    console.log(this.pid)
    let isGuanwang = this.isgw == "true" ? true : false;
    let lydw = this.lydw != "-1" ? this.lydw : undefined;

    getContents({
      cid: this.cid,
      pagesize: this.count,
      isgw: isGuanwang,
      lydw: lydw,
      containChild: true
    }).then(res => {
      for (let c of res.data) {
        let tmp = new NewsModel(c);
        this.data.push(tmp);
      }
    });
  }
};
</script>
<style lang="scss" scoped>
.lists {
  display: flex;
  margin: 12px 0 0 0;
  flex-flow: column;
  width: 100%;
  height: calc(100% - 18px);
  .li {
    padding: 0 0px 0 0;
    margin-bottom: 11px;
    margin-right: -5px;
    height: 18px;
    overflow: hidden;
  }
}
.cms-text-com {
  white-space: nowrap;
  .title {
    display: inline-block;
    width: calc(100% - 148px);
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
      margin-left: 7px;
      display: block;
      overflow: hidden;
      position: relative;
      top: 1px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
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
        margin-left: 1px;
      }
    }
  }
}
</style>

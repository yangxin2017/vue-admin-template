<template>
  <div>
    <div class="cms-footer">
      <div class="depts">
        <div class="dp" v-for="(item, index) in data" :key="index">
          <div :class="item.cls">
            <!-- <router-link :to="item.url" target="_blank"> -->
            <span @click="goWeb(item)">{{item.name}}</span>
            <!-- </router-link> -->
          </div>
        </div>
      </div>
      <div class="ixx">
        <span @click="showStatics()" class="stj"></span>
        <span @click="showtoday=true" class="sgx"></span>
        <span class="syj"></span>
      </div>
      <div class="copyright">
        <span>军委联合参谋部情报局·信息通信局主办</span>
        <span>情报分析中心承办</span>
        <span>报分析中心电话：0201-747407</span>
      </div>
    </div>
    <!-- <main-statics v-if="showstatics" v-on:hide="hideStatics"></main-statics> -->
    <!-- -->
    <div class="update-layer">
      <div class="layer" :class="{'hidelayer': !showtoday}">
        <div class="allnum">
          <span class="allnum-words">今日更新总量</span>
          <span class="allnum-num">{{total}}</span>
        </div>
        <div class="layer-list">
          <div v-for="item in datas" :key="item.id">
            <router-link :to="item.link">
              <span class="point"></span>
              <a class="n-title">{{item.title}}</a>
            </router-link>
          </div>
        </div>
        <img @click="showtoday=false" src="../../../../assets/cms/content/layer_close.png" alt />
      </div>
    </div>
  </div>
</template>
<script>
import { getDepts, getContents } from "@/api/cms";
import { NewsModel } from "@/model/cms/news";
import moment from "moment";
var mainstas = () => import("@/views/components/cms/mainstatics");

export default {
  components: {
    "main-statics": mainstas
  },
  data() {
    return {
      data: [],
      showstatics: false,
      //////////今日更新
      showtoday: false,
      datas: [],
      total: 0
    };
  },
  methods: {
    goWeb(item) {
      if (item && item.url) {
        window.open(item.url);
      }
    },
    showStatics() {
      this.showstatics = true;
      this.$emit("eventshowstatic", true);
    },
    hideStatics() {
      this.showstatics = false;
    }
  },
  mounted() {
    ////
    getDepts({}).then(res => {
      let i = 1;
      for (let d of res.data) {
        d.cls = "ic i" + i++;
      }
      this.data = res.data;
    });
    ///////
    let stime = moment(new Date())
      .subtract(1, "days")
      .format("YYYY-MM-DD 00:00:00");
    let etime = moment(new Date()).format("YYYY-MM-DD 23:59:59");
    getContents({ stime: stime, etime: etime }).then(res => {
      for (let c of res.data) {
        let tmp = new NewsModel(c);
        this.datas.push(tmp);
      }
      this.total = res.total;
    });
  }
};
</script>
<style lang="scss" scoped>
.update-layer {
  .layer {
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0px;
    background: #000;
    display: flex;
    align-items: center;
    color: #fff;
    &.hidelayer {
      display: none;
    }
  }

  .allnum {
    width: 227px;
    height: 100%;
    margin-left: 81px;
    display: flex;
    align-items: center;
    color: #fff;
  }
  .allnum-words {
    width: 159px;
    height: 42px;
    text-align: center;
    line-height: 38px;
    background-image: url(../../../../assets/cms/content/allnum_back.png);
    background-repeat: no-repeat;
    font-size: 18px;
    font-weight: bold;
  }
  .allnum-num {
    font-size: 50px;
    font-family: BE;
  }
  .layer-list {
    height: 100%;
    margin-left: 20px;
    font-size: 14px;
    flex: 1;
  }
  .layer-list a {
    color: #fff;
    text-decoration: none;
    display: inline-block;
    height: 25px;
    width: 250px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .layer-list a:hover {
    text-decoration: underline;
  }
  .point {
    width: 8px;
    height: 8px;
    display: inline-block;
    border: 0;
    border-radius: 8px;
    background-color: #ffff00;
    margin-right: 12px;
    position: relative;
    top: -5px;
  }
  .layer-list div {
    display: inline-block;
    line-height: 28px;
    margin-right: 25px;
  }
  .layer img {
    cursor: pointer;
    width: 25px;
    position: relative;
    top: -1px;
    margin-right: 20px;
  }
}

.cms-footer {
  width: 100%;
  display: flex;
  padding: 17px 30px 0 30px;
  justify-content: space-between;
  position: relative;
  margin-top: 15px;
  .depts {
    flex: 1;
    display: flex;
    position: relative;
    top: -12px;
  }
  .copyright {
    position: absolute;
    width: 100%;
    height: 29px;
    border-top: solid 1px #666;
    left: 0;
    bottom: -11px;
    text-align: center;
    line-height: 29px;
    span {
      font-size: 12px;
      color: #fff;
      margin: 0 15px;
    }
  }

  .ixx {
    background: url("../../../../assets/cms/content/statics.png") no-repeat 0px
      0px;
    width: 123px;
    height: 121px;
    position: relative;
    top: -18px;
    span {
      position: absolute;
      width: 46px;
      height: 37px;
      cursor: pointer;
      &.stj {
        left: 38px;
        top: 19px;
      }
      &.sgx {
        left: 11px;
        top: 67px;
      }
      &.syj {
        left: 66px;
        top: 67px;
      }
    }
  }
  .dp {
    flex: 1;
    text-align: center;
  }
  .ic {
    background: url("../../../../assets/cms/content/jhs.png") no-repeat 0 0;
    width: 105px;
    height: 117px;
    display: inline-block;
    span {
      font-family: zz;
      font-size: 16px;
      color: #fff;
      display: inline-block;
      width: 120px;
      text-align: center;
      margin: 93px 0 0 -9px;
      cursor: pointer;
    }
    &.i2 {
      background-position: -198px 0;
    }
    &.i3 {
      background-position: -396px 0;
    }
    &.i4 {
      background-position: -594px 0;
    }
    &.i5 {
      background-position: -792px 0;
    }
    &.i6 {
      background-position: -990px 0;
    }
    &.i7 {
      background-position: -1188px 0;
    }
    &.i8 {
      background-position: -1386px 0;
    }
    &.i9 {
      background-position: -1584px 0;
    }
    &.i10 {
      background-position: -1782px 0;
    }
    &.i11 {
      background-position: -1992px 0;
    }
    &.i12 {
      background-position: -2202px 0;
    }
  }
}
</style>

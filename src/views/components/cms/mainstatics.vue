<template>
    <div class="layer-analysis">
        <div class="an-layer">
            <div class="anlayer-title">
                <span>标题名称</span>
                <img src="../../../assets/cms/content/statics/anlayer_close.png" @click="$emit('hide')" class="close-dialog">
            </div>
            <div class="anlayer-num">
                <div class="anlayer-allnum">
                    <div class="allnum-title">总数据量</div>
                    <div class="allnum-nums">{{total}}</div>
                </div>
                <div class="anlayer-todaynum">
                    <div class="todaynum-title">今日更新</div>
                    <div class="todaynum-nums">{{today}}</div>
                </div>
            </div>
            <div class="anlayer-date">
                <div class="anlayer-select">
                    <span class="span-select-nor" style="top:-17px;">
                        <img src="../../../assets/cms/content/statics/analysis_down.png" alt="" style="top:9px;">
                        <span class="ss-txt" style="left:25px;color:#E1FF0F;"></span>
                        <select v-model="year" @change="changeyear" class="sel_change sel-years">
                            <option value="2019">2019年</option>
                            <option value="2020">2020年</option>
                            <option value="2021">2021年</option>
                            <option value="2022">2022年</option>
                            <option value="2023">2023年</option>
                            <option value="2024">2024年</option>
                        </select>
                    </span>
                </div>
                <div class="date">
                    <img @click="moveDateLeft()" style="cursor:pointer;" src="../../../assets/cms/content/statics/timeline_left.png" alt="">
                    <div class="dates">
                        <div class="line"></div>
                        <div class="linetimebox">
                            <div class="date">
                                <span @click="changemonth(item)" v-for="item in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="item" class="tldate" :class="{'select_line': (item >= smonth && item <= emonth)}" :data-val="item">{{item}}月</span>
                            </div>
                        </div>
                    </div>
                    <img @click="moveDateRight()" style="cursor:pointer;" src="../../../assets/cms/content/statics/timeline_right.png" alt="">
                </div>
            </div>
            <div class="anlayer-echarts">
                <div class="layer-left">
                    <div class="layer-leftT">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                数量统计
                            </span>
                            <div class="anylayer-select">
                                <span class="span-select-nor" style="top:-17px;">
                                    <img src="../../../assets/cms/content/statics/select_down.png" alt="">
                                    <span class="ss-txt" style="font-size:13px;"></span>
                                    <select v-model="dept1" @change="changetotal" class="sel_change select-dept sd1" style="font-size:13px;">
                                        <option v-for="item in depts" :value="item.id" :key="item.id">{{ item.name }}</option>
                                    </select>
                                </span>
                            </div>
                        </div>
                        <div class="echartL layer-echart1">
                            <div id="layer-echart1"></div>
                        </div>
                    </div>
                    <div class="layer-leftB">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                更新量统计
                            </span>
                            <div class="anylayer-select">
                                <span class="span-select-nor" style="top:-17px;">
                                    <img src="../../../assets/cms/content/statics/select_down.png" alt="">
                                    <span class="ss-txt" style="font-size:13px;"></span>
                                    <select v-model="dept2" @change="changeupdate" class="sel_change select-dept sd2" style="font-size:13px;">
                                        <option v-for="item in depts" :value="item.id" :key="item.id">{{ item.name }}</option>
                                    </select>
                                </span>

                            </div>
                        </div>
                        <div class="echartL layer-echart2">
                            <div id="layer-echart2"></div>
                        </div>
                    </div>
                </div>
                <div class="layer-center">
                    <div class="anylayer-title">
                        <span class="left-titname">
                            搜索词
                        </span>
                    </div>
                    <div class="echartC layer-echart3">
                        <div id="layer-echart3"></div>
                    </div>
                </div>
                <div class="layer-right">
                    <div class="layer-rightT">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                贡献排名
                            </span>
                        </div>
                        <div class="echartR layer-echart4">
                            <div id="layer-echart4"></div>
                        </div>
                    </div>
                    <div class="layer-rightB">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                热力排名
                            </span>
                        </div>
                        <div class="echartR layer-echart5">
                            <div id="layer-echart5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import { getCountStatics, getCateStatics, getWords, getRanks, getDepts } from '@/api/cms'
import 'echarts-wordcloud'

export default {
    data(){
        return {
            total: 0,
            today: 0,
            depts: [],
            year: 2020,
            smonth: 1,
            emonth: 12,
            //////////
            dept1: null,
            dept2: null,
            l1: null,
            l2: null,
            m1: null,
            r1: null,
            r2: null
        }
    },
    mounted(){
        this.l1 = this.$echarts.init(document.getElementById('layer-echart1'));
        this.l2 = this.$echarts.init(document.getElementById('layer-echart2'));
        this.m1 = this.$echarts.init(document.getElementById('layer-echart3'));
        this.r1 = this.$echarts.init(document.getElementById('layer-echart4'));
        this.r2 = this.$echarts.init(document.getElementById('layer-echart5'));

        getCountStatics({}).then(res => {
            this.total = res.data.total
            this.today = res.data.today
        })
        getDepts({}).then(res => {
            this.depts = res.data
            this.dept1 = this.depts[0].id
            this.dept2 = this.depts[0].id
            /////获取统计信息
            let stime = this.getStime()
            let etime = this.getEtime()

            this.m_m1();
            this.m_r1();
            this.m_r2();
            this.m_l1();
            this.m_l2();
            
        })
    },
    methods: {
        moveDateLeft(){
            this.smonth = Math.max(1, this.smonth - 1)
        },
        moveDateRight(){
            this.emonth = Math.main(12, this.emonth + 1)
        },
        changetotal(){
            this.m_l1()
        },
        changeupdate(){
            this.m_l2()
        },
        changeyear(){
            this.m_m1();
            this.m_r1();
            this.m_r2();
            this.m_l1();
            this.m_l2();
        },
        changemonth(m){
            if(m > this.smonth && m < this.emonth){
                this.emonth = m
            }else{
                if(m == this.smonth){
                    this.smonth ++
                }else if(m < this.smonth){
                    this.smonth = m
                }
                if(m == this.emonth){
                    this.emonth --
                }else if(m > this.emonth){
                    this.emonth = m
                }
            }
            this.changeyear()
        },
        //////
        getStime(){ return [this.year, this.smonth, 1].join('-') + ' 00:00:00' },
        getEtime(){ 
            var days = new Date(this.year, this.emonth, 0).getDate()
            return [this.year, this.emonth, days].join('-') + ' 00:00:00' 
        },
        m_l1(){
            let stime = this.getStime()
            let etime = this.getEtime()
            //左1
            this.l1.showLoading({text: '数据加载中...'});
            getCateStatics({deptId: this.dept1, etime: etime}).then(res => {
                this.l1.hideLoading();
                let data = res.data;
                if(data && data.length > 0){
                    let option = this.Chart1Option(data);
                    this.l1.setOption(option, true);
                }else{
                    let op = this.NodataOption();
                    this.l1.setOption(op, true);
                }
            }, "json");
        },
        m_l2(){
            let stime = this.getStime()
            let etime = this.getEtime()
            //左2
            this.l2.showLoading({text: '数据加载中...'});
            getCateStatics({deptId: this.dept2, stime: stime, etime: etime}).then(res => {
                this.l2.hideLoading();
                let data = res.data;
                if(data && data.length > 0){
                    let option = this.Chart1Option(data);
                    this.l2.setOption(option, true);
                }else{
                    let op = this.NodataOption();
                    this.l2.setOption(op, true);
                }
            }, "json");
        },
        m_m1(){
            let stime = this.getStime()
            let etime = this.getEtime()
            // 中间
            this.m1.showLoading({text: '数据加载中...'});
            getWords({stime: stime, etime: etime, pagesize: 100}).then(res => {
                this.m1.hideLoading();
                let data = res.data
                if(data && data.length > 0){
                    let option = this.Chart3Option(data);
                    this.m1.setOption(option, true);
                }else{
                    let op = this.NodataOption();
                    this.m1.setOption(op, true);
                }
            })
        },
        m_r1(){
            let stime = this.getStime()
            let etime = this.getEtime()
            // 右1
            this.r1.showLoading({text: '数据加载中...'})
            getRanks({hot: false, stime: stime, etime: etime}).then(res => {
                let data = res.data
                this.r1.hideLoading();
                if(data && data.length > 0){
                    let option = this.Chart4Option(data);
                    this.r1.setOption(option, true);
                }else{
                    let op = this.NodataOption();
                    this.r1.setOption(op, true);
                }
            })
        },
        m_r2(){
            let stime = this.getStime()
            let etime = this.getEtime()
            // 右2
            this.r2.showLoading({text: '数据加载中...'})
            getRanks({hot: true, stime: stime, etime: etime}).then(res => {
                let data = res.data
                this.r2.hideLoading();
                if(data && data.length > 0){
                    let option = this.Chart4Option(data);
                    this.r2.setOption(option, true);
                }else{
                    let op = this.NodataOption();
                    this.r2.setOption(op, true);
                }
            })
        },
        // charts left
        Chart1Option(lists){
            var leftDatas = {
                xdata: [],
                ydata: [],
            }
            for(let ld of lists){
                leftDatas.xdata.push(ld.name);
                leftDatas.ydata.push(ld.count);
            }
            var option = {
                grid: {
                    top: '5%',
                    right: '3%',
                    left: '10%',
                    bottom: '13%'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [{
                    type: 'category',
                    data: leftDatas.xdata,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }],
                yAxis: [{
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(255,255,255, 0.1)", "rgba(0,0,0,0)"]
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }],
                series: [{
                    type: 'bar',
                    data: leftDatas.ydata,
                    barWidth: '15px',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [8, 8, 0, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [{
                                    offset: 0, color: 'rgba(75,190,182,1)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(75,190,182,0)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }
                    }
                }]
            };
            return option;
        },

        NodataOption(){
            var option = {
                title: {
                    show: true,
                    textStyle:{
                        color:'grey',
                        fontSize:20
                    },
                    text: "没有数据显示",
                    left: 'center',
                    top: 'center'
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: false
                },
                series: []
            };
            return option;
        },
        // middle
        Chart3Option(lists){
            var datas = [];
            for(let ld of lists){
                datas.push({
                    name: ld.name,
                    value: ld.searchCount,
                });
            }
            var option = {
                tooltip: {
                    show: true
                },
                grid: {
                    top: '5%',
                    right: '5%',
                    left: '5%',
                    bottom: '5%'
                },
                series: [{
                    type: "wordCloud",
                    gridSize: 6,
                    sizeRange: [12, 50],
                    width: 800,
                    height: 500,
                    textStyle: {
                        normal: {
                            color: function () {
                                return 'rgb(' + [
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160),
                                    Math.round(Math.random() * 160)
                                ].join(',') + ')';
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: datas,
                }]
            };
            return option;
        },
        // right
        Chart4Option(lists){

            var rightDatas = {
                xdata: [],
                ydata: []
            }

            for(let ld of lists){
                rightDatas.xdata.push(parseInt(ld[1]));
                rightDatas.ydata.push(ld[0]);
            }
            rightDatas.xdata = rightDatas.xdata.reverse();
            rightDatas.ydata = rightDatas.ydata.reverse();

            var option3 = {
                grid: {
                    top: '5%',
                    right: '5%',
                    left: '26%',
                    bottom: '13%'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                xAxis: [{
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ["rgba(255,255,255, 0.1)", "rgba(0,0,0,0)"]
                        }
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }],
                yAxis: [{
                    type: 'category',
                    data: rightDatas.ydata,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    }
                }],
                series: [{
                    type: 'bar',
                    data: rightDatas.xdata,
                    barWidth: '15px',
                    itemStyle: {
                        normal: {
                            barBorderRadius: [0, 8, 8, 0],
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 1,
                                y2: 0,
                                colorStops: [{
                                    offset: 0, color: 'rgba(75,190,182,0)' // 0% 处的颜色
                                }, {
                                    offset: 1, color: 'rgba(75,190,182,1)' // 100% 处的颜色
                                }],
                                global: false // 缺省为 false
                            },
                        }
                    }
                }]
            };
            return option3;
        }
    }
};
</script>
<style lang="scss" scoped>
.left-titname {
  width: 94px;
  margin-left: 24px;
  background: -webkit-linear-gradient(top, #FFFFDF 16%, #E0FF0F);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
}
/* 页面统计分析弹层 */
.layer-analysis {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1080px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  display: block;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.an-layer {
  width: 1218px;
  height: 783px;
  background-image: url(../../../assets/cms/content/statics/anlayer_back.png);
  background-repeat: no-repeat;
  margin: 115px auto;
}
.anlayer-title {
  width: 1200px;
  height: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 9px 0px 0px 9px;
  background-image: url(../../../assets/cms/content/statics/anlayer_titback.png);
  background-repeat: no-repeat;
  padding: 4px 0 0 0;
}
.anlayer-title span {
  font-size: 30px;
  background: -webkit-linear-gradient(top, #FFFFDF 30%, #E0FF0F);
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  margin-left: 24px;
}
.anlayer-title img {
  margin-right: 10px;
  cursor: pointer;
}
.anlayer-num {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1200px;
  height: 109px;
  margin-left: 9px;
  background-image: url(../../../assets/cms/content/statics/anlayer_numback.png);
  background-repeat: no-repeat;
}
.anlayer-allnum, .anlayer-todaynum {
  width: 351px;
  height: 60px;
  display: flex;
  align-items: center;
  background-image: url(../../../assets/cms/content/statics/anlayer_num.png);
  background-repeat: no-repeat;
}
.allnum-title, .todaynum-title {
  width: 141px;
  height: 60px;
  font-size: 22px;
  text-align: center;
  line-height: 60px;
  font-weight:normal;
  font-family:ZZ;
  letter-spacing: 4px;
}
.allnum-nums, .todaynum-nums {
  width: 210px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 48px;
  color: #E1FF0F;
  font-family: BE;
}
.anlayer-date {
  display: flex;
  width: 1200px;
  height: 90px;
  margin-left: 9px;
}
.anlayer-select {
  height: 100%;
  display: flex;
  align-items: center;
  position:relative;
  width:100px;
}
.anlayer-select img{
  position:absolute;left:85px;
}
.sel-years{
  position:absolute;
  left:12px;top:36px;
  width:87px;height:20px;
  border:none;padding-left:15px;
  color:#F2DFA6;font-size:16px;font-weight:bold;
  background:transparent;
}
.sel-years option{
  background:#000;
}
.select-dept{
  position:absolute;
  left:8px;top:6px;
  width:101px;height:20px;
  border:none;padding-left:0px;
  color:#fff;font-size:13px;font-weight:bold;
  background:transparent;
}
.select-dept option{
 background:#000;
}
.date {
  position: relative;
  margin-left: 11px;
  display: flex;
  align-items: center;
}
.line {
  width: 999px;
  height: 1px;
  border-top: 1px dashed #E1FF0F;
  margin-left: 10px;
  margin-right: 5px;
}
.linetimebox {
  position: absolute;
  font-size: 16px;
  font-family: ZZ;
  top: 0px;
}
.tldate { 
  display: inline-block;
  width: 40px;
  height: 26px;
  border-bottom: 3px solid #fff;
  margin: 20px 22px 0 22px;
  text-align: center;
  cursor: pointer;
}
.select_line {
  color: #E1FF0F;
  border-bottom: 3px solid #E1FF0F;
}
.anlayer-echarts {
  display: flex;
  width: 1200px;
  height: auto;
  margin-left: 9px;
}
.anylayer-title {
  display: flex;
  background-image: url(../../../assets/cms/content/statics/titleback.png);
  background-repeat: no-repeat;
  height: 40px;
}
.layer-center {
  width: 495px;
  margin-left: 14px;
}
.layer-left, .layer-right {
  width: 317px;
  margin-left: 19px
}
.layer-right {
  margin-left: 14px;
}
.anylayer-select {
  width: 115px;
  height: 34px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url(../../../assets/cms/content/statics/layer_select.png);
  background-repeat: no-repeat;
  margin-left: 64px;
  margin-top: -6px;
  position:relative;
}
.echartL {
  width: 317px;
  height: 186px;
  background-image: url(../../../assets/cms/content/statics/layer_left.png);
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.echartC {
  width: 495px;
  height: 444px;
  background-image: url(../../../assets/cms/content/statics/layer_center.png);
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
}
.echartR {
  width: 317px;
  height: 186px;
  background-image: url(../../../assets/cms/content/statics/layer_right.png);
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.layer-leftB, .layer-rightB {
  margin-top: 32px;
}
.layer-icon{
  width: 16px;
  height: 12px;
  margin-top: 10px;
  margin-left: 170px;
}

#layer-echart1, #layer-echart2, #layer-echart4, #layer-echart5 {
  width: 300px;
  height: 156px;
}
#layer-echart3 {
  width: 480px;
  height: 400px;
}

.charts-list{
  margin-top:80px;
  overflow:hidden;
}
.charts-list .cl-md{
  float:left;width:50%;
}
.charts-list .cl-md span{
  font-size:18px;font-weight:bold;color:#fff;
}
.charts-list .cl-md .cl-chart{
  width:100%;height:300px;
  margin:10px 0;
}
.no-data{font-size:16px;color:#ccc;}
.sea-page .title-search{height:52px;width:214px;}
.sea-page .title-search *{display:none;}


.span-select-nor{
  display: inline-block;
  width: 123px;
  position: relative;
  top: -4px;
}
.span-select-nor .sel_change{
  position:absolute;width:171px;height:30px;
  appearance:none;
  color:#fff;
  font-weight:bold;
  font-size:16px;
  left: 11px;
  top: 2px;
  border: none;
  width:100%;
  outline:none;
  margin:0 !important;padding:0 !important;
}
.span-select-nor .ss-txt{
  position:absolute;
  left: 13px;
  top: 9px;
  color:#fff;
  font-weight:bold;
  font-size:16px;
}
.span-select-nor img{
  position:absolute;
  right: 13px;
  top: 14px;
}
.span-select-nor .sel_change option{
  background:#000;
}
.video video{
  object-fit: fill;
  width: 405px;
  height: 200px;
  position: relative;
  top: -5px;
  left: -2px;
}
</style>

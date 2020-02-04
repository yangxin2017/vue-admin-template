<template>
    <div class="layer-analysis">
        <div class="an-layer">
            <div class="anlayer-title">
                <span>标题名称</span>
                <img src="../../../assets/cms/content/statics/anlayer_close.png" class="close-dialog">
            </div>
            <div class="anlayer-num">
                <div class="anlayer-allnum">
                    <div class="allnum-title">总数据量</div>
                    <div class="allnum-nums">100</div>
                </div>
                <div class="anlayer-todaynum">
                    <div class="todaynum-title">今日更新</div>
                    <div class="todaynum-nums">90</div>
                </div>
            </div>
            <div class="anlayer-date">
                <div class="anlayer-select">
                    <span class="span-select-nor" style="top:-17px;">
                        <img src="../../../assets/cms/content/statics/analysis_down.png" alt="" style="top:9px;">
                        <span class="ss-txt" style="left:25px;color:#E1FF0F;"></span>
                        <select class="sel_change sel-years">
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
                    <img src="../../../assets/cms/content/statics/timeline_left.png" alt="">
                    <div class="dates">
                        <div class="line"></div>
                        <div class="linetimebox">
                            <div class="date">
                                <span class="tldate select_line" data-val="1">1月</span>
                                <span class="tldate select_line" data-val="2">2月</span>
                                <span class="tldate select_line" data-val="3">3月</span>
                                <span class="tldate select_line" data-val="4">4月</span>
                                <span class="tldate select_line" data-val="5">5月</span>
                                <span class="tldate select_line" data-val="6">6月</span>
                                <span class="tldate select_line" data-val="7">7月</span>
                                <span class="tldate select_line" data-val="8">8月</span>
                                <span class="tldate select_line" data-val="9">9月</span>
                                <span class="tldate select_line" data-val="10">10月</span>
                                <span class="tldate select_line" data-val="11">11月</span>
                                <span class="tldate select_line" data-val="12">12月</span>
                            </div>
                        </div>
                    </div>
                    <img src="../../../assets/cms/content/statics/timeline_right.png" alt="">
                </div>
            </div>
            <div class="anlayer-echarts">
                <div class="layer-left">
                    <div class="layer-leftT">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                标题名称
                            </span>
                            <div class="anylayer-select">
                                <span class="span-select-nor" style="top:-17px;">
                                    <img src="../../../assets/cms/content/statics/select_down.png" alt="">
                                    <span class="ss-txt" style="font-size:13px;"></span>
                                    <select class="sel_change select-dept sd1" style="font-size:13px;">
                                        <option value="">单位123</option>
                                        <option value="">单位123</option>
                                        <option value="">单位123</option>
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
                                标题名称
                            </span>
                            <div class="anylayer-select">
                                <span class="span-select-nor" style="top:-17px;">
                                    <img src="../../../assets/cms/content/statics/select_down.png" alt="">
                                    <span class="ss-txt" style="font-size:13px;"></span>
                                    <select class="sel_change select-dept sd2" style="font-size:13px;">
                                        <option value="">单位123</option>
                                        <option value="">单位123</option>
                                        <option value="">单位123</option>
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
                            标题名称
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
                                标题名称
                            </span>
                        </div>
                        <div class="echartR layer-echart4">
                            <div id="layer-echart4"></div>
                        </div>
                    </div>
                    <div class="layer-rightB">
                        <div class="anylayer-title">
                            <span class="left-titname">
                                标题名称
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
export default {
    methods: {
        // charts left
        Chart1Option(lists){
            var leftDatas = {
                xdata: [],
                ydata: [],
            }
            for(let ld of lists){
                leftDatas.xdata.push(ld[2]);
                leftDatas.ydata.push(ld[0]);
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
  margin: 17px 22px 0 22px;
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
  background:transparent;
  color:#fff;
  font-weight:bold;
  font-size:16px;
  left: 6px;
  top: 2px;
  border: none;
  opacity: 0;
  width:100%;
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

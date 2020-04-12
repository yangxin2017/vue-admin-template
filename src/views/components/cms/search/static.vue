<template>
    <div class="cms-statics">
        <div v-if="datas">
            <p class="s-line" v-if="datas.top">
                <span class="tx">上一名</span>
                <span class="num">{{datas.top.count}}</span>
                <span class="dw">条</span>
            </p>
            <div class="cur">
                <p class="s-line">
                    <span class="tx">数据总量</span>
                    <span class="num">{{datas.cur.count}}</span>
                    <span class="dw">条</span>
                </p>
                <p class="s-line">
                    <span class="tx">当前排名</span>
                    <span class="num">{{datas.cur.pm}}</span>
                    <span class="dw">名</span>
                </p>
                <p class="s-line">
                    <span class="tx">今日更新</span>
                    <span class="num">{{todaycount}}</span>
                    <span class="dw">条</span>
                </p>
            </div>
            <p class="s-line">
                <span class="tx">下一名</span>
                <span class="num">{{datas.next.count}}</span>
                <span class="dw">条</span>
            </p>
        </div>

        <div class="charts">
            <div id="s-ch1" class="ch" style="margin-right:30px;">
            </div>
            <div id="s-ch2" class="ch">
            </div>
        </div>
    </div>    
</template>
<script>

import { getDepts, getCateStatics, getDeptCount } from '@/api/cms'
import moment from 'moment'

export default {
    data(){
        return {
            datas: null,
            todaycount: 0,
            sch1: null,
            sch2: null
        }
    },
    methods: {
        setTodayCount(id){
            let stime = moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD 00:00:00');
            let etime = moment(new Date()).format('YYYY-MM-DD 23:59:59');
            getDeptCount({deptId: id, stime: stime, etime: etime}).then(res => {
                this.todaycount = res.data
            })
        },
        initContent(params){
            this.datas = params
            let deptid = params.cur.deptid
            this.setTodayCount(deptid)
            /////////
            if(!this.sch1){
                this.sch1 = this.$echarts.init(document.getElementById('s-ch1'))
            }
            if(!this.sch2){
                this.sch2 = this.$echarts.init(document.getElementById('s-ch2'))
            }
            /////////
            let stime = moment(new Date()).subtract(1, 'months').format('YYYY-MM-DD HH:mm:ss');
            let etime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
            this.sch1.showLoading({text: '正在加载数据中'});
            getCateStatics({deptId: deptid}).then(res => {
                let datas1 = []
                for(let d of res.data){
                    datas1.push({ key:  d.name, val: d.count})
                }
                this.sch1.hideLoading()
                this.drawBar('s-ch1', '各类目数量统计', datas1)
            })  
            this.sch2.showLoading({text: '正在加载数据中'});
            getCateStatics({deptId: deptid, stime: stime, etime: etime}).then(res => {
                let datas2 = []
                for(let d of res.data){
                    datas2.push({ key:  d.name, val: d.count})
                }
                this.sch2.hideLoading()
                this.drawBar('s-ch2', '本月各类目更新统计', datas2)
            })
        },
        drawBar(id, title, datas){

            let xz = [];
            let ds = [];
            for(let d of datas){
                xz.push(d.key);
                ds.push(d.val);
            }

            let myChart = id == 's-ch1' ? this.sch1 : this.sch2
            if(datas.length <= 0){
                myChart.setOption(this.nodataoption(title), true)
            }else{
                // 绘制图表
                myChart.setOption({
                    title: {
                        text: title,
                        textStyle: {color: '#fff'}
                    },
                    color: [{
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: '#CBA452' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(181,142,63,0)' // 100% 处的颜色
                        }]
                    }],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true,
                        borderColor: '#fff'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: xz,
                            axisTick: {
                                alignWithLabel: true
                            },
                            axisLabel: {color: '#fff'},
                            axisLine: {lineStyle: {color: '#fff'}},
                            splitLine: {show: false}
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            axisLabel: {color: '#fff'},
                            axisLine: {lineStyle: {color: '#8191A4'}},
                            splitLine: {show: false},
                            splitArea: {show: true, areaStyle: {color: ['rgba(200,200,200,0)', 'rgba(250,250,250,0.1)']}}
                        }
                    ],
                    series: [
                        {
                            name: '各类目数量',
                            type: 'bar',
                            // barWidth: 50,
                            data: ds,
                            itemStyle: {
                                barBorderRadius: [35, 35, 0, 0]
                            }
                        }
                    ]
                }, true);
            }
        },
        nodataoption(title){
            var option = {
                title: [
                    {
                        text: title,
                        textStyle: {color: '#fff'}
                    }
                    ,{
                    show: true,
                    textStyle:{
                        color:'grey',
                        fontSize:20
                    },
                    text: "没有数据显示",
                    left: 'center',
                    top: 'center'
                }],
                xAxis: {
                    show: false
                },
                yAxis: {
                    show: false
                },
                series: []
            };
            return option;
        }
    },
    mounted(){
        
    }
}
</script>
<style lang="scss" scoped>
.cms-statics{
    .s-line{
        display:inline-block;
        .tx{display:inline-block;width:110px;font-size:14px;color:#fff;}
        .dw{display:inline-block;width:110px;font-size:14px;color:#fff;}
        .num{display:inline-block;width:170px;text-align:right;margin-right:20px;font-size:32px;font-weight:bold;color:#E1FF0F;}
    }
    .cur{
        .tx{font-size:20px;}
        .num{font-size:40px;}
    }
    .charts{
        width:100%;display:flex;margin-top:40px;
        .ch{
            flex:1;
            height:300px;background:rgba(0,0,0,0.3);
        }
    }
}
</style>

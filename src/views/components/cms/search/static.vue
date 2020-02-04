<template>
    <div class="cms-statics">
        <p class="s-line">
            <span class="tx">上一名</span>
            <span class="num">3289</span>
            <span class="dw">条</span>
        </p>
        <div class="cur">
            <p class="s-line">
                <span class="tx">数据总量</span>
                <span class="num">3273</span>
                <span class="dw">条</span>
            </p>
            <p class="s-line">
                <span class="tx">当前排名</span>
                <span class="num">3273</span>
                <span class="dw">名</span>
            </p>
            <p class="s-line">
                <span class="tx">今日更新</span>
                <span class="num">3273</span>
                <span class="dw">条</span>
            </p>
        </div>
        <p class="s-line">
            <span class="tx">上一名</span>
            <span class="num">3289</span>
            <span class="dw">条</span>
        </p>

        <div class="charts">
            <div id="s-ch1" class="ch" style="margin-right:30px;">
            </div>
            <div id="s-ch2" class="ch">
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    methods: {
        drawBar(id, title){
            let datas = [
                {key: '板块1', val: 100 },
                {key: '板块2', val: 300 },
                {key: '板块3', val: 500 },
                {key: '板块4', val: 600 },
                {key: '板块5', val: 700 },
                {key: '板块6', val: 800 }
            ];

            let xz = [];
            let ds = [];
            for(let d of datas){
                xz.push(d.key);
                ds.push(d.val);
            }

            let myChart = this.$echarts.init(document.getElementById(id))
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
                        barWidth: '60%',
                        data: ds,
                        itemStyle: {
                            barBorderRadius: [35, 35, 0, 0]
                        }
                    }
                ]
            });
        }
    },
    mounted(){
        this.drawBar('s-ch1', '各类目数量统计');
        this.drawBar('s-ch2', '本月各类目更新统计');
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

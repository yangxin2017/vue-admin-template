<template>
    <div class="cms-bg">
        <comrender :html="head" />
        <div class="cms-s-con">
            <div class="cms-s-left">
                <search-one :keywords="keyword" :cates="cates" @searchContent="searchList($event)"></search-one>
            </div>
            <div class="cms-s-right">
                <res-one v-for="item in resultList" :key="item.inx" :pas="item.param" :uuid="item.inx" @closepanel="hidethis($event)"></res-one>
            </div>
        </div>
    </div>
</template>
<script>
import comrender from '@/views/components/render'
import { getSearchs, getCategorys } from '@/api/cms'
var searchone = () => import('@/views/components/cms/search/searchone')
var resone = () => import('@/views/components/cms/search/resone')

export default {
    components: {
        comrender: comrender,
        'search-one': searchone,
        'res-one': resone
    },
    data(){
        return {
            head: `<detail-head></detail-head>`,
            cates: [],
            resultList: [],
            inx: 1,
            keyword: ''
        }
    },
    methods: {
        searchList(params){
            this.resultList.push({
                param: params,
                inx: this.inx++
            })
        },
        hidethis(uuid){
            this.resultList = this.resultList.filter((v) => {
                return v.inx != uuid
            })
        }
    },
    mounted(){
        this.keyword = this.$route.query.word;
        let cates = this.$store.state.cms.categorys

        //getCategorys({}).then(res => {
        cates = cates.filter((d)=>{return d.show == true;})
        let tmp = [{name: '全部', id: -1}, ...cates]
        this.cates = tmp
        //})
    }
}
</script>
<style lang="scss" scoped>
.cms-bg{
    background:#010E04;
    width:100%;height:100%;
    background-size:100% 100%;
    .cms-s-con{
        width:95%;height:calc(100% - 95px);margin:10px auto;display:flex;
        .cms-s-left{
            width:540px;margin-right:30px;
        }
        .cms-s-right{
            flex:1;height:100%;
        }
    }
}
</style>
<style lang="scss">
input{
    outline:none;
}
.spe-font{
    font-size:46px;color:#fff;
}
.spe-title-font{
    font-family:'微软雅黑';
    background-image:-webkit-linear-gradient(top,#ffffff,#E0FF0F); 
    background-clip:text;
    -webkit-text-fill-color:transparent;
    -webkit-text-shadow:1px 1px 4px #ccc;
}

.inp-times{
    display:flex;
    .line{
        width:30px;margin:0 15px;height:13px;border-bottom:solid 1px #ccc;
    }
    .el-input{
        background:transparent !important;width:100%;flex:1;
        input{
            background:transparent !important;border:solid 1px #556108;height:30px;width:100%;
            padding:0 5px;border-radius:0;color:#fff;
        }
        .el-input__prefix{
            display:none;
        }
        .el-input__suffix{
            top:-4px;
        }
    }
}

.cms-d-pages{
    text-align:center;
    .btn-prev,.btn-next{
        background:transparent !important;
        color:#CBA452 !important;
    }
    .el-pager{
        .number,.more{
            background:transparent !important;
            color:#CBA452 !important;
            &.active{
              background:#CBA452 !important;
              color:#fff !important;
            }
        }
    }
}
</style>


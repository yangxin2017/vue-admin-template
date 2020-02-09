<template>
    <div class="cms-bg">
        <comrender :html="head" />
        <div class="cms-s-con">
            <div class="cms-s-left">
                <search-ptone @searchContent="searchList($event)"></search-ptone>
                <div class="tabs" v-if="viewtype">
                    <ul>
                        <li @click="changetype('text')" :class="{sel: viewtype=='text'}">网页</li>
                        <li @click="changetype('event')" :class="{sel: viewtype=='event'}">事件关联</li>
                    </ul>
                </div>
                <res-ptone @showtags="settagids($event)" ref="rlists" :class="{'cms-hide': viewtype=='event'}"></res-ptone>
                <res-timeline ref="rtimelists" :class="{'cms-hide': viewtype=='text'}"></res-timeline>
            </div>
            <div class="cms-s-right">
                <rg-tags ref="taglists"></rg-tags>
                <rg-links></rg-links>
            </div>
        </div>
    </div>
</template>
<script>
import comrender from '@/views/components/render'
var searchptone = () => import('@/views/components/cms/search/searchptone')
var resptone = () => import('@/views/components/cms/search/resptone')
var rgtags = () => import('@/views/components/cms/search/rgtags')
var rglinks = () => import('@/views/components/cms/search/rglinks')
var restimeline = () => import('@/views/components/cms/search/restimeline')
var statics = () => import('@/views/components/cms/search/static')

export default {
    components: {
        comrender: comrender,
        'search-ptone': searchptone,
        'res-ptone': resptone,
        'rg-tags': rgtags,
        'rg-links': rglinks,
        'res-timeline': restimeline,
        'statics': statics
    },
    methods: {
        searchList(pas){
            this.params = pas
            this.$refs.rlists.initContent(pas)
        },
        changetype(type){
            this.viewtype = type
        },
        settagids(ids){
            console.log(this.$refs)
            this.$refs.taglists.setTags(ids)
        }
    },
    data(){
        return {
            head: `<detail-head></detail-head>`,
            viewtype: 'text',
            params: {},
            tagids: '',

            links: ``,
            timeline: ``,
            statics: `<statics></statics>`
        }
    }
}
</script>
<style lang="scss" scoped>
.cms-bg{
    background:#010E04;
    width:2560px;height:1080px;
    background-size:100% 100%;
    .cms-s-con{
        width:95%;height:calc(100% - 95px);margin:10px auto;display:flex;
        .cms-s-left{
            width:1300px;margin-right:30px;
        }
        .cms-s-right{
            flex:1;height:100%;
        }
    }
}
.tabs{
    border-bottom:dotted 1px #ccc;
    ul{
        list-style:none;margin:21px 0 0 0;padding:0;width:100%;
        display:flex;position:relative;top:2px;
        li{
            margin:0 20px 0 0;width:70px;text-align:center;cursor:pointer;
            border-bottom:solid 3px #CCCCCC;font-size:16px;color:#fff;
            &.sel{
                border-color:#CBA452;
            }
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
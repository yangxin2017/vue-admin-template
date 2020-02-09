<template>
    <div class="cms-bg">
        <comrender :html="head" />
        <div class="cms-d-content" v-if="content">
            <div class="cms-d-left">
                <!-- <comrender :html="left" /> -->
                <detail-left @changeContent="changeContent($event)" :cid="content.cid" :contentId="content.id"></detail-left>
            </div>
            <div class="cms-d-right">
                <detail-right :obj="content"></detail-right>
            </div>
        </div>
    </div>
</template>
<script>

import comrender from '@/views/components/render'
import { getContent, getCategorys, getTags } from '@/api/cms'
var detailleft = () => import('@/views/components/cms/detail/detailleft')
var detailright = () => import('@/views/components/cms/detail/detailright')

export default {
    components: {
        comrender: comrender,
        'detail-left': detailleft,
        'detail-right': detailright
    },
    data(){
        return {
            contentId: -1,
            head: `<detail-head></detail-head>`,
            content: false
        }
    },
    methods: {
        changeContent(id){
            this.contentId = id
            this.initContent()
        },
        initContent(){
            getContent({id: this.contentId}).then(res => {
                let caid = res.data.categoryId

                let c = res.data
                let tmp = {
                    id: c.id, title: c.title,
                    cid: c.categoryId,
                    time: this.$moment(c.publishDate).format("YYYY-DD-MM"),
                    clicks: c.clicks,
                    source: c.lydwmc,
                    desc: c.description,
                    pic: c.tpwj ? '/cms/webfile/' + c.tpwj : false,
                    video: c.spwj ? '/cms/webfile/' + c.spwj : false,
                    tags: []
                }

                let tagid = c.tagIds.split(' ').join(',')
                getTags({ids: tagid}).then(restags => {
                    tmp.tags = restags.data ? restags.data : []

                    this.content = tmp
                })
                
            })
        }
    },
    mounted(){
        this.contentId = this.$route.query.id;
        this.initContent()
    }
}
</script>
<style lang="scss" scoped>
.cms-bg{
    background:#010E04;
    width:2560px;height:1080px;
    background-size:100% 100%;
}
.cms-d-content{
    border:solid 1px #B9D717;
    width:99%;height:calc(100% - 95px);
    margin:10px auto;display:flex;
    
    .cms-d-left{
        border:solid 1px #B9D717;
    }
    .cms-d-right{
        flex: 1
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

.cms-select{
    background:url('../../../assets/cms/detail/icons_detail.png') no-repeat -4px -5px;
    width:186px;height:35px;cursor:pointer;position:relative;display:block;
    select{
        position:absolute;left:0px;top:-2px;
        width:100%;height:100%;background:transparent;
        color:#fff;font-size:18px;color:#ebebeb;
        border:none;
        option{
            background:#000;
        }
        padding:0 0 0 10px;appearance:none;
    }
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

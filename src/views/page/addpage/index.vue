<template>
<div class="my-container">
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>添加页面</span>
        </div>
        <el-form :model="pageform" class="demo-form-inline">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="页面名称">
                        <el-input v-model="pageform.title" placeholder="页面名称"></el-input>
                    </el-form-item>
                    <el-form-item label="页面路径">
                        <el-input v-model="pageform.path" placeholder="页面路径"></el-input>
                    </el-form-item>
                    <el-form-item label="分辨率">
                        <el-select style="width:100%" v-model="pageform.pagewidth" placeholder="请选择">
                            <el-option v-for="(item, index) in pageWidths" :label="item.width" :value="item.width" :key="index"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="页面描述">
                        <el-input v-model="pageform.desc" type="textarea" :rows="2" placeholder="页面描述"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <p style="margin:10px 0;"><span style="font-size:14px;">页面参数设置</span></p>
                    <el-form-item v-for="(item,index) in pageform.params" :label="'参数' + (index + 1)" :key="index">
                        <el-row :gutter="10" style="width:100%">
                            <el-col :span="6">
                                <el-input v-model="item.cname" placeholder="中文名称"></el-input>
                            </el-col>
                            <el-col :span="6">
                                <el-input v-model="item.ename" placeholder="英文名称"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-select v-model="item.require" placeholder="是否必须">
                                    <el-option label="是" :value="true"></el-option>
                                    <el-option label="否" :value="false"></el-option>
                                </el-select>
                            </el-col>
                            <el-col :span="4">
                                <el-button type="danger" size="small" icon="el-icon-delete" circle @click="removeParam(item)"></el-button>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <div class="addpanel">
                        <el-button type="primary" size="small" @click="addParam()">添加参数</el-button>
                    </div>
                </el-col>
            </el-row>
        
            
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-form-item>
        </el-form>
    </el-card>
    
</div>    
</template>
<script>
import { ProPage, ProParam, ListPageWidth } from '@/model/page/propage'

export default {
    data(){
        return {
            pageform: new ProPage('', '', '', '', '', []),
            pageWidths: ListPageWidth
        }
    },
    mounted(){
        console.log(ListPageWidth)
    },
    methods: {
        onSubmit(){
            console.log(this.pageform)
        },
        addParam(){
            let p = new ProParam('', '', true, '')
            this.pageform.params.push(p)
        },
        removeParam(item){
            this.pageform.remove(item)
        }
    }
}
</script>
<style lang="scss" scoped>
.my-container{
    padding:20px;
}
.addpanel{
    padding:5px 15px;
    background:#eee;
    text-align:right;
}
</style>
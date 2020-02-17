<template>
  <div>
    <el-row>
      <el-col :span="20">
        <grid-layout
          :layout.sync="layout"
          :col-num="12"
          :row-height="5"
          :is-draggable="true"
          :is-resizable="true"
          :is-mirrored="false"
          :vertical-compact="true"
          :margin="[10, 10]"
          :use-css-transforms="false"
        >

          <grid-item
            v-for="item in layout"
            :key="item.i"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
          >
            <el-card shadow="hover" class="card-box no-pad" @drop.native="dropHandle($event, item)" @dragover.native="allowDrop($event)">
              <div class="card-dv">
                <comrender :html="item.template" />
                <p class="btns">
                  <i class="el-icon-edit"></i>
                  <i class="el-icon-delete" @click="delCard(item)"></i>
                </p>
              </div>
            </el-card>
          </grid-item>
        </grid-layout>
      </el-col>
      <el-col :span="4">
        <div class="list-components">
          <el-card
            v-for="item in mcoms"
            :key="item.id"
            shadow="hover"
            class="com-box"
          >
            <div draggable="true" @dragstart="dragStart($event, item)">
              {{ item.name }}
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import VueGridLayout from 'vue-grid-layout'
import comrender from '@/views/components/render'

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    comrender: comrender
  },
  data() {
    return {
      layout: [
        { 'x': 0, 'y': 0, 'w': 4, 'h': 7, 'i': '0', template: '' },
        { 'x': 4, 'y': 0, 'w': 4, 'h': 7, 'i': '1', template: '' },
        { 'x': 8, 'y': 0, 'w': 4, 'h': 7, 'i': '2', template: '' },
        { 'x': 0, 'y': 7, 'w': 4, 'h': 6, 'i': '3', template: '' },
        { 'x': 0, 'y': 13, 'w': 4, 'h': 5, 'i': '4', template: '' },
        { 'x': 4, 'y': 7, 'w': 4, 'h': 11, 'i': '5', template: '' },
        { 'x': 8, 'y': 7, 'w': 4, 'h': 6, 'i': '6', template: '' },
        { 'x': 8, 'y': 13, 'w': 4, 'h': 5, 'i': '7', template: '' }
      ],
      mcoms: [
        { id: 1, name: '1', img: '', comtag: '', params: '' },
        { id: 2, name: '2', img: '', comtag: '', params: '' },
        { id: 3, name: '3', img: '', comtag: '', params: '' },
        { id: 4, name: '4', img: '', comtag: '', params: '' },
        { id: 5, name: '5', img: '', comtag: '', params: '' },
        { id: 6, name: '6', img: '', comtag: '', params: '' }
      ]
    }
  },
  methods: {
    delCard(item){
      this.layout = this.layout.filter((v) => { return v.i != item.i })
    },
    allowDrop(event) {
      event.preventDefault()
    },
    dropHandle(event, item) {
      const dragDataStr = event.dataTransfer.getData('data')
      const dragData = JSON.parse(dragDataStr)
      item.template = `<detail-head></detail-head>`
      console.log(item)
    },
    dragStart(event, item) {
      event.dataTransfer.setData('data', JSON.stringify(item))
    }
  }
}
</script>
<style lang="scss">
.no-pad{
  .el-card__body{
    padding:0;
  }
}
.vue-resizable-handle{
  color:#f00;
}
</style>
<style scoped lang="scss">
.card-box{
    height: 100%;
}
.list-components{
	border-left:solid 1px #ddd;
	padding:20px 10px;
	height:100%;
	.com-box{
		margin:0 0 10px 0;
		height:100px;
	}
}
.card-dv{
  position:relative;
  .btns{
    margin:0;
    position:absolute;
    right:5px;top:5px;
    i{
      cursor: pointer;margin-left:5px;
      &:hover{
        color:#f00;
      }
    }
  }
}
</style>

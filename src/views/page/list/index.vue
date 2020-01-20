<template>
  <div>
    <el-row>
      <el-col :span="20">
        <grid-layout
          :layout.sync="layout"
          :col-num="12"
          :row-height="30"
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
            <el-card shadow="hover" class="card-box" @drop.native="dropHandle($event, item)" @dragover.native="allowDrop($event)">
              <div>{{ item.i }}
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
              <comrender html="<com-one mes='asf' />" />
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
        { 'x': 0, 'y': 0, 'w': 4, 'h': 7, 'i': '0' },
        { 'x': 4, 'y': 0, 'w': 4, 'h': 7, 'i': '1' },
        { 'x': 8, 'y': 0, 'w': 4, 'h': 7, 'i': '2' },
        { 'x': 0, 'y': 7, 'w': 4, 'h': 6, 'i': '3' },
        { 'x': 0, 'y': 13, 'w': 4, 'h': 5, 'i': '4' },
        { 'x': 4, 'y': 7, 'w': 4, 'h': 11, 'i': '5' },
        { 'x': 8, 'y': 7, 'w': 4, 'h': 6, 'i': '6' },
        { 'x': 8, 'y': 13, 'w': 4, 'h': 5, 'i': '7' }
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
    allowDrop(event) {
      event.preventDefault()
    },
    dropHandle(event, item) {
      const dragDataStr = event.dataTransfer.getData('data')
      const dragData = JSON.parse(dragDataStr)
      console.log(item, dragData)
    },
    dragStart(event, item) {
      event.dataTransfer.setData('data', JSON.stringify(item))
    }
  }
}
</script>

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
</style>

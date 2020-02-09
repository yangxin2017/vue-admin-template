<script>
import Vue from 'vue'
// 1.引入组件
// 2.注册组件
var mainheader = () => import('@/views/components/cms/mainheader')
var mainpanel = () => import('@/views/components/cms/mainpanel')
var maintop = () => import('@/views/components/cms/maintop')
var maintopmid = () => import('@/views/components/cms/maintopmid')
var maincontact = () => import('@/views/components/cms/maincontact')
var mainfooter = () => import('@/views/components/cms/normal/footer')
var mainstas = () => import('@/views/components/cms/mainstatics')
//
var detailhead = () => import('@/views/components/cms/detail/detailhead')
//

export default {
  props: {
    html: {
      type: String,
      required: true
    }
  },

  render(h) {
    if(!this.html){
      return false
    }
    const com = Vue.extend({
      components: {
        'main-header': mainheader,
        'main-panel': mainpanel,
        'main-top': maintop,
        'main-top-mid': maintopmid,
        'main-contact': maincontact,
        'main-contact': maincontact,
        'main-footer': mainfooter,
        'main-statics': mainstas,
        //
        'detail-head': detailhead,
        //
      },
      template: this.html
    })
    return h(com, {
    })
  }
}
</script>

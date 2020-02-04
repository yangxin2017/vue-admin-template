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
var detailleft = () => import('@/views/components/cms/detail/detailleft')
//
var searchone = () => import('@/views/components/cms/search/searchone')
var searchptone = () => import('@/views/components/cms/search/searchptone')
var resone = () => import('@/views/components/cms/search/resone')
var resptone = () => import('@/views/components/cms/search/resptone')
var rgtags = () => import('@/views/components/cms/search/rgtags')
var rglinks = () => import('@/views/components/cms/search/rglinks')
var restimeline = () => import('@/views/components/cms/search/restimeline')
var statics = () => import('@/views/components/cms/search/static')

export default {
  props: {
    html: {
      type: String,
      required: true
    }
  },

  render(h) {
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
        'detail-left': detailleft,
        //
        'search-one': searchone,
        'search-ptone': searchptone,
        'res-one': resone,
        'res-ptone': resptone,
        'rg-tags': rgtags,
        'rg-links': rglinks,
        'res-timeline': restimeline,
        'statics': statics
      },
      template: this.html
    })
    return h(com, {
    })
  }
}
</script>

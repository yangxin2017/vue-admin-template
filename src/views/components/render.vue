<script>
import Vue from 'vue'
// 1.引入组件
// 2.注册组件
var comone = () => import('@/views/components/news/title_lists')

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
        'com-one': comone
      },
      template: this.html
    })
    return h(com, {
    })
  }
}
</script>

<template>
  <div class="wrap wait-comfirm">
    <dev-list :list="list"></dev-list>
  </div>
</template>
<script>
import devList from '../../common/devList.vue'
export default {
  components: {
    devList
  },
  data() {
    return {
      list: [
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          devName: "展板",
          state: "请确认设备",
          clubName: '比特工场',
          borrowDate: '2017年2月10日',
          returnDate: '2017年2月13日',
          url: '/clubDevDetail/waitComfirm/2'
        },
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          devName: "展板",
          state: "请确认设备",
          clubName: '比特工场',
          borrowDate: '2017年2月10日',
          returnDate: '2017年2月13日',
          url: '/clubDevDetail/waitComfirm/2'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>

</style>


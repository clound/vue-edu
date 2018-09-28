<template>
  <div class="block-header">
    <span class="title">语中心声</span>
    <router-link to="" tag="span" class="more">更多</router-link>
  </div>
</template>
<script type="text/ecmascript-6">
// import { debounce } from 'common/js/util'
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .block-header
    display flex
    padding 10px 0
    line-height 28px
    justify-content space-between
    .title
      font-size $fc33
      padding-left 10px
      border-left 3px solid $color-theme
    .more
      padding-right 15px
      font-size $font-size-small
      color $color-theme
</style>
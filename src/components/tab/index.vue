<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/found">
      <i class="iconfont icon-mofabang"></i>
      <span class="tab-link">发现</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/product">
      <i class="iconfont icon-dianzan"></i>
      <span class="tab-link">优选</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/posts">
      <i class="iconfont icon-zimu"></i>
      <span class="tab-link">叩扉</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/my">
      <i class="iconfont icon-wode"></i>
      <span class="tab-link">我的</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
.tab
  position:fixed
  width: 100%
  height: 50px
  bottom: 0
  display: flex
  background: #fff
  box-shadow 0 3px 8px rgba(0,0,0,.15)
  border-top: 1px solid #eee
  z-index 10
  .tab-item
    flex: 1
    text-align: center
    >i
      display block
      margin-top 10px
      font-size $font-size-large
    .tab-link
      display block
      margin-top 5px
      padding-bottom: 5px
      color: $fc33
      font-size $font-size-small
    &.router-link-active
      >i,.tab-link
        color: $color-theme
</style>

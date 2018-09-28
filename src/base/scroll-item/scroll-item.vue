<template>
  <div class="cardBox">
    <div class="wrapper">
      <div class="img">
        <img src="https://oss.dameicdn.com/uploads/DF/9F/DF9FD588010DEDED3E1B43BAEC596145.png" alt="">
      </div>
      <div class="bottom">
        <h3>有一种变叫做视而不见</h3>
        <p>
          <i class="iconfont icon-daohang mr10"></i>描述
        </p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .cardBox
    width 245px
    box-shadow 0 5px 15px rgba(0,0,0,.1)
    border-radius 15px
    overflow hidden
    .wrapper
      .img
        width 100%
        height 245px
        img
          width 100%
          height 100%
      .bottom
        h3
          color $fc99
          padding 17px 15px
          line-height 28px
          text-lines(1)
        p
          text-align center
          color $color-theme
          padding 0 0 10px
          i
            font-size $font-size-large
            margin-right 8px
</style>

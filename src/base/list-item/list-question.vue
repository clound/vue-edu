<template>
  <div class="question-item">
    <div class="wrapper">
      <div class="header">
        <img src="https://oss.dameicdn.com/images/new_footer/dm_fuwu.jpg" class="avator" alt="">
        <span class="name">csaasd</span>
      </div>
      <div class="title">下面两个 div 包含无法在框中容纳的长文本。正如您所见，文本被修剪了。</div>
      <div class="content">当创建成功时，HTTP 的返回是 201 Created，响应的主体是一个 JSON 对象，包含新的对象的 objectId 和 createdAt 时间戳</div>
      <div class="bottom">
        <i class="sameq">同问<span>12</span></i>
        <i class="iconfont icon-duanxin"><span>13</span></i>
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
  .question-item
    position relative
    padding: 20px 10px
    .wrapper
      .header
        line-height 25px
        .avator
          display inline-block
          vertical-align top
          width 25px
          height 25px
          border-radius 50%
          margin-right 10px
        .name
          vertical-align middle
          color $fc99
          font-size $font-size-small
      .title
        padding 10px 0
        font-size $font-size-large
        color $fc33
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
      .content
        line-height 28px
        color $fc99
        font-size $font-size-medium
        text-lines(2)
      .bottom
        margin-top 10px
        text-align right
        i
          position relative
          color $fc66
          span
            position absolute
            font-size $font-size-small-s
            right -5px
            top -8px
          &.sameq
            color $color-theme
            margin-right 15px
          &.iconfont
            font-size $font-size-large-x
</style>
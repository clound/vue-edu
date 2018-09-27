<template>
  <div class="found-header">
    <div class="search-wrapper">
      <div class="search-box">
        <i class="iconfont icon-search"></i>
        <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
        <i @click="clear" v-show="  query" class="iconfont icon-close"></i>
      </div>
      <i class="iconfont icon-tongzhi"></i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { debounce } from 'common/js/util'
export default {
  props: {
    placeholder: {
      type: String,
      default: '热搜词、幸福'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    clear() {
      this.query = ''
    },
    setQuery(query) {
      this.query = query
    },
    blur() {
      this.$refs.query.blur()
    }
  },
  created() {
    this.$watch('query', debounce((newQuery) => {
      this.$emit('query', newQuery)
    }, 200))
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .found-header
    .search-wrapper
      display flex
      margin 20px
      align-items center
      .icon-tongzhi
        margin-left 6px
        font-size $font-size-large-x
      .search-box
        display: flex
        align-items: center
        box-sizing: border-box
        width: 100%
        padding: 0 6px
        height: 40px
        background: #eee
        // border-radius: 6px
        .icon-search
          font-size: 24px
          color: $color-background
        .box
          flex: 1
          margin: 0 5px
          line-height: 18px
          background: #eee
          color: $fc33
          font-size: $font-size-medium
          outline none
          &::placeholder
            color: $color-text-d
        .icon-close
          font-size: 22px
          color: $color-background
</style>
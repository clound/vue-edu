<template>
  <section>
    <found-header></found-header>
    <router-link to="/exam">答题</router-link>
    <list-question></list-question>
    <!-- <block-header></block-header> -->
    <!-- <scroll-item></scroll-item> -->
  </section>
</template>
<script>
import FoundHeader from 'base/header/found-header'
import ScrollItem from 'base/scroll-item/scroll-item'
import BlockHeader from 'base/block-header/block-header'
import ListQuestion from 'base/list-item/list-question'
export default {
  components: {
    ScrollItem,
    FoundHeader,
    BlockHeader,
    ListQuestion
  }
}
</script>
<style lang="stylus" scoped>
  // div
</style>

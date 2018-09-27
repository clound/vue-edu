<template>
  <div id="questiontest">
    <div class="header">
      <i class="iconfont icon-fanhui back" @click="back"></i>
      <span>你选择的题目是：{{picked}}{{pickedBox}}</span>
    </div>
    <div v-for="(it, v) in ExamInfo" :key="v"
      v-show="currentIndex === it.questionID" class="question">
      <div class="wraper">
        <h3 class="qus-title" :data-id="it.questionID">{{it.questionID}}、{{it.questionTitle}}</h3>
        <ul class="qus-list">
          <li v-for="(item, index) in it.quesitions" :key="index">
            <input v-if="it.isMulti" type="checkbox" :value="item.code" :id="'choice1'+v+index" v-model="chooseData[v]['pickedBox']">
            <input v-else type="radio" :value="item.code" :id="'choice1'+v+index" v-model="chooseData[v]['picked']">
            <label :for="'choice1'+v+index" class="choice-item border-1px">{{item.code}}、{{item.desc}}</label>
          </li>
        </ul>
      </div>
      <div class="btn"
        :class="chooseData[v]['isChoosed']?'btn-active':'btn-grey'"
        v-if="currentIndex <= 14"
        @click="goNext">下一题</div>
      <div v-else class="btn"
        :class="chooseData[v]['isChoosed']?'btn-active':'btn-grey'"
        @click="send">提交</div>
    </div>
  </div>
</template>
<script>
import { getQuestion } from '@/api/exam'
export default {
  name: 'questiontest',
  data () {
    return {
      currentIndex: 1,
      picked: '',
      pickedBox: [],
      ExamInfo: [],
      chooseData: []
    }
  },
  created() {
    this._getQuestion()
  },
  watch: {
    chooseData: {
      handler (newval) {
        let tmp = newval[this.currentIndex - 1]
        if (tmp.isMulti) {
          if (tmp.pickedBox.length) {
            tmp.isChoosed = true
          } else {
            tmp.isChoosed = false
          }
        } else {
          if (tmp.picked) {
            tmp.isChoosed = true
          } else {
            tmp.isChoosed = false
          }
        }
      },
      deep: true
    }
  },
  methods: {
    _getQuestion() {
      getQuestion().then((response) => {
        this.ExamInfo = response.data.data.res
        this.chooseData = this.ExamInfo.map((item, index) => {
          if (item.isMulti) {
            return {
              isMulti: item.isMulti,
              id: item.questionID,
              isChoosed: false,
              pickedBox: []
            }
          } else {
            return {
              isMulti: item.isMulti,
              id: item.questionID,
              isChoosed: false,
              picked: ''
            }
          }
        })
      })
    },
    goNext() {
      console.log(this.chooseData)
      let len = this.ExamInfo.length
      let bool = this.chooseData[this.currentIndex - 1]['isMulti']
      let curData = this.chooseData[this.currentIndex - 1]
      if (bool === true) {
        if (!curData.pickedBox.length) {
          this.$alert('未选题')
          return
        }
      } else {
        if (!curData.picked) {
          this.$alert('未选题1')
          return
        }
      }
      if (this.currentIndex <= len) {
        this.currentIndex += 1
      }
    },
    send() {
      this.$alert('提交成功')
    },
    back() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  #questiontest
    position absolute
    left 0
    top 0
    bottom 0
    width 100%
    height 100%
    background $purple-color
    z-index 100
    .header
      position relative
      text-align center
      color #fff
      line-height 50px
      .back
        position absolute
        left 10px
        color #fff
        font-size $font-size-large-x
  .zhangshi
    padding .1rem .35rem
    color #fff
    font-size .28rem
  .question
    .wraper
      position relative
      padding 40px 20px 40px
      margin 25px 15px 15px
      border-radius 15px
      background #fff
    .qus-title
      font-size: 19px;
      line-height: 30px;
      font-weight: 700;
      margin-bottom 35px
    .qus-list
      li
        line-height 35px
        margin-bottom 15px
        input
          display none
        input:checked + .choice-item
          background $select-backcolor
          color #fff
        .choice-item
          display block
          margin .2rem auto 0
          padding .3rem .3rem .34rem
          color #121212
          font-size 1rem
          border-radius 28px
          border 1px solid #666
          text-align center
      &.li-focus
        .choice-item
          background $select-backcolor
          color #fff
  .btn
    line-height 35px
    padding: 10px 20px 10px
    margin: 25px 15px 15px
    border-radius 25px
    text-align center
    font-size 20px
    &.btn-grey
      color #fff
      background #999
    &.btn-active
      color #333
      background #f2e533
</style>

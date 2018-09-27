<template>
  <div id="questiontest">
    <h3 class="pick-info">你选择的题目是：{{picked}}{{pickedBox}}</h3>
    <form action="" class="question">
      <div v-for="(it, v) in ExamInfo" :key="v"
       v-show="currentIndex === it.questionID">
        <h3 class="qus-title" :data-id="it.questionID">{{it.questionID}}、{{it.questionTitle}}</h3>
          <ul class="qus-list">
            <li v-for="(item, index) in it.quesitions" :key="index"
            :class="{'li-focus' : chooseNum==index}">
              <input v-if="it.isMulti" type="checkbox" :value="item.code" :id="'choice1'+index" v-model="pickedBox">
              <input v-else type="radio" :value="item.code" :id="'choice1'+index" v-model="picked">
              <label :for="'choice1'+index" class="choice-item">{{item.code}}、{{item.desc}}</label>
            </li>
          </ul>
        </div>
    </form>
    <div class="btn btn-active">提交</div>
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
      unclickable: true, // 判断是否已选择答案，不选择不能下一题，并置灰按钮
      showLayer: false, // 是否显示弹层
      layerItem: {
        isQuestion: false,
        isSubmit: false, // 是否是最后一道题时触发“下一题"按钮，点击了提交
        isSuccess: false,
        isLoading: false
      },
      chooseNum: null,
      isFocus: false,
      isLast: false,
      isClicked: false // 是否已经点击下一题，防止二次提交
    }
  },
  created() {
    this._getQuestion()
  },
  methods: {
    _getQuestion() {
      getQuestion().then((response) => {
        this.ExamInfo = response.data.data.res
      })
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
    .pick-info
      text-align center
      font-size 18px
      line-height 2
  .zhangshi
    padding .1rem .35rem
    color #fff
    font-size .28rem
  .question
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

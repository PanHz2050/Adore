<template>
  <div class="list" ref="wrapper">
    <div class="scroll-wrapper">
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <!-- 当前城市 {{this.$store.state.city}} {{this.currentCity}} -->
            <div class="button" @click="handleCurCityClick()">{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div 
            class="button-wrapper"
            v-for="item in hotCities" :key="item.id"
            @click="handleCityClick(item.name)"
            >
            <!-- 显示热门城市 -->
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
       <!-- ABC字母缩写 -->
      <div 
        class="area" 
        :ref="key"
        v-for="(item, key) of cities" :key="key"
        >
        <!-- 城市开头首字母缩写 -->
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <!-- 城市首字母开头的城市 -->
          <div 
            class="item border-bottom" 
            v-for="innerItem of item" :key="innerItem.id" 
            @click="handleCityClick(innerItem.name)">
            {{innerItem.name}} 
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  name: "CityList",
  props: {
    // city: String, // 使用store里的数据
    hotCities:  Array,
    cities: Object,
    letter: String
  },
  computed: {
    // 把vuex里公用的数据city映射到这里组件的计算属性里
    // 映射过来的名字叫currentCity
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    // 点击当前城市回到首页
    handleCurCityClick () {
      this.$router.push('/')
    },
    // 点击热门城市触发的事件
    handleCityClick (city) {
      // 触发store,index.js里actions里的changeCity方法
      // this.$store.dispatch('changeCity', city)
      this.$store.commit('changeCity', city)
      // this.changeCity('city')
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  // 侦听器
  watch: {
    // 当letter改变需要做的事情,letter接收到值,
    // 会触发scroll提供的方法,会自动滚动到元素对应的区域
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(element)
        // 这里调用scroll提供的方法,会自动滚动到元素对应的区域
        this.scroll.scrollToElement(element)
      }
      console.log(this.letter)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  // background red
  .title
    line-height: .54rem
    background: #eee
    padding-left: .2rem
    color: #666
    font-size: .26rem
  .button-list
    overflow: hidden
    padding: .1rem .6rem .1rem .1rem
    .button-wrapper
      float: left
      width: 33.33%
      .button
        margin: .1rem
        padding: .1rem 0
        text-align: center
        border: .02rem solid #ccc
        border-radius: .06rem
  .item-list
    .item
      line-height: .76rem
      padding-left: .2rem
</style>

<template>
  <div>
    <!-- 点击返回回到首页 -->
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <!-- Header区内容 -->
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  methods: {
    // 滚动显示header区
    handleScroll() {
      // console.log('scroll')
      const top = document.documentElement.scrollTop || 
      document.body.scrollTop || window.pageXOffset;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity: opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  mounted() {
    // 监听滚动事件
    window.addEventListener("scroll", this.handleScroll);
    // console.log(111111)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    // console.log(33333333)
  }
  // keep-alive, 为什么这里activated没效果...QwQ?
  // activated () {
  //   // 监听滚动事件
  //   window.addEventListener('scroll', this.handleScroll)
  //   // console.log(2222222)
  // },
  // 页面隐藏即将替换的时候会触发
  // deactivated() {
  //   window.removeEventListener("scroll", this.handleScroll);
  //   // console.log(33333333)
  // }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header-abs {
	position: absolute;
	left: 0.2rem;
	top: 0.2rem;
	width: 0.8rem;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;
	border-radius: 0.4rem;
	// color #e53238
	// background #3b5998
	background: rgba(0, 0, 0, 0.8);

	.header-abs-back {
		font-size: 0.4rem;
		color: #fff;
	}
}

.header-fixed {
	position: fixed;
  z-index 2;
	top: 0;
	left: 0;
	right: 0;
	height: $headerHeight;
	line-height: $headerHeight;
	text-align: center;
	color: #fff;
	background: $bgColor;
	font-size: 0.32rem;

	.header-fixed-back {
		position: absolute;
		top: 0;
		left: 0;
		width: 0.64rem;
		text-align: center;
		font-size: 0.4rem;
		color: #fff;
	}
}
</style>

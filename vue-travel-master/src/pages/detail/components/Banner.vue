<template>
  <div class="banner-wrapper">
    <div class="banner" @click="handleBannerClick">
      <img
        class="banner-img"
        :src="bannerImg"
      />
      <div class="banner-info">
        <div class="banner-title">  
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery 
      :imgs="gallaryImgs" 
      v-show="showGallery"
      @close="handleGalleryClose"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from "common/gallery/Gallery";
import FadeAnimation from "common/fade/FadeAnimation";

export default {
  name: "DetailBanner",
  components: {
    CommonGallery,
    FadeAnimation
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showGallery: false
    };
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true 
    },
    handleGalleryClose () {
      this.showGallery = false 
    }
  }
};
</script>

<style lang="stylus" scoped>
// 防止页面抖动
.banner
  position relative
  overflow hidden
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    display flex
    position absolute
    left 0
    right 0
    bottom 0
    line-height .6rem
    color #fff
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      height .32rem
      line-height .32rem
      margin-top .16rem
      margin-right .2rem
      padding 0 .4rem
      border-radius .2rem
      font-size .24rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
</style>

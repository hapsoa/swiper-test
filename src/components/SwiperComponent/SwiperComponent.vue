<template>
  <div class="swiper-root">
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>
      <!-- Add Arrows -->
      <!-- <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>-->
    </div>
    <!-- <div class="swiper-button-prev-unique">aa</div>
    <div class="swiper-button-next-unique">bb</div>-->
  </div>
</template>

<script src="./SwiperComponent.ts" lang='ts'/>

<style scoped lang='scss'>
.swiper-root {
  // margin: 50px;
  width: 100%;
  // height: 500px;
  // border: 1px solid blue;
  position: relative;
}
.swiper-container {
  position: relative;
  width: 100%;
  height: 100%;
  // border: 1px solid yellow;
}

.swiper-button-prev-unique {
  position: absolute;
  left: -60px;
  top: 230px;
}
.swiper-button-next-unique {
  position: absolute;
  right: -60px;
  top: 230px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;

  // border: 1px solid green;
  box-sizing: border-box;
  // height: 500px;
}

.swiper-button-next {
  z-index: 1000;
  position: absolute;
  right: -15px;
}
</style>
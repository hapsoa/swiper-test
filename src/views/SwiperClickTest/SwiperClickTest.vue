<template>
  <div id="slider">
    <swiper :options="swiperOption" ref="swiper" @click.native="sliderClicked">
      <swiper-slide v-for="(item, index) in items" :key="`${index}`">Slide {{index}}</swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script src='./SwiperClickTest.ts'>
// export default {
//   data() {
//     return {
//       swiperOption: {
//         effect: "slide",
//         loop: true,
//         autoplay: {
//           delay: 5000
//         },
//         pagination: {
//           el: ".swiper-pagination",
//           clickable: true
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev"
//         }
//       },
//       items: ["1", "2", "33"]
//     };
//   },
//   computed: {
//     swiper() {
//       return this.$refs.swiper.swiper;
//     }
//   },
//   methods: {
//     sliderClicked: function(event) {
//       if (
//         !event.target.classList.contains("swiper-pagination-bullet") &&
//         !event.target.classList.contains("swiper-button-next") &&
//         !event.target.classList.contains("swiper-button-prev")
//       ) {
//         let item = this.items[this.swiper.realIndex];
//         console.log("clicked item", item);
//         //this.$router.push();
//       }
//     }
//   }
// };
</script>
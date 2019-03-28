<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <SwiperComponent :uniqueClass="'small-gallery-swiper'">
          <div v-for="(slide, i) in slides" :key="i" class="swiper-slide blue"></div>
        </SwiperComponent>
      </v-flex>
    </v-layout>
    <v-layout pt-5>
      <v-flex xs12>
        <SwiperComponent :uniqueClass="'big-gallery-swiper'">
          <div v-for="(slide, i) in slides" :key="i" class="swiper-slide green"></div>
        </SwiperComponent>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script src='./MultipleSwiper.ts' lang='ts' />

<style scoped lang='scss'>
.swiper-slide {
  width: 300px;
  height: 500px;
  background-color: blue;
}

.blue {
  background-color: blue;
}

.green {
  background-color: green;
}
</style>
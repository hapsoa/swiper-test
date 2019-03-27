<template>
  <v-container fluid>
    <v-layout column class="meditation-teacher-zone y-center py-5 px-4">
      <v-layout style="width:100%" class="y-center">
        <!-- <font-awesome-icon style="color:" :icon="['fal', 'chevron-left' ]" class/> -->

        <v-flex v-for="(t,i) in teachers" :key="i" class="teacher-card-zone pa-3">
          <!-- card-teacher 컴포넌트의 teacher prop에  "t" 정보를 넣어준다 -->
          <card-teacher :teacher="t"></card-teacher>
        </v-flex>
        <!-- <font-awesome-icon style="color:" :icon="['fal', 'chevron-right' ]" class/> -->
      </v-layout>

      <v-layout style="width:100%" class="y-center swiper-wrapper">
        <v-flex v-for="(t,i) in teachers" :key="i" class="teacher-card-zone pa-3 swiper-slide">
          <card-teacher :teacher="t"></card-teacher>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script lang="ts" src='./Home.ts' />

<style lang="scss" scoped>
@import "./main.scss";
</style>

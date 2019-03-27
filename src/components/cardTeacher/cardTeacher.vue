<template>
  <!-- TODO Component 복습 -->
  <v-card class="teacher-card pt-3 px-3">
    <v-layout>
      <div class="new-teacher-alert"></div>
      <!-- TODO Absolute로 변경 -->
    </v-layout>
    <v-layout align-center>
      <v-avatar size="200px">
        <img :src="teacher.profileURL" alt="avatar">
      </v-avatar>
    </v-layout>
    <div class="text-xs-center py-3 teacher-name-zone font-weight-medium">{{teacher.name}}</div>
    <v-layout class="x-center">
      <div v-for="(tag,i) in teacher.tags" :key="i" class="tag-grid">#{{tag}}</div>
    </v-layout>
    <v-layout class="align-center" style="height:166px">
      <div class="teacher-status-m text-xs-center">"{{teacher.statusMessage}}"</div>
    </v-layout>
    <v-divider></v-divider>
    <v-layout class="teacher-view-btn-zone">
      <v-btn block flat class="teacher-view-btn ma-0 font-weight-bold">VIEW</v-btn>
    </v-layout>
  </v-card>
</template>

<script lang='ts' src='./cardTeacher.ts' />

 <style lang="scss" scoped>
@import "../../style/_common.scss";

.teachers-languages-inform-zone {
  background: white;
  padding: 90px 0;
}
.teacher-name-zone {
  font-size: 26px;
}
.teacher-view-btn-zone {
  height: 80px;
}
.teacher-view-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 80px;
  font-size: 18px;
}
.teacher-status-m {
  font-size: 16px;
}
.new-teacher-alert {
  height: 50px;
}
.tag-grid {
  border-radius: 24px;
  padding: 0 12px 2px;
  font-size: 16px;
  color: #36d8c1;
  line-height: 28px;
  border: solid 1px #36d8c1;
  margin: 0 4px;
}
.new-teacher-alert {
  width: 76px;
}

.meditation-teacher-zone {
  background: #f9fafd;
  font-size: 32px;
}
</style>

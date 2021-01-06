<template>
  <div>{{ nowTime }}</div>
  <div><button @click="getNowTime">显示时间</button></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { nowTime, getNowTime } from "../hooks/useNowTime";
export default defineComponent({
  name: "Time",
  setup() {
    return {
      nowTime,
      getNowTime
    };
  }
});
</script>

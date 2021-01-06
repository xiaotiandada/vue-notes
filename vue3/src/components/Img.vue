<template>
  <div>
    <h2>欢迎光临红浪漫洗浴中心</h2>
    <div>随机选择一位美女为你服务</div>
    <div v-if="loading">Loading.....</div>
    <img width="300" v-if="loaded" :src="result.message" />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUrlAxios from "../hooks/useURLAxios";
export default defineComponent({
  name: "IMG",
  setup() {
    const { result, loading, loaded } = useUrlAxios(
      "https://dog.ceo/api/breeds/image/random"
    );

    return { result, loading, loaded };
  }
});
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const msg = ref("title");

    onMounted(() => {
      console.log("onMounted", msg);
    });

    return {
      msg
    };
  }
});
</script>

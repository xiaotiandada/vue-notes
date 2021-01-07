<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />

    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <input type="text" v-model="title" />
    <p>{{ title }}</p>
    <ChildComponents />
    <Time />
    <div>
      <Suspense>
        <template #default>
          <AsyncShow />
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
      <Suspense>
        <template #default>
          <girl-show />
        </template>
        <template #fallback>
          <h1>Loading...</h1>
        </template>
      </Suspense>
    </div>
    <Img />
    <Modal />
    <reactive />

    <template v-for="item in list" :key="item.id">
      <div>{{ item }}</div>
      <span>...</span>
    </template>
  </div>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onErrorCaptured,
  onMounted,
  ref
} from "vue";
import ChildComponents from "../components/ChildComponents.vue";
import reactive from "../components/reactive.vue";
import Time from "../components/Time.vue";
import Img from "../components/Img.vue";
import Modal from "../components/Modal.vue";
import AsyncShow from "../components/AsyncShow.vue";
import GirlShow from "../components/GirlShow.vue";

export default defineComponent({
  name: "Home",
  components: {
    ChildComponents,
    reactive,
    Time,
    Img,
    Modal,
    AsyncShow,
    GirlShow
  },
  setup() {
    const msg = ref("title");

    nextTick(() => {
      console.log("nextTick");
    });

    onMounted(() => {
      console.log("onMounted", msg);
    });

    onErrorCaptured(error => {
      console.log(`error====>`, error);
      return true;
    });

    return {
      msg
    };
  }
});
</script>

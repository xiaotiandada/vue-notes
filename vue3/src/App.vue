<template>
  <div id="nav">
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

    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { nextTick, onErrorCaptured } from "vue";
import ChildComponents from "./components/ChildComponents.vue";
import reactive from "./components/reactive.vue";
import Time from "./components/Time.vue";
import Img from "./components/Img.vue";
import Modal from "./components/Modal.vue";
import AsyncShow from "./components/AsyncShow.vue";
import GirlShow from "./components/GirlShow.vue";

export default {
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
    nextTick(() => {
      console.log("nextTick");
    });
    onErrorCaptured(error => {
      console.log(`error====>`, error);
      return true;
    });
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

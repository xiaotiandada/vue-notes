<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <input type="text" v-model="title" />
    <p>{{ title }}</p>
    <ChildComponents />

    <template v-for="item in list" :key="item.id">
      <div>{{ item }}</div>
      <span>...</span>
    </template>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { nextTick } from "vue";
import ChildComponents from "./components/ChildComponents.vue";

@Options({
  components: {
    ChildComponents
  }
})
export default class App extends Vue {
  title = "";
  list = [1, 2, 3];
  created() {
    nextTick(() => {
      console.log("nextTick");
    });
  }
}
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

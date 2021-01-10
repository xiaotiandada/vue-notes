import { createStore, Store } from "vuex";
import todoModules from "./todo";

export default createStore<any>({
  strict: process.env.NODE_ENV !== "production",
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todoModules
  }
});

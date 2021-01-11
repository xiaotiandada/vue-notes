import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import todoModules from "./todo";

export default createStore<any>({
  strict: process.env.NODE_ENV !== "production",
  state: {},
  mutations: {},
  actions: {},
  modules: {
    todoModules
  },
  plugins: [
    createPersistedState({
      key: "vuex_localstorage_simple_todo",
      paths: ["todoModules.todoList"]
    })
  ]
});

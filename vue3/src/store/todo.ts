import {
  ActionContext,
  MutationTree,
  ActionTree,
  GetterTree,
  Module
} from "vuex";
export interface State {
  todoList: string[];
}

const factoryState = () => ({
  todoList: ["default"]
});

const state: State = factoryState();

const mutations: MutationTree<State> = {
  ADD_TODO(state: State, payload: { value: string }) {
    state.todoList.push(payload.value);
  }
};

const actions: ActionTree<State, any> = {
  addTodo(context: ActionContext<State, any>, payload: { value: string }) {
    console.log("payload", payload);
    context.commit("ADD_TODO", payload);
  }
};

const getters: GetterTree<State, any> = {};

const todoModules: Module<State, any> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};

export default todoModules;

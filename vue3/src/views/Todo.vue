<template>
  <div class="todo">
    <h1>{{ todoTitle }}</h1>
    <div>
      <input type="text" v-model="todoVal" @keydown.enter="addTodo" />
      <button @click="addTodo">add</button>
      <span>val: {{ todoVal }}</span>
    </div>
    <ul>
      <li v-for="(item, index) in storeTodoList" :key="index">
        <label :for="`todoRadio${index}`">
          <input type="checkbox" :name="item" />
          <span>
            {{ item }}
          </span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  ref,
  reactive,
  computed,
  onMounted
} from "vue";
import { useStore } from "vuex";

interface StateProps {
  todoVal: string;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const todoTitle = ref<string>("Todo");
    const state: StateProps = reactive({
      todoVal: ""
    });

    // store todo list
    const storeTodoList = computed(() => store.state.todoModules.todoList);

    // store todo add
    const storeAddTodo = (payload: any) =>
      store.commit("todoModules/ADD_TODO", payload);

    // btn add todo
    const addTodo = () => {
      storeAddTodo({ value: state.todoVal });
      state.todoVal = "";
    };

    onMounted(() => {
      console.log("todoComputed", storeAddTodo);
    });

    const refState = toRefs(state);
    return {
      ...refState,
      todoTitle,
      addTodo,
      storeTodoList
    };
  }
});
</script>

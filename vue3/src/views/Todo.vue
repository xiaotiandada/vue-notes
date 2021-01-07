<template>
  <div class="todo">
    <h1>{{ todo }}</h1>
    <div>
      <input type="text" v-model="todoVal" @keydown.enter="addTodo" />
      <button @click="addTodo">add</button>
      <span>val: {{ todoVal }}</span>
    </div>
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
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
import { defineComponent, toRefs, ref, reactive } from "vue";

interface StateProps {
  todoList: string[];
  todoVal: string;
}

export default defineComponent({
  setup() {
    const todo = ref<string>("Todo");
    const state: StateProps = reactive({
      todoList: ["hahah", "falsdkjflasdf", "fsdf"],
      todoVal: ""
    });

    const addTodo = () => {
      state.todoList.push(state.todoVal);
      state.todoVal = "";
    };

    const refState = toRefs(state);
    return {
      ...refState,
      todo,
      addTodo
    };
  }
});
</script>

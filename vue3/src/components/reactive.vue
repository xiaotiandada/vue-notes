<template>
  <h1>{{ msg }}</h1>
  <button @click="change">change</button>
  <hr />
  <div><button @click="overAction">点餐完毕</button></div>
  <div>{{ overText }}</div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onRenderTracked,
  onRenderTriggered,
  watch
} from "vue";

interface DataProps {
  msg: string;
  change: () => void;
}

export default defineComponent({
  name: "reactive",
  setup() {
    console.log("1-开始创建组件-----setup()");

    const data: DataProps = reactive({
      msg: "title reactive",
      change: () => {
        data.msg = String(Date.now());
      }
    });

    const overText = ref("红浪漫");
    const overAction = () => {
      overText.value = overText.value + "点餐完成 | ";
    };

    onBeforeMount(() => {
      console.log("2-组件挂载到页面之前执行-----onBeforeMount()");
    });

    onMounted(() => {
      console.log("3-组件挂载到页面之后执行-----onMounted()");
    });
    onBeforeUpdate(() => {
      console.log("4-组件更新之前-----onBeforeUpdate()");
    });

    onUpdated(() => {
      console.log("5-组件更新之后-----onUpdated()");
    });
    onRenderTracked(event => {
      console.log("状态跟踪组件----------->");
      console.log(event);
    });
    onRenderTriggered(event => {
      console.log("状态触发组件--------------->");
      console.log(event);
    });

    watch([overText, () => data.msg], (newValue, oldValue) => {
      console.log(`new--->${newValue}`);
      console.log(`old--->${oldValue}`);
      document.title = String(newValue[0]);
    });

    const refData = toRefs(data);
    return {
      ...refData,
      overText,
      overAction
    };
  },

  beforeCreate() {
    console.log("1-组件创建之前-----beforeCreate()");
  },
  beforeMount() {
    console.log("2-组件挂载到页面之前执行-----BeforeMount()");
  },
  mounted() {
    console.log("3-组件挂载到页面之后执行-----Mounted()");
  },
  beforeUpdate() {
    console.log("4-组件更新之前-----BeforeUpdate()");
  },
  updated() {
    console.log("5-组件更新之后-----Updated()");
  }
});
</script>

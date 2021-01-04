<template>
  <div>
    {{ modelValue }}
    <input type="text" @change="changePageTitle" />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  changePageTitle(title: string) {
    // this.$emit("update:modelValue", title);
  }
};
</script>

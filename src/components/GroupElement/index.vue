<template>
  <div :class="[groupClass, pos]">
    <h5>{{ id + 1 }}. {{ group }}</h5>
    <img v-if="img" :src="`/assets/${pos}.png`" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    group: { type: String, required: true },
    img: { type: String, default: null },
    pos: { type: String, required: true },
  },
  computed: {
    groupClass() {
      return "group";
    },
  },
});
</script>

<style scoped lang="scss">
.group {
  border-radius: 20px;
  text-align: center;
  min-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 10px 25px;
  h5 {
    letter-spacing: 2px;
    font-weight: 500;
  }
  img {
    width: 24px;
  }
}
</style>

<template>
  <div :class="[listClass, pos]">
    <h5>{{ id + 1 }}. {{ group }} {{ name }}</h5>
    <img v-if="img" :src="`/assets/${pos}.png`" alt="" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    id: { type: Number, required: true },
    group: { type: String, required: true },
    name: { type: String, required: true },
    img: { type: String, default: null },
    pos: { type: String, required: true },
  },
  computed: {
    listClass() {
      return "group_top";
    },
  },
});
</script>

<style scoped lang="scss">
.group_top {
  border-radius: 6px;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  img {
    width: 24px;
  }
  h5 {
    letter-spacing: 2px;
    font-weight: 500;
  }
}
</style>

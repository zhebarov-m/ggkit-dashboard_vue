<template>
  <div class="cont_top">
    <div class="stud_cont">
      <h3>Лучшие студенты за 1 семестр</h3>
      <ListElement
          v-for="el in studList"
          :key="el.id"
          :id="el.id"
          :group="el.group"
          :name="el.name"
          :img="el.img"
          :pos="el.pos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListElement from "../components/ListElement/index.vue";
import studList from "../data/studList";

export default defineComponent({
  components: {
    ListElement,
  },
  data() {
    return {
      studList,
    };
  },
});
</script>

<style scoped>

</style>

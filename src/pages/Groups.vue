<template>
  <div class="cont_top">
    <div class="group_cont">
      <h3>Топ 5 групп</h3>
      <GroupElement
          v-for="el in groupList"
          :key="el.id"
          :id="el.id"
          :group="el.group"
          :img="el.img"
          :pos="el.pos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GroupElement from "../components/GroupElement/index.vue";
import groupList from "../data/groupList";

export default defineComponent({
  components: {
    GroupElement,
  },
  data() {
    return {
      groupList,
    };
  },
});
</script>

<style scoped>

</style>

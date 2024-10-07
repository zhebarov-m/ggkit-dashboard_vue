<template>
  <div class="cont_top">
    <div class="top_list">
      <div class="top">
        <h3>1 курс</h3>
        <ListElement
            v-for="(el, index) in course1"
            :key="index"
            :id="el.id"
            :group="el.group"
            :name="el.name"
            :img="el.img"
            :pos="el.pos"
        />
      </div>
      <div class="top">
        <h3>2 курс</h3>
        <ListElement
            v-for="(el, index) in course2"
            :key="index"
            :id="el.id"
            :group="el.group"
            :name="el.name"
            :img="el.img"
            :pos="el.pos"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ListElement from '../components/ListElement/index.vue'
import course1 from '../data/course1.ts'
import course2 from '../data/course2.ts'


export default defineComponent({
  components: {
    ListElement,
  },
  data() {
    return {
      course1,
      course2,
    };
  },
});
</script>

<style scoped>

</style>

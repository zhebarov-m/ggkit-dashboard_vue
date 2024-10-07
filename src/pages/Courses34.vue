<template>
  <div class="cont_top">
    <div class="top_list">
      <div class="top">
        <h3>3 курс</h3>
        <ListElement
            v-for="(el, index) in course3"
            :key="index"
            :id="el.id"
            :group="el.group"
            :name="el.name"
            :img="el.img"
            :pos="el.pos"
        />
      </div>
      <div class="top">
        <h3>4 курс</h3>
        <ListElement
            v-for="(el, index) in course4"
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
import course3 from '../data/course3.ts'
import course4 from '../data/course4.ts'


export default defineComponent({
  components: {
    ListElement,
  },
  data() {
    return {
      course3,
      course4,
    };
  },
});
</script>

<style scoped>

</style>

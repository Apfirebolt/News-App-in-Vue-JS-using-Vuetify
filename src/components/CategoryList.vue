<template>
  <div class="container">
    <h3>
      News From the Following Categories are available for
      <span class="text-danger">{{ $route.params.country }}</span>
    </h3>
    <div class="container">
      <div v-for="category in categories" :key="category" class="custom_btn">
        <VaChip size="large" class="chip" @click="$emit('update-category', category)">
          {{ capitalize(category) }}
        </VaChip>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { VaChip } from "vuestic-ui";

defineEmits(["update-category"]);

const categories = ref([
  "business",
  "entertainment",
  "sports",
  "science",
  "health",
  "technology",
]);

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin: 1rem auto;
}

.container .chip {
  margin: 4px;
}
</style>

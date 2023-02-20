// src/App.vue
<script setup>
import "./assets/base.css";

defineProps({
  msg: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div class="greetings">
    <h3>{{ msg }}</h3>
    <p>
      App3: VueJS
    </p>
  </div>
</template>

<style scoped>
.greetings {
  margin-top: 10px;
  border: 1px solid green;
  border-radius: 5px;
  padding: 10px;
}

p {
  color: green;
}
</style>


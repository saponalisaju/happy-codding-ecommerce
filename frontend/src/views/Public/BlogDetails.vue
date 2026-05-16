<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold">Blog Details</h1>
    <p>Blog ID: {{ id }}</p>
  </div>
</template>
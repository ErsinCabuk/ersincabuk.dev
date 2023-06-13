<template>
  <Box :link="link">
    <h1 class="text-xl text-neutral-100">{{ title }}</h1>
    <p class="text-neutral-200">{{ description }}</p>
    <p class="text-xs text-end text-neutral-400">{{ date }}</p>
  </Box>
</template>

<script setup>
  defineProps(["link", "title", "description", "date"])
</script>
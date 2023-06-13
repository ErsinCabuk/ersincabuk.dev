<template>
  <NuxtLink :href="link" class="p-3 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl hover:bg-neutral-700/60 duration-300 transition-colors ease-in-out">
    <h1 class="text-xl text-neutral-100">{{ title }}</h1>
    <p class="text-neutral-200">{{ description }}</p>
    <p class="text-xs text-end text-neutral-400">{{ date }}</p>
  </NuxtLink>
</template>

<script setup>
  defineProps(["link", "title", "description", "date"])
</script>
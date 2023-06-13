<template>
  <NuxtLink v-if="link" :href="link" class="p-3 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl hover:bg-neutral-700/60 duration-300 transition-colors ease-in-out">
    <slot/>
  </NuxtLink>
  <div v-else class="p-3 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl">
    <slot/>
  </div>
</template>

<script setup>
  defineProps(["link"])
</script>
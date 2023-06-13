<template>
  <div>
    <div class="grid grid-cols-2 gap-2" v-for="post in posts">
      <NuxtLink :key="post" :href="post._path" class="p-3 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl hover:bg-neutral-700/60 duration-300 transition-colors ease-in-out">
        <h1 class="text-xl text-neutral-100">{{ post.title }}</h1>
        <p class="text-neutral-200">{{ post.description }}</p>
        <p class="text-xs text-end text-neutral-400">{{ post.date }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  const posts = await queryContent("/blog").only(["title", "description", "date", "_path"]).find()
</script>
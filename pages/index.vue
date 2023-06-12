<template>
  <div class="flex flex-col gap-y-4">
    <div class="bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl p-4 flex flex-col items-center justify-center">
      <h1 class="text-5xl font-semibold text-neutral-200">Ersin Çabuk</h1>
    </div>
    <div class="grid grid-cols-2 gap-2" v-for="post in posts">
      <a :key="post" :href="post._path" class="p-3 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl hover:bg-neutral-700/60 duration-300 transition-colors ease-in-out">
        <h1 class="text-xl text-neutral-100">{{ post.title }}</h1>
        <p class="text-neutral-200">{{ post.description }}</p>
        <p class="text-xs text-end text-neutral-400">{{ post.date }}</p>
      </a>
    </div>
  </div>
</template>

<script setup>
  const posts = await queryContent("/blog").only(["title", "description", "date", "_path"]).find()
</script>
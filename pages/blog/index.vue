<template>
  <div>
    <TitleBox>Blog Categories</TitleBox>
    <div class="grid grid-cols-2 gap-2">
      <Box v-for="category in categories"
            :link="category.link"
            class="text-center">
        {{ category.category }}
      </Box>
    </div>
  </div>
</template>

<script setup>
  let posts = (await queryContent().find()),
      categories = Array.from(new Set(posts.map(value => value.category))).map(value => ({ category: value, link: '/blog/'+value.toLowerCase() }))  
</script>
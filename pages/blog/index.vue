<template>
  <div>
    <TitleBox>Blog</TitleBox>
    <div class="grid grid-cols-2 gap-2">
      <BlogPost v-for="post in posts" 
                :key="post" 
                :title="post.title" 
                :description="post.description" 
                :date="post.date" 
                :link="post._path" />
    </div>
  </div>
</template>

<script setup>
  const posts = await queryContent("/blog").only(["title", "description", "date", "_path"]).find()
</script>
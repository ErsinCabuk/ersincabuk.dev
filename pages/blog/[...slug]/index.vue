<template>
  <div>
    <ContentDoc :path="route.path">
      <!-------------------- POST FOUND ---------------------->
      <template v-slot="{ doc }">
        <div>
          <TitleBox class="mb-10">Blog: {{ formatString(doc.title) }}</TitleBox>
          <article class="prose prose-lg prose-invert prose-headings:mb-4 prose-h1:font-normal prose-a:no-underline min-w-full">
            <ContentRenderer :value="doc" />
          </article>
        </div>
      </template>
      <!-------------------- POST FOUND ---------------------->
  
      <!-------------------- POST NOT FOUND -------------------->
      <!-------------------- /blog PAGE -------------------->
      <template #not-found>
        <div v-if="route.path == '/blog'">
          <TitleBox>Blog Categories</TitleBox>
          <div class="grid grid-cols-2 gap-2">
            <Box v-for="category in categories"
                  :link="category.link"
                  class="text-center">
              {{ category.category }}
            </Box>
          </div>
        </div>
        <!-------------------- /blog PAGE -------------------->

        <!-------------------- POST NOT FOUND -------------------->
        <TitleBox v-else-if="posts.length == 0">Not found</TitleBox>
        <!-------------------- POST NOT FOUND -------------------->

        <!-------------------- POSTS -------------------->
        <div v-else>
          <TitleBox>Blog: {{ formatString(path[path.length - 1]) }}</TitleBox>
          <div class="grid grid-cols-2 gap-2">
            <BlogPost v-for="post in posts" 
                :key="post._path" 
                :title="post.title" 
                :description="post.description" 
                :date="post.date" 
                :link="post._path" />
          </div>
        </div>
        <!-------------------- POSTS -------------------->
      </template>
      <!-------------------- POST NOT FOUND -------------------->
    </ContentDoc>
  </div>
</template>

<script setup>
  const route = useRoute()
  const path = route.path.split("/").filter(value => value != "")

  let posts = (await queryContent().find()),
      categories = Array.from(new Set(posts.map(value => value.category))).map(value => ({ category: value, link: '/blog/'+value.toLowerCase() }))
  posts = posts.map(value => {
            let pathArray = value._id.split(":")
            pathArray = pathArray.slice(1, pathArray.length - 1)
            let newValue = { ...value }
            newValue.pathArray = pathArray
            return newValue
          }).filter(value => JSON.stringify(value.pathArray) == JSON.stringify(path))

  function formatString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
</script> 
<template>
  <div>
    <ContentDoc :path="route.path">
      <template v-slot="{ doc }">
        <div>
          <TitleBox>Blog: {{ doc.title.charAt(0).toUpperCase() + doc.title.slice(1) }}</TitleBox>
          <article class="prose prose-invert prose-sky p-4 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl min-w-full">
            <ContentRenderer :value="doc" />
          </article>
        </div>
      </template>
  
      <template #not-found>
        <div>
          <div v-if="qc.length == 0">
            <TitleBox>Post not found</TitleBox>
          </div>
          <div v-else>
            <div v-if="route.path == '/blog'">
              <TitleBox>Blog Categories</TitleBox>
              <div class="grid grid-cols-2 gap-2">
                <Box v-for="category in Array.from(new Set(qc.map(value => value.category))).map(value => ({ category: value, link: '/blog/'+value.toLowerCase() }))"
                         :link="category.link"
                         class="text-center">
                  {{ category.category }}
                </Box>
              </div>
            </div>
            <div v-else>
              <TitleBox>Blog: {{ path[path.length - 1].charAt(0).toUpperCase() + path[path.length - 1].slice(1) }}</TitleBox>
              <div class="grid grid-cols-2 gap-2">
                <BlogPost v-for="post in qc" 
                    :key="post._path" 
                    :title="post.title" 
                    :description="post.description" 
                    :date="post.date" 
                    :link="post._path" />
              </div>
            </div>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>

<script setup>
const route = useRoute()
const path = route.path.split("/").filter(value => value != "")
let qc = await queryContent("blog", path[1]).find()
</script>
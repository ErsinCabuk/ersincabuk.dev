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
        <!-------------------- POST NOT FOUND -------------------->
        <TitleBox v-if="posts.length == 0">Not found</TitleBox>
        <!-------------------- POST NOT FOUND -------------------->

        <!-------------------- POSTS -------------------->
        <div v-else>
          <TitleBox>Blog: {{ formatString(path[path.length - 1]) }}</TitleBox>
          <SearchInput v-model="searchText"/>
          <TransitionGroup tag="div" class="grid grid-cols-2 gap-2" name="custom-classes"
            move-class="transition-opacity duration-500 ease-in"
            enter-active-class="transition-opacity duration-500 ease-in"
            leave-active-class="transition-opacity duration-500 ease-in"
            enter-from-class="opacity-0"
            leave-to-class="opacity-0">
            <BlogPost v-for="post in searchResults" 
                :key="post._path" 
                :title="post.title" 
                :description="post.description" 
                :date="post.date" 
                :link="post._path" />
          </TransitionGroup>
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

  const posts = (await queryContent().find()).map(value => {
            let pathArray = value._id.split(":")
            pathArray = pathArray.slice(1, pathArray.length - 1)
            let newValue = { ...value }
            newValue.pathArray = pathArray
            return newValue
          }).filter(value => JSON.stringify(value.pathArray) == JSON.stringify(path))

  const searchText = ref(""),
        searchResults = ref(posts)

  watch(searchText, (value) => {
    searchResults.value = value == ""
                    ? posts
                    : posts.filter(post => post.title.toLowerCase().startsWith(value.toLowerCase()))
  })

  function formatString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
</script> 
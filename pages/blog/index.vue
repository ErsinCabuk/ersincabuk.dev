<template>
  <div>
    <TitleBox>Blog Categories</TitleBox>
    <SearchInput v-model="searchText"/>
    <TransitionGroup tag="div" class="grid grid-cols-2 gap-2" name="custom-classes"
      move-class="transition-opacity duration-500 ease-in"
      enter-active-class="transition-opacity duration-500 ease-in"
      leave-active-class="transition-opacity duration-500 ease-in"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0">
      <Box v-for="category in searchResults"
            :link="category.link"
            class="text-center"
            :key="category.category">
        {{ category.category }}
      </Box>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts"> 
  const posts = await queryContent().find(),
        categories: Array<{category: string, link: string}> = Array.from(new Set(posts.map(value => value.category))).map(value => ({ category: value, link: '/blog/'+value.toLowerCase() }))

  const searchText = ref(""),
        searchResults = ref(categories)

  watch(searchText, (value: string) => {
    searchResults.value = value == "" 
                          ? categories
                          : categories.filter(category => category.category.toLowerCase().startsWith(value.toLowerCase()))
  })
</script>
<template>
  <div>
    <TitleBox>Blog</TitleBox>
    <article class="prose prose-invert prose-sky p-4 bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl min-w-full">
      <ContentDoc :path="$route.path">
        <template v-slot="{ doc }">
          <ContentRenderer :value="doc" />
        </template>
        <template #not-found>
          <p>Document not found</p>
        </template>
      </ContentDoc>
    </article>
  </div>
</template>
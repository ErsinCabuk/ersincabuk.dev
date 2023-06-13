<template>
  <div class="flex justify-between bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl mb-4">
    <button @click="router.back()" class="flex items-center justify-center border-r-[1px] border-r-neutral-700 p-4">
      Geri
    </button>
    <h1 class="flex items-center justify-center text-5xl font-semibold text-neutral-200 p-4">
      <slot/>
    </h1>
    <button @click="router.forward()" class="flex items-center justify-center border-l-[1px] border-l-neutral-700 p-4">
      İleri
    </button>
  </div>
</template>

<script setup>
  const router = useRouter()
</script>
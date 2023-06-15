<template>
  <div class="relative mb-4">
    <span class="text-neutral-500 absolute inset-y-0 left-0 flex items-center pl-2">
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </span>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="search" class="py-2 pl-10 w-full bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl hover:bg-neutral-700/60 duration-300 transition-colors ease-in-out" placeholder="Search..." autocomplete="off">
  </div>
</template>

<script setup>
  defineProps(['modelValue'])
  defineEmits(['update:modelValue'])
</script>
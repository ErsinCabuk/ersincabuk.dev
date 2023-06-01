<template>
  <button @click="handleError">Clear errors</button>
  <h1>{{ error.statusCode }}</h1>
  <p>{{ error.statusMessage }}</p>
  <p>{{ error.message }}</p>
  {{ error.stack }}
</template>

<script setup>
  const props = defineProps({
    error: Object
  })
  const handleError = () => clearError({ redirect: '/' })
</script>
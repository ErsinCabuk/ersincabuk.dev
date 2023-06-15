<template>
  <div class="flex justify-between bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl mb-4">
    <button @click="router.back()" class="flex items-center justify-center border-r-[1px] border-r-neutral-700 p-4">
      <svg class="left-bounce" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#ffffff" d="M15.125 21.1L6.7 12.7q-.15-.15-.213-.325T6.425 12q0-.2.062-.375T6.7 11.3l8.425-8.425q.35-.35.875-.35t.9.375q.375.375.375.875t-.375.875L9.55 12l7.35 7.35q.35.35.35.863t-.375.887q-.375.375-.875.375t-.875-.375Z"></path></svg>
    </button>
    <h1 class="flex items-center justify-center text-5xl font-semibold p-4">
      <slot/>
    </h1>
    <button @click="router.forward()" class="flex items-center justify-center border-l-[1px] border-l-neutral-700 p-4">
      <svg class="right-bounce" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#ffffff" d="M7.15 21.1q-.375-.375-.375-.888t.375-.887L14.475 12l-7.35-7.35q-.35-.35-.35-.875t.375-.9q.375-.375.888-.375t.887.375l8.4 8.425q.15.15.213.325T17.6 12q0 .2-.063.375t-.212.325L8.9 21.125q-.35.35-.863.35T7.15 21.1Z"></path></svg>
    </button>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
</script>

<style>
.left-bounce:hover {
  animation: left-bounce 1s ease-out infinite;
}

@keyframes left-bounce {
  0%, 100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-10px);
  }
}

.right-bounce:hover {
  animation: right-bounce 1s ease-out infinite;
}

@keyframes right-bounce {
  0%, 100% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(10px);
  }
}
</style>
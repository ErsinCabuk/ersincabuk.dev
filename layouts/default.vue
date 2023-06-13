<template>
  <div class="flex flex-col min-h-screen bg-neutral-900">
    <main class="flex-grow container m-auto mt-4">
      <div class="flex justify-between bg-neutral-800 border-[1px] border-neutral-700 rounded-2xl mb-4">
        <button @click="router.back()" class="flex items-center justify-center border-r-[1px] border-r-neutral-700 p-4">
          Geri
        </button>
        <h1 class="flex items-center justify-center text-5xl font-semibold text-neutral-200 p-4">
          {{ pageTitle }}
        </h1>
        <button @click="router.forward()" class="flex items-center justify-center border-l-[1px] border-l-neutral-700 p-4">
          İleri
        </button>
      </div>
      <slot/>
    </main>
    <footer class="flex justify-center items-center h-16 bg-neutral-800 text-white">
      <a href="https://github.com/ErsinCabuk/ersincabuk.dev" class="text-primary-100 hover:underline"> 
        This website is open source.
      </a>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pageTitle: "",
        router: useRouter()
      }
    },

    mounted() {
      this.pageTitle = document.title
    }
  }
</script>
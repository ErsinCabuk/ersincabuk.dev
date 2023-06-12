<template>
  <div class="flex flex-col min-h-screen bg-neutral-900">
    <main class="flex-grow container m-auto mt-4">
      <slot/>
    </main>
    <footer class="flex justify-center items-center h-16 bg-neutral-800 text-white">
      <a href="https://github.com/ErsinCabuk/ersincabuk.dev" class="text-primary-100 hover:underline"> 
        This website is open source.
      </a>
    </footer>
  </div>
</template>
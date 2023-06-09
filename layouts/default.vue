<template>
  <div class="flex flex-col min-h-screen">
    <main class="flex-grow bg-primary-800 px-24 pt-6">
      <slot/>
    </main>
    <footer class="flex justify-center items-center h-16 bg-primary-700 text-white">
      <a href="https://github.com/ErsinCabuk/ersincabuk.dev" class="text-primary-100 hover:underline"> 
        This website is open source.
      </a>
    </footer>
  </div>
</template>
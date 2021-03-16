<script lang="ts">
    export let theme: string;
</script>

<div class="h-16 w-full flex mb-12 pt-5 justify-between">
    <!-- Logo -->
    <div class="w-60 h-full mt-4 justify-start">
      <a href="/">
        <img src={theme === "dark" ? 'img/logo.svg' : 'img/light.svg' } class="max-h-full hidden md:block" alt="Sharee logo">
        <img src="img/icon.svg" class="max-h-full block md:hidden" alt="Sharee logo">
      </a>
    </div>
    <!-- Searchbox -->
    <div class="w-2/4 h-4/5 mt-1.5 hidden md:block">
      <div class="relative text-indigo-300">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>¨
          </svg>
        </div>
        <input id="search" class="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-sharee bg-opacity-100 text-indigo-300 placeholder-indigo-300 focus:outline-none focus:bg-white focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm transition duration-150 ease-in-out" placeholder="Search" type="search">
      </div>
    </div>
    <!-- Navbar -->
    <div class="w-1/8 flex items-center justify-end lg:block hidden">
      <a href="#" class="px-3 py-2 rounded-md text-sm leading-5 font-medium text-black hover:text-sharee focus:outline-none focus:text-white focus:bg-sharee transition duration-150 ease-in-out">Messenger</a>
      <a href="#" class="px-3 py-2 rounded-md text-sm leading-5 font-medium text-black hover:text-sharee focus:outline-none focus:text-white focus:bg-sharee transition duration-150 ease-in-out">Points</a>
      <button class="ml-4 mt-5 relative flex-shrink-0 text-sm text-white focus:outline-none focus:shadow-solid transition duration-150 ease-in-out">
        <img class="h-10 w-10 rounded-full" src="https://thispersondoesnotexist.com/image?s=y" alt="avatar" />
      </button>
    </div>
</div>
<script lang="ts">
    export let theme: string;
</script>

<div class="h-16 w-full flex mb-12 pt-5 justify-between">
    <div class="w-60 h-full mt-4 justify-start"><img src={theme === "dark" ? 'img/logo.svg' : 'img/light.svg' } class="max-h-full" alt="Sharee logo"></div>
    <div class="w-2/4 h-4/5 mt-1.5">
      <div class="relative">
        <div class="absolute top-4 left-2">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input id="searchbox" type="text" class="bg-sharee text-white h-14 w-full pr-8 pl-10 rounded-xl z-0 focus:shadow focus:outline-none placeholder-white text-2xl" placeholder="Search" />
      </div>
    </div>
    <div class="w-1/4 h-full flex justify-end">
      <ul class="flex text-xl">
        <li class="mt-4 mr-6">Messenger</li>
        <li class="mt-4 mr-6">Profile</li>
        <li class="mt-4 mr-6">Points</li>
        <li class="mt-4 mr-6"><img class="h-full w-full rounded-full" src="https://thispersondoesnotexist.com/image?s=y" alt="avatar" /></li>
      </ul>
    </div>
</div>
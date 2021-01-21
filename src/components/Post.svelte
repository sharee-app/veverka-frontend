<script lang="ts">
    export let name: string;
    export let text: string;
    export let community: string;
    export let relativeTime: string;
    export let edited: boolean;
    export let avatar: string;
    export let score: number;
</script>

<div class="shadow-sm px-4 py-3 w-full">
    <div class="flex items-center">
      <img class="h-8 w-8 rounded-full" src="{avatar}" alt="avatar" />
      <div class="ml-2">
        <div class="text-sm">
          <span class="font-semibold text-gray-500">{name}</span>
          <span class="text-gray-500">to s/{community}</span>
        </div>
        <div class="text-gray-500 text-xs flex">
          <span class="inline-block">{relativeTime} {edited ? "• Edited" : ""} </span>
        </div>
      </div>
    </div>
    <p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">{text}</p>
    <div class="text-gray-500 text-xs flex items-center mt-3 ml-3 justify-end">
      <span class="flex">
        <svg class="w-7 h-5 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
        <svg class="w-7 h-5 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        <svg class="w-7 h-5 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
        <span class="text-sm">{score}</span>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
        </svg>
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </span>
    </div>
</div>
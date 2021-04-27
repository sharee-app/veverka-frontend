<script lang="ts">
  import Menu from './components/Menu.svelte';
  export let currentRoute

  let themeMode: string =
    window.matchMedia('(prefers-color-scheme: dark)').matches === true
      ? 'dark'
      : 'light';

  function activateTheme(theme: string) {
    themeMode = theme;
  }

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addListener((e) => e.matches && activateTheme('dark'));

  window
    .matchMedia('(prefers-color-scheme: light)')
    .addListener((e) => e.matches && activateTheme('light'));

  document.onkeyup = function (e) {
    const ev = e || window.event // for IE to cover IEs window object
    if (ev.ctrlKey && ev.key == '/') {
      const searchBox = document.querySelector('#searchbox');
      searchBox.focus();
      return false;
    }
  }
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    width: 100vw;
    padding: 0 !important;
    @apply dark:bg-gray-800;
    max-width: 99vw !important;
  }
</style>

<main>
  <div class="h-screen w-screen dark:bg-gray-800 dark:text-white pr-12 pl-12">
    <Menu theme={themeMode} />
    <div class="flex">
      <div class="w-3/5 h-full">
        <img
          src="https://avatars.githubusercontent.com/u/57829748?v=4"
          alt="..."
          class="rounded-full h-20 float-left w-20 mr-3 flex items-center
          justify-center" />
        <h3 class="text-2xl pt-3">{ !currentRoute.namedParams.username ? "Filip Troníček" : `@${currentRoute.namedParams.username}` }</h3>
        <h4 class="text-lg">Active Since Jan 2021</h4>
        <br />
        <div id="socials" class="w-auto h-8 mb-4">
          <svg
            class="w-8 mr-3 float-left text-black dark:text-white"
            fill="currentColor"
            stroke="none"
            id="twitter-svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0
              002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384
              4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666
              2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0
              01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0
              01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102
              2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557
              2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21
              0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
          <svg
            class="w-8 mr-3 float-left text-black dark:text-white"
            fill="currentColor"
            stroke="none"
            id="reddit-svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12
              12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0
              1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674
              1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0
              .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13
              4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87
              0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028
              12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883
              2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0
              0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25
              12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0
              1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687
              0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0
              1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466
              3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913
              2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0
              .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828
              0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
          </svg>
          <svg
            class="w-8 mr-3 float-left text-black dark:text-white"
            fill="currentColor"
            stroke="none"
            id="instagram-svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333
              4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333
              4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072
              4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384
              2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499
              2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015
              4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718
              2.126-1.384.666-.667 1.079-1.335
              1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319
              1.347 20.651.935
              19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12
              0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249
              2.227.415.562.217.96.477 1.382.896.419.42.679.819.896
              1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015
              3.585-.074 4.85c-.061 1.17-.256 1.805-.421
              2.227-.224.562-.479.96-.899
              1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211
              0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844
              0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689
              1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06
              4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405
              2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162
              0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4
              4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44
              1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439
              1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
          </svg>
          <svg
			class="w-8 mr-3 float-left text-black dark:text-white"
			fill="currentColor"
			stroke="none"
            id="facebook-svg"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388
              10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007
              1.792-4.669 4.533-4.669 1.312 0 2.686.235
              2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956
              1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062
              24 12.073z" />
          </svg>
        </div>
          <button
            class="bg-transparent hover:bg-purple-500 text-purple-700
            font-semibold hover:text-white py-2 px-4 border border-purple-500
            hover:border-transparent rounded mb-4">
            Message Adam
          </button>
        <br />
        <div id="stats">
          <ul>
            <li>Posts: NuM</li>
            <li>Comments: NuM</li>
            <li>Upvotes given: NuM</li>
            <li>Friendships: NuM</li>
            <li># of communities: NuM</li>
          </ul>
        </div>
        <br />
        <div id="badges">
          <svg
            class="w-10 mr-2 float-left"
            data-darkreader-inline-fill=""
            fill="currentColor"
            style="--darkreader-inline-fill:currentColor;"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0
              3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304
              1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723
              1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723
              3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0
              01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976
              3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44
              5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414
              1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd" />
          </svg>

          <h1 class="font-bold text-3xl">Badges Earned</h1>
          <br />
          <svg
            class="w-10 mt-6 mr-1 float-left"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15
              11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2
              0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <h4 class="mt-5">
            Human Calculator
            <br />
            Make 100 posts in Math forum
          </h4>
        </div>
      </div>
    </div>
  </div>
</main>

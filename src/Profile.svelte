<script lang="ts">

	import Card from './components/Post.svelte';
	import Menu from './components/Menu.svelte';

	let themeMode: string = window.matchMedia("(prefers-color-scheme: dark)").matches === true ? "dark" : "light";

	function activateTheme(theme: string) {
		themeMode = theme;
	}

	window.matchMedia("(prefers-color-scheme: dark)").addListener(
	    e => e.matches && activateTheme("dark")
	);

	window.matchMedia("(prefers-color-scheme: light)").addListener(
	    e => e.matches && activateTheme("light")
	);

	document.onkeyup = function(e) {
		const ev = e || window.event; // for IE to cover IEs window object
		if (ev.ctrlKey && ev.key == "/") {
			const searchBox = document.querySelector("#searchbox")
			searchBox.focus();
			return false;
		}
	}

</script>

<main>
	<div class="h-screen w-screen dark:bg-gray-800 dark:text-white pr-12 pl-12">
	  <Menu theme={themeMode} />
	  <div class="flex">
		<div class="w-3/5 h-full">
			<h2 class="text-3xl font-bold flex">
				<svg class="w-9 h-9 mr-2 head-icon text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
				</svg>
				Frontpage
			</h2>

			<Card 
				name="Pepa von Depo" 
				text="Jednou Chucka podrobili testům kvůli steroidům. Ukázalo se, že testy jsou pozitivní. Byl z toho veliký poprask a všichni se ptali, jak je to možné. Chuck se k tomu vyjádřil následovně: 'A z čeho si myslíte, že steroidy jsou?'"
				edited={true}
				community="UltraVtipnéVtipy"
				relativeTime="3h"
				avatar="https://thiscatdoesnotexist.com/"
				score={42}
			/>
		</div>
	  </div>
	</div>
  </main>
  
  

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



















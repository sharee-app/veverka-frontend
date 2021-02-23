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
	<div class="h-screen w-screen dark:bg-gray-800 dark:text-white lg:px-12 px-3">
	  <Menu theme={themeMode} />
	  <div class="flex">
		<div class="w-1/5 h-full hidden lg:block">
		  <h2 class="text-3xl font-bold flex">
			<svg class="w-9 h-9 mr-2 head-icon text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
			</svg>
			Hot of the day
		  </h2>
		  <Card 
		  	name="Pepa von Depo" 
			text="Gibbet lugsail aft chase guns list schooner barque galleon gun ho. Swab tender measured fer yer chains lateen sail poop deck mizzenmast tackle Yellow Jack prow barque. Wench chandler heave to line hogshead lookout Arr measured fer yer chains league belay. Parley hogshead hang the jib yawl smartly league Barbary Coast schooner salmagundi nipperkin. Black jack flogging Nelsons folly cog fire ship to go on account hearties bowsprit careen squiffy. Jolly Roger lanyard chantey long clothes Shiver me timbers tackle mizzen chase mizzenmast parrel."
			edited={true}
			community="Vše"
			relativeTime="3h"
			avatar="https://thiscatdoesnotexist.com/"
			score={42}
		  />

		  <Card 
		  	name="Adam von Prag" 
			text='Muž přijde domů a vidí svou světlovlasou manželku, jak dává na zeď mokrý hadr. „Co to proboha děláš?" ptá se. „Pan doktor mi řekl, že mám dávat studené obklady na místo, kde jsem se odřela!"'
			edited={false}
			community="blondýnky"
			relativeTime="5h"
			avatar="https://thispersondoesnotexist.com/image"
			score={69}
	  	  />

		  <Card 
			name="Adam von Prag" 
		  	text='Víte, proč blondýna zmrzla v letním kině? Chtěla vidět "Přes zimu ZAVŘENO."'
		  	edited={false}
		  	community="blondýnky"
		  	relativeTime="2d"
		  	avatar="https://thispersondoesnotexist.com/image"
			score={420}
		  />
		</div>
		<div class="lg:w-3/5 w-full h-full">
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

			<Card 
				name="Fufrán" 
				text="Otázka: jakou chuť má cibule?"
				edited={true}
				community="KZamyšlení"
				relativeTime="2y"
				avatar="https://thiscatdoesnotexist.com/?u=haha"
				score={2}
			/>
		</div>
		<div class="w-1/5 h-full hidden lg:block">
			<h2 class="text-3xl font-bold flex">
				<svg class="w-9 h-9 mr-2 head-icon text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
				</svg>
			Latest activity
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

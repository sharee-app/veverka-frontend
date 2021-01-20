<script>

let themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches === true ? "dark" : "light";

function activateTheme(theme) {
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
    alert('Keyboard shortcut working!');
	const searchBox = document.querySelector("#searchbox")
	searchBox.focus();
    return false;
  }
}

</script>

<main>
	<div class="h-screen w-screen dark:bg-gray-800 dark:text-white pr-12 pl-12">
	  <div class="h-16 w-full flex mb-12 pt-5 justify-between">
		<div class="w-60 h-full mt-4 justify-start"><img src={themeMode === "dark" ? 'img/logo.svg' : 'img/light.svg' } class="max-h-full"></div>
		<div class="w-2/4 h-4/5 mt-1.5">
		  <div class="relative">
			<div class="absolute top-4 left-2">
			  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
			</div>
			<input id="searchbox" type="text" class="bg-sharee h-14 w-full pr-8 pl-10 rounded-xl z-0 focus:shadow focus:outline-none placeholder-white text-2xl" placeholder="Search" />
		  </div>
		</div>
		<div class="w-1/4 h-full flex justify-end">
		  <ul class="flex text-xl">
			<li class="mt-4 mr-6">Messenger</li>
			<li class="mt-4 mr-6">Profile</li>
			<li class="mt-4 mr-6">Points</li>
		  </ul>
		</div>
	  </div>
	  <div class="flex">
		<div class="w-1/3 h-full">
		  <h2 class="text-3xl font-bold flex">
			<svg class="w-9 h-9 mr-2 head-icon text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path>
			</svg>
			Hot of the day
		  </h2>
		  <div class="shadow-sm px-4 py-3 w-full">
			<div class="flex items-center">
			  <img class="h-8 w-8 rounded-full" src="https://thiscatdoesnotexist.com/" />
			  <div class="ml-2">
				<div class="text-sm">
				  <span class="font-semibold text-gray-500">Pepa z Depa</span>
				  <span class="text-gray-500">to s/Vše</span>
				</div>
				<div class="text-gray-500 text-xs flex">
				  <span class="inline-block">3h • Edited </span>
				</div>
			  </div>
			</div>
			<p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">Gibbet lugsail aft chase guns list schooner barque galleon gun ho. Swab tender measured fer yer chains lateen sail poop deck mizzenmast tackle Yellow Jack prow barque. Wench chandler heave to line hogshead lookout Arr measured fer yer chains league belay. Parley hogshead hang the jib yawl smartly league Barbary Coast schooner salmagundi nipperkin. Black jack flogging Nelsons folly cog fire ship to go on account hearties bowsprit careen squiffy. Jolly Roger lanyard chantey long clothes Shiver me timbers tackle mizzen chase mizzenmast parrel.</p>
			<div class="text-gray-500 text-xs flex items-center mt-3 ml-3 justify-end">
			  <span class="flex">
				<svg class="w-7 h-5 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
				<svg class="w-7 h-5 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
				<svg class="w-7 h-5 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
				<span class="text-sm">47</span>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
				</svg>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			  </span>
			</div>
		  </div>
		  <div class="shadow-sm px-4 py-3 w-full">
			<div class="flex items-center">
			  <img class="h-12 w-12 rounded-full" src="https://thispersondoesnotexist.com/image" />
			  <div class="ml-2">
				<div class="text-sm">
				  <span class="font-semibold">Adam von Prag</span>
				  <span class="text-gray-500">@adameek</span>
				</div>
				<div class="text-gray-500 text-xs">to s/blondýnky</div>
				<div class="text-gray-500 text-xs flex">
				  <span class="inline-block">5h</span>
				</div>
			  </div>
			</div>
			<p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">Muž přijde domů a vidí svou světlovlasou manželku, jak dává na zeď mokrý hadr. „Co to proboha děláš?" ptá se. „Pan doktor mi řekl, že mám dávat studené obklady na místo, kde jsem se odřela!"</p>
			<div class="text-gray-500 text-xs flex items-center mt-3 ml-3 justify-end">
			  <span class="ml-1 flex">
				<svg class="w-6 h-4 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
				<svg class="w-6 h-4 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
				<svg class="w-6 h-4 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
				<span class="ml-3 mr-1"> 69 </span>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
				</svg>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			  </span>
			</div>
		  </div>
		  <div class="shadow-sm px-4 py-3 w-full">
			<div class="flex items-center">
			  <img class="h-12 w-12 rounded-full" src="https://thispersondoesnotexist.com/image" />
			  <div class="ml-2">
				<div class="text-sm">
				  <span class="font-semibold">Adam von Prag</span>
				  <span class="text-gray-500">@adameek</span>
				</div>
				<div class="text-gray-500 text-xs">to s/blondýnky</div>
				<div class="text-gray-500 text-xs flex">
				  <span class="inline-block">2d</span>
				</div>
			  </div>
			</div>
			<p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">
			  Víte, proč blondýna zmrzla v letním kině ?
			  <br />
			  Chtěla vidět "Přes zimu ZAVŘENO."
			</p>
			<div class="text-gray-500 text-xs flex items-center mt-3 ml-3 justify-end">
			  <span class="ml-1 flex">
				<svg class="w-6 h-4 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
				<svg class="w-6 h-4 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
				<svg class="w-6 h-4 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
				<span class="ml-3 mr-1"> 420 </span>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>
				</svg>
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
				</svg>
			  </span>
			</div>
		  </div>
		</div>
		<div class="w-1/3 h-full text-3xl font-bold flex">
		  <svg class="w-9 h-9 mr-2 head-icon text-black dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
		  </svg>
		  Frontpage
		</div>
		<div class="w-1/3 h-full text-3xl font-bold flex">
		  <svg class="w-9 h-9 mr-2 head-icon text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
		  </svg>
		  Latest activity
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

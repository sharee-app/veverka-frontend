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

</script>

<main>
	<div class="h-screen w-screen dark:bg-gray-800 dark:text-white pr-12 pl-12">
		<div class="h-16 w-full flex mb-4 pt-4">
		   <div class="w-1/4 h-full">
				<img src={themeMode === "dark" ? "img/logo.svg" : "img/light.svg"} class="max-h-full">
			</div>
		   <div class="w-2/4 h-4/5 mx-8 mt-1.5">
			<div class="relative">
				<div class="absolute top-4 left-2"><svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></div>
				<input type="text" class="bg-sharee h-14 w-7/12 pr-8 pl-10 rounded-xl z-0 focus:shadow focus:outline-none placeholder-white text-2xl" placeholder="Search"/>
			  </div>		  
		   </div>
		   <div class="w-1/4 h-full flex">
			<ul class="flex text-xl">
				<li class="m-3">Messenger</li>
				<li class="m-3">Profile</li>
				<li class="m-3">Points</li>
			</ul>
			</div>
		</div>
		<div class="flex">
		   <div class="w-1/3 h-full">
			  <h2 class="text-3xl font-bold flex">
				<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path>
				</svg> 
				  Hot of the day</h2>
			  <div class="shadow-sm px-4 py-3 w-full">
				 <div class="flex items-center">
					<img class="h-12 w-12 rounded-full" src="https://thiscatdoesnotexist.com/" />
					<div class="ml-2">
					   <div class="text-sm">
						  <span class="font-semibold">Pepa z Depa</span>
						  <span class="text-gray-500">@peepo</span>
					   </div>
					   <div class="text-gray-500 text-xs">to s/Vše</div>
					   <div class="text-gray-500 text-xs flex">
						  <span class="inline-block">3h • Edited </span>
					   </div>
					</div>
				 </div>
				 <p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">
					Gibbet lugsail aft chase guns list schooner barque galleon gun ho. Swab tender measured fer yer chains lateen sail poop deck mizzenmast tackle Yellow Jack prow barque. Wench chandler heave to line hogshead lookout Arr measured fer yer chains league belay.
					Parley hogshead hang the jib yawl smartly league Barbary Coast schooner salmagundi nipperkin. Black jack flogging Nelsons folly cog fire ship to go on account hearties bowsprit careen squiffy. Jolly Roger lanyard chantey long clothes Shiver me timbers tackle mizzen chase mizzenmast parrel. 
				 </p>
				 <div class="text-gray-500 text-xs flex items-center mt-3 ml-3 justify-end">
					<span class="ml-1 flex">
					  <svg class="w-6 h-4 hover:text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
					  <svg class="w-6 h-4 hover:text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
					  <svg class="w-6 h-4 hover:text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path></svg>
					  <span class="ml-3 mr-1"> 47 </span>
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
						  <span class="inline-block">5h</span>
					   </div>
					</div>
				 </div>
				 <p class="text-gray-800 dark:text-white text-sm mt-2 leading-normal md:leading-relaxed">
					Muž přijde domů a vidí svou světlovlasou manželku, jak dává na zeď mokrý hadr. „Co to proboha děláš?" ptá se. „Pan doktor mi řekl, že mám dávat studené obklady na místo, kde jsem se odřela!"
				 </p>
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
					<br>
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
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
			</svg>
			Homepage</div>
		   <div class="w-1/3 h-full text-3xl font-bold flex">
			<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
			</svg>
			Feed</div>
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

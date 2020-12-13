<script>
	export let emoji;
</script>

<main>
	<h1 class="text-6xl font-bold dark:text-white">Veverka Frontend is housed here {emoji}!</h1>
	<p class="dark:text-white">Check out our <a href="https://github.com/microsoftstc/veverka-frontend">repo</a> or else</p>
</main>

<style global lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	body {
		width: 100vw;
		padding: 0 !important;
		@apply dark:bg-gray-800;
	}

	main {
    	padding: 50px;
  	}
</style>  

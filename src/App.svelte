<script>
	export let emoji;
</script>

<main>
	<h1>Veverka Frontend is housed here {emoji}!</h1>
	<p>Check out our <a href="https://github.com/microsoftstc/veverka-frontend">repo</a> or else</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
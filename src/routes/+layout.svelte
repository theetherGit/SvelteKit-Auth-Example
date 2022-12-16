<script>
	import '../app.css';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
	<Navbar >
	<main>
		<slot />
	</main>
	</Navbar>
</div>

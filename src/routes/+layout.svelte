<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props(); // Props para el slot
  </script>
  
  <div class="min-h-screen flex flex-col">
	<Navbar />
	<main class="container mx-auto p-4 flex-grow">
	  {@render children()}
	</main>
  </div>
<script lang="ts">
	import { Button } from '@/components/ui/button/';
	import '../app.css';
	let { children } = $props();
</script>


<div class="min-h-screen flex flex-col">
	<!-- Navbar superior -->
	<nav class="bg-gray-800 text-white p-4">
	  <div class="container mx-auto flex justify-between items-center">
		<h1 class="text-xl font-bold">Buena Vida</h1>
		<div class="space-x-4">
		  <Button href="/" variant="link" class="text-white hover:bg-gray-700">Dashboard</Button>
		  <Button href="/participants" variant="link" class="text-white hover:bg-gray-700">Participants</Button>
		  <Button href="/case-managers" variant="link" class="text-white hover:bg-gray-700">Case Managers</Button>
		  <Button href="/caregivers" variant="link" class="text-white hover:bg-gray-700">Caregivers</Button>
		  <Button href="/agencies" variant="link" class="text-white hover:bg-gray-700">Agencies</Button>
		</div>
	  </div>
	</nav>
</div>
{@render children()}

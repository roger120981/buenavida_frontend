<script lang="ts">
    import { onMount } from 'svelte';
    import { getParticipants } from '$lib/api/participants';
    import { Button } from '$lib/components/ui/button';
    import { STATUS_ACTIVE, STATUS_INACTIVE } from '$lib/constants';
  
    let activeCount = 0;
    let inactiveCount = 0;
    let error: string | null = null;
  
    onMount(async () => {
      try {
        const active = await getParticipants(fetch, 1, 10, { isActive: STATUS_ACTIVE });
        const inactive = await getParticipants(fetch, 1, 10, { isActive: STATUS_INACTIVE });
        activeCount = active.total;
        inactiveCount = inactive.total;
      } catch (err) {
        error = 'Error loading dashboard data';
        console.error(err);
      }
    });
  </script>
  
  <main class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Dashboard</h1>
    {#if error}
      <p class="text-red-500">{error}</p>
    {:else}
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border p-4 rounded">
          <h2 class="text-xl font-semibold">Active Participants</h2>
          <p class="text-3xl">{activeCount}</p>
          <Button href="/participants" class="mt-2">View All</Button>
        </div>
        <div class="border p-4 rounded">
          <h2 class="text-xl font-semibold">Inactive Participants</h2>
          <p class="text-3xl">{inactiveCount}</p>
          <Button href="/participants" class="mt-2">View All</Button>
        </div>
      </div>
    {/if}
  </main>

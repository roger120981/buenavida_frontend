<script lang="ts">
  import type { Participant } from '$lib/types/participant';
  import DataTable from '$lib/components/DataTable.svelte';
  import { columns } from './columns';

  let { data } = $props<{ data: { participants: Participant[] } }>();
  let { participants } = data;
</script>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Participants</h1>
  <DataTable data={participants} {columns} />
</main>
<script lang="ts">
  import type { Participant } from '$lib/types/participant';
  import DataTable from '$lib/components/DataTable.svelte';
  import { columns } from './columns';

  let { data } = $props<{ data: { participants: Participant[] } }>();
  let { participants } = data;
</script>

demo
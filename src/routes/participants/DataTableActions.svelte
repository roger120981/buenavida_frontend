<script lang="ts">
    import Ellipsis from 'lucide-svelte/icons/ellipsis';
    import { Button } from '$lib/components/ui/button';
    import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
  
    let { id, isActive, onDeactivate } = $props<{
      id: number;
      isActive: boolean;
      onDeactivate?: (id: number) => void;
    }>();
  </script>
  
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      {#snippet child({ props })}
        <Button
          {...props}
          variant="ghost"
          size="icon"
          class="relative size-8 p-0"
        >
          <span class="sr-only">Open menu</span>
          <Ellipsis />
        </Button>
      {/snippet}
    </DropdownMenu.Trigger>
    <DropdownMenu.Content>
      <DropdownMenu.Group>
        <DropdownMenu.GroupHeading>Actions</DropdownMenu.GroupHeading>
        <DropdownMenu.Item onclick={() => (window.location.href = `/participants/${id}`)}>
          View Details
        </DropdownMenu.Item>
        {#if isActive}
          <DropdownMenu.Item onclick={() => onDeactivate?.(id)}>
            Deactivate
          </DropdownMenu.Item>
        {/if}
      </DropdownMenu.Group>
    </DropdownMenu.Content>
  </DropdownMenu.Root>
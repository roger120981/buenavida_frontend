<!-- src/lib/components/Navbar.svelte -->
<script lang="ts">
    import { page } from '$app/stores'; // Para resaltar la página activa
    import { Button } from '$lib/components/ui/button';
    import { Home, Users, UserCog, Heart, Building } from 'lucide-svelte';
  
    let navItems = [
      { label: 'Dashboard', href: '/dashboard', icon: Home },
      { label: 'Participants', href: '/participants', icon: Users },
      { label: 'Case Managers', href: '/case-managers', icon: UserCog },
      { label: 'Caregivers', href: '/caregivers', icon: Heart },
      { label: 'Agencies', href: '/agencies', icon: Building },
    ];
  </script>
  
  <nav class="bg-gray-800 text-white p-4 shadow-lg shadow-gray-900/50">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo Tipográfico -->
      <a
        href="/"
        class="text-4xl font-black tracking-tight text-white hover:text-gray-200 transition-all duration-300 drop-shadow-md"
      >
        Buena Vida
      </a>
  
      <!-- Links de Navegación -->
      <div class="flex space-x-4">
        {#each navItems as item}
          <Button
            variant={$page.url.pathname === item.href ? 'default' : 'ghost'}
            href={item.href}
            class="flex items-center gap-2 text-white {$page.url.pathname === item.href
              ? 'bg-gray-600 hover:bg-gray-500'
              : 'hover:bg-gray-700'} transition-colors"
          >
            <svelte:component this={item.icon} class="w-4 h-4" />
            {item.label}
          </Button>
        {/each}
      </div>
    </div>
  </nav>
  
  <style>
    nav {
      position: sticky;
      top: 0;
      z-index: 10;
    }
  </style>
<script lang="ts">
  import type { Project } from '$lib/types/portfolio';

  export let project: Project;
  export let index: number = 0;

  let showNotifyModal = false;
  let email = '';

  function handleNotifySubmit() {
    // Here you could integrate with a notification service
    // For now, we'll just show a success message
    alert('Thanks! We\'ll notify you when this project launches.');
    showNotifyModal = false;
    email = '';
  }
</script>

<div class="animate-scale-in" style="animation-delay: {index * 0.1}s;">
  <div class="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-yellow-200 dark:border-yellow-800 h-full flex flex-col relative">
    <!-- Animated Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-4 left-4 w-8 h-8 border-2 border-yellow-400 rounded-full animate-ping"></div>
      <div class="absolute top-8 right-8 w-4 h-4 border-2 border-orange-400 rounded-full animate-pulse"></div>
      <div class="absolute bottom-8 left-8 w-6 h-6 border-2 border-yellow-500 rounded-full animate-bounce"></div>
    </div>

    <!-- Project Image/Icon with Construction Theme -->
    <div class="h-48 bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 flex items-center justify-center relative overflow-hidden">
      <div class="text-6xl animate-bounce">🚧</div>
      <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
    </div>
    
    <!-- Project Content -->
    <div class="p-6 flex flex-col flex-grow relative z-10">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-xl font-bold text-yellow-800 dark:text-yellow-200 line-clamp-2">{project.title}</h3>
        <span class="px-3 py-1 bg-yellow-500 text-white text-xs rounded-full font-medium animate-pulse">
          Coming Soon
        </span>
      </div>
      
      <p class="text-yellow-700 dark:text-yellow-300 mb-4 line-clamp-3 min-h-[4.5rem]">
        🚀 We're crafting something amazing! This project is currently under development and will be available soon.
      </p>
      
      {#if project.role || project.company}
        <div class="mb-4">
          <p class="text-sm text-yellow-600 dark:text-yellow-400">
            {project.role} {#if project.company}• {project.company}{/if}
          </p>
        </div>
      {/if}
      
      <!-- Technologies Preview -->
      <div class="mb-4">
        <p class="text-sm text-yellow-600 dark:text-yellow-400 font-medium mb-2">Planned Technologies:</p>
        <div class="flex flex-wrap gap-2">
          {#each project.technologies.slice(0, 4) as tech}
            <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-md">
              {tech}
            </span>
          {/each}
          {#if project.technologies.length > 4}
            <span class="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
          {/if}
        </div>
      </div>
      
      <!-- Progress Indicator -->
      <div class="mb-4">
        <div class="flex items-center justify-between text-sm text-yellow-600 dark:text-yellow-400 mb-2">
          <span>Development Progress</span>
          <span class="font-medium">In Progress</span>
        </div>
        <div class="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-2">
          <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full animate-pulse" style="width: 65%"></div>
        </div>
      </div>
      
      <!-- Action Buttons -->
      <div class="flex gap-3 mt-auto">
        <button
          on:click={() => showNotifyModal = true}
          class="flex-1 px-4 py-2 bg-yellow-500 text-white text-center rounded-lg hover:bg-yellow-600 transition-colors duration-200 text-sm font-medium"
        >
          Notify Me
        </button>
        <button
          disabled
          class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-center rounded-lg cursor-not-allowed text-sm font-medium"
        >
          Preview Unavailable
        </button>
      </div>
    </div>
  </div>
</div>

<!-- Notification Modal -->
{#if showNotifyModal}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" on:click={() => showNotifyModal = false}>
    <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-md w-full p-6" on:click|stopPropagation>
      <div class="text-center">
        <div class="text-4xl mb-4">🚀</div>
        <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-2">
          Get Notified!
        </h3>
        <p class="text-dark-600 dark:text-dark-300 mb-6">
          We'll let you know as soon as "{project.title}" is ready to launch.
        </p>
        
        <form on:submit|preventDefault={handleNotifySubmit} class="space-y-4">
          <input
            type="email"
            bind:value={email}
            placeholder="Enter your email"
            required
            class="w-full px-4 py-2 border border-dark-300 dark:border-dark-600 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent dark:bg-dark-800 dark:text-white"
          />
          <div class="flex gap-3">
            <button
              type="button"
              on:click={() => showNotifyModal = false}
              class="flex-1 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="flex-1 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Notify Me
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}

<style>
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
</style>

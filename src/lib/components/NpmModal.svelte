<script lang="ts">
  import type { NpmPackage } from '$lib/types/portfolio';

  export let show: boolean = false;
  export let project: any = null;
  export let onClose: () => void = () => {};

  function handleBackdropClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }
</script>

{#if show && project}
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" on:click={handleBackdropClick}>
    <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" on:click|stopPropagation>
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-dark-900 dark:text-white">
            {project.title} - NPM Packages
          </h2>
          <button
            on:click={onClose}
            class="text-dark-400 hover:text-dark-600 dark:text-dark-500 dark:hover:text-dark-300 transition-colors duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div class="space-y-4">
          {#each project.npmPackages as npmPackage}
            <a
              href={npmPackage.url}
              target="_blank"
              rel="noopener noreferrer"
              class="block border border-dark-200 dark:border-dark-700 rounded-lg p-4 hover:bg-dark-50 dark:hover:bg-dark-800 hover:border-red-300 dark:hover:border-red-600 transition-all duration-200 cursor-pointer group"
            >
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-dark-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors duration-200">{npmPackage.name}</h3>
                <span class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full font-medium">
                  NPM
                </span>
              </div>
              <p class="text-dark-600 dark:text-dark-300 text-sm group-hover:text-dark-700 dark:group-hover:text-dark-200 transition-colors duration-200">{npmPackage.description}</p>
              <div class="mt-3 flex items-center text-red-600 dark:text-red-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span>View on NPM</span>
                <svg class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          {/each}
        </div>
        
        <div class="mt-6 pt-4 border-t border-dark-200 dark:border-dark-700">
          <p class="text-sm text-dark-500 dark:text-dark-400 text-center">
            Choose the package that matches your framework. All packages are built with TypeScript and follow the same design system.
          </p>
        </div>
      </div>
    </div>
  </div>
{/if}

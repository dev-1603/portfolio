<script lang="ts">
  import type { NpmPackage } from '$lib/types/portfolio';
  import { Icon } from '$lib/components';

  export let show: boolean = false;
  export let project: any = null;
  export let onClose: () => void = () => {};

  function handleBackdropClick(event: MouseEvent | KeyboardEvent) {
    if ('currentTarget' in event && event.target === event.currentTarget) {
      onClose();
    }
  }
</script>

{#if show && project}
  <div 
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    on:click={handleBackdropClick}
    role="button"
    tabindex="0"
    on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && handleBackdropClick(e)}
    aria-label="Close modal"
  >
    <div 
      class="bg-white dark:bg-dark-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div class="p-6">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-2xl font-bold text-dark-900 dark:text-white">
            {project.title} - NPM Packages
          </h2>
          <button
            on:click={onClose}
            class="text-dark-400 hover:text-dark-600 dark:text-dark-500 dark:hover:text-dark-300 transition-colors duration-200"
          >
            <Icon name="close" className="w-6 h-6" />
          </button>
        </div>
        
        <div class="space-y-4">
          {#each project.npmPackages as npmPackage}
            <div class="border border-dark-200 dark:border-dark-700 rounded-lg p-4">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-lg font-semibold text-dark-900 dark:text-white">{npmPackage.name}</h3>
                <div class="flex items-center gap-2">
                  {#if npmPackage.githubUrl}
                    <a
                      href={npmPackage.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-full font-medium hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
                      on:click|stopPropagation
                    >
                      GitHub
                    </a>
                  {/if}
                  <a
                    href={npmPackage.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200"
                    on:click|stopPropagation
                  >
                    NPM
                  </a>
                </div>
              </div>
              <p class="text-dark-600 dark:text-dark-300 text-sm">{npmPackage.description}</p>
            </div>
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

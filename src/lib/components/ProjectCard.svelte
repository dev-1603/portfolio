<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  export let project!: any;
  export let index: number = 0;
  export let showType: boolean = true;
  export let showRole: boolean = true;
  export let showImpact: boolean = true;
  export let showGitHubStats: boolean = true;
  export let showNpmButton: boolean = true;

  export let expandedDescriptions: Set<number> = new Set();
  
  const dispatch = createEventDispatcher();
  
  // Computed property for NPM button visibility
  $: shouldShowNpmButton = 
    showNpmButton && 
    ((project?.npmPackages?.length) || project?.npmUrl) && 
    project.isPublished;
  
  // Computed property for NPM button type (modal vs direct link)
  $: npmButtonType = project?.npmPackages?.length > 0 ? 'modal' : 'link';
  
  function toggleDescription(index: number) {
    if (expandedDescriptions.has(index)) {
      expandedDescriptions.delete(index);
    } else {
      expandedDescriptions.add(index);
    }
    // Trigger reactivity
    expandedDescriptions = expandedDescriptions;
  }
  
  function isDescriptionTruncated(description: string): boolean {
    // Rough estimate: if description is longer than ~150 characters, it's likely truncated
    return description.length > 150;
  }
  
  function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && img.nextElementSibling) {
      img.style.display = 'none';
      (img.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  }
  
  function openNpmModal(project: any) {
    dispatch('npmModal', { project });
  }
</script>

<div class="animate-scale-in" style="animation-delay: {index * 0.1}s;">
  <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-dark-200 dark:border-dark-700 h-full flex flex-col">
    <!-- Project Image/Icon -->
    <div class="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center overflow-hidden">
      {#if project.image}
        <img 
          src={project.image} 
          alt="{project.title}" 
          class="w-full h-full object-cover"
          on:error={handleImageError}
        />
        <div class="text-4xl absolute inset-0 flex items-center justify-center bg-primary-100/80 dark:bg-primary-900/40" style="display: none;">
          {project.type === 'professional' ? '🏢' : '🚀'}
        </div>
      {:else}
        <div class="text-4xl">{project.type === 'professional' ? '🏢' : '🚀'}</div>
      {/if}
    </div>
    
    <!-- Project Content -->
    <div class="p-6 flex flex-col flex-grow">
      <div class="mb-3">
        <h3 class="text-xl font-bold text-dark-900 dark:text-white line-clamp-2 mb-2">{project.title}</h3>
        {#if showType}
          {#if project.type === 'professional'}
            <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full capitalize">
              {project.type}
            </span>
          {:else}
            <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
              Personal
            </span>
          {/if}
        {/if}
      </div>
      
      <!-- Description with expand/collapse functionality -->
      <div class="mb-4">
        {#if expandedDescriptions.has(index)}
          <p class="text-dark-600 dark:text-dark-300">{project.description}</p>
          {#if isDescriptionTruncated(project.description)}
            <button
              on:click={() => toggleDescription(index)}
              class="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline mt-2"
            >
              Show less
            </button>
          {/if}
        {:else}
          <p class="text-dark-600 dark:text-dark-300 line-clamp-3 min-h-[4.5rem]">{project.description}</p>
          {#if isDescriptionTruncated(project.description)}
            <button
              on:click={() => toggleDescription(index)}
              class="text-primary-600 dark:text-primary-400 text-sm font-medium hover:underline mt-2"
            >
              Read more
            </button>
          {/if}
        {/if}
      </div>
      
      {#if showRole && (project.role || project.company)}
        <div class="mb-4">
          <p class="text-sm text-primary-600 dark:text-primary-400">
            {project.role} {#if project.company}• {project.company}{/if}
          </p>
        </div>
      {/if}
      
      {#if showImpact && project.impact}
        <div class="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p class="text-sm text-green-700 dark:text-green-300 font-medium">Impact:</p>
          <p class="text-sm text-green-600 dark:text-green-400">{project.impact}</p>
        </div>
      {/if}
      
      <!-- Technologies -->
      <div class="mb-4">
        <div class="flex flex-wrap gap-2">
          {#each project.technologies.slice(0, 4) as tech}
            <span class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md">
              {tech}
            </span>
          {/each}
          {#if project.technologies.length > 4}
            <span class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md">
              +{project.technologies.length - 4} more
            </span>
          {/if}
        </div>
      </div>
      
      <!-- GitHub Stats for Personal Projects -->
      {#if showGitHubStats && project.type === 'personal' && (project.stars || project.forks)}
        <div class="flex items-center gap-4 mb-4 text-sm text-dark-500 dark:text-dark-400">
          {#if project.stars}
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              {project.stars}
            </span>
          {/if}
          {#if project.forks}
            <span class="flex items-center">
              <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {project.forks}
            </span>
          {/if}
        </div>
      {/if}
      
      <!-- Action Buttons -->
      <div class="flex gap-3 mt-auto">
        {#if project.githubUrl}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            class="flex-1 px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-center rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200 text-sm font-medium"
          >
            GitHub
          </a>
        {/if}
        
        <!-- CTA Button for Personal Projects -->
        {#if project.type === 'personal'}
          {#if project.underDevelopment}
            <a
              href="/development-in-progress?title={encodeURIComponent(project.title)}&id={project.id}"
              class="flex-1 px-4 py-2 bg-yellow-500 text-white text-center rounded-lg hover:bg-yellow-600 transition-colors duration-200 text-sm font-medium"
            >
              🚧 In Development
            </a>
          {:else if project.liveUrl}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 px-4 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
            >
              🚀 Live Demo
            </a>
          {/if}
        {/if}
        
        <!-- Live Demo for Professional Projects -->
        {#if project.type === 'professional' && project.liveUrl}
          {#if project.underDevelopment}
            <a
              href="/development-in-progress?title={encodeURIComponent(project.title)}&id={project.id}"
              class="flex-1 px-4 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
            >
              Live Demo
            </a>
          {:else}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 px-4 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
            >
              Live Demo
            </a>
          {/if}
        {/if}
        
        {#if shouldShowNpmButton}
          {#if npmButtonType === 'modal'}
            <button
              on:click={() => openNpmModal(project)}
              class="flex-1 px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
            >
              NPM
            </button>
          {:else}
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 px-4 py-2 bg-red-600 text-white text-center rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
            >
              NPM
            </a>
          {/if}
        {/if}
      </div>
    </div>
  </div>
</div>

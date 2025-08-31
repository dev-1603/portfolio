<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo } from '$lib/data/personal';
  import { professionalProjects, personalProjects } from '$lib/data/projects';
  import type { Repository } from '$lib/types/github';

  let githubRepos: Repository[] = [];
  let loading = true;
  let activeTab: 'professional' | 'personal' | 'github' = 'professional';
  let filteredProjects = professionalProjects;

  onMount(async () => {
    if (browser) {
      await fetchGitHubRepos();
    }
  });

  async function fetchGitHubRepos() {
    try {
      loading = true;
      const response = await fetch('https://api.github.com/users/dev-1603/repos?sort=updated&per_page=12');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      githubRepos = repos.map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
        topics: repo.topics || []
      }));
    } catch (err) {
      console.error('Error fetching repos:', err);
    } finally {
      loading = false;
    }
  }

  function switchTab(tab: 'professional' | 'personal' | 'github') {
    activeTab = tab;
    switch (tab) {
      case 'professional':
        filteredProjects = professionalProjects;
        break;
      case 'personal':
        filteredProjects = personalProjects;
        break;
      case 'github':
        filteredProjects = [];
        break;
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
</script>

<svelte:head>
  <title>Projects - {personalInfo.name}</title>
  <meta name="description" content="Professional and personal projects by {personalInfo.name}" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-dark-900">
  <!-- Header -->
  <section class="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          My Projects
        </h1>
        <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
          A showcase of my professional work and personal projects, demonstrating expertise across various technologies and domains.
        </p>
      </div>
    </div>
  </section>

  <!-- Tab Navigation -->
  <section class="py-8 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap justify-center gap-4">
        <button
          on:click={() => switchTab('professional')}
          class="px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus-ring"
          class:bg-primary-600={activeTab === 'professional'}
          class:text-white={activeTab === 'professional'}
          class:bg-dark-100={activeTab !== 'professional'}
          class:dark:bg-dark-800={activeTab !== 'professional'}
          class:text-dark-700={activeTab !== 'professional'}
          class:dark:text-dark-300={activeTab !== 'professional'}
        >
          Professional Projects
        </button>
        <button
          on:click={() => switchTab('personal')}
          class="px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus-ring"
          class:bg-primary-600={activeTab === 'personal'}
          class:text-white={activeTab === 'personal'}
          class:bg-dark-100={activeTab !== 'personal'}
          class:dark:bg-dark-800={activeTab !== 'personal'}
          class:text-dark-700={activeTab !== 'personal'}
          class:dark:text-dark-300={activeTab !== 'personal'}
        >
          Personal Projects
        </button>
        <button
          on:click={() => switchTab('github')}
          class="px-6 py-3 rounded-lg font-medium transition-colors duration-200 focus-ring"
          class:bg-primary-600={activeTab === 'github'}
          class:text-white={activeTab === 'github'}
          class:bg-dark-100={activeTab !== 'github'}
          class:dark:bg-dark-800={activeTab !== 'github'}
          class:text-dark-700={activeTab !== 'github'}
          class:dark:text-dark-300={activeTab !== 'github'}
        >
          GitHub Repositories
        </button>
      </div>
    </div>
  </section>

  <!-- Projects Grid -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {#if activeTab !== 'github'}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredProjects as project, index}
            <div class="animate-scale-in" style="animation-delay: {index * 0.1}s;">
              <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-dark-200 dark:border-dark-700">
                <!-- Project Image/Icon -->
                <div class="h-48 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 flex items-center justify-center">
                  <div class="text-4xl">🚀</div>
                </div>
                
                <!-- Project Content -->
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h3 class="text-xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
                    {#if project.type === 'professional'}
                      <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                        Professional
                      </span>
                    {:else}
                      <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                        Personal
                      </span>
                    {/if}
                  </div>
                  
                  <p class="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  {#if project.role || project.company}
                    <div class="mb-4">
                      <p class="text-sm text-primary-600 dark:text-primary-400">
                        {project.role} {#if project.company}• {project.company}{/if}
                      </p>
                    </div>
                  {/if}
                  
                  {#if project.impact}
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
                  {#if project.type === 'personal' && (project.stars || project.forks)}
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
                  <div class="flex gap-3">
                    {#if project.githubUrl}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-center rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200 text-sm"
                      >
                        GitHub
                      </a>
                    {/if}
                    {#if project.liveUrl}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 px-4 py-2 bg-primary-600 text-white text-center rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm"
                      >
                        Live Demo
                      </a>
                    {/if}
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <!-- GitHub Repositories -->
        {#if loading}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each Array(6) as _, i}
              <div class="bg-white dark:bg-dark-900 rounded-lg shadow p-6">
                <div class="shimmer h-4 bg-dark-200 dark:bg-dark-700 rounded mb-3"></div>
                <div class="shimmer h-3 bg-dark-200 dark:bg-dark-700 rounded mb-4 w-3/4"></div>
                <div class="shimmer h-3 bg-dark-200 dark:bg-dark-700 rounded mb-4"></div>
                <div class="flex gap-2">
                  <div class="shimmer h-6 w-16 bg-dark-200 dark:bg-dark-700 rounded"></div>
                  <div class="shimmer h-6 w-16 bg-dark-200 dark:bg-dark-700 rounded"></div>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each githubRepos as repo, index}
              <div class="animate-scale-in" style="animation-delay: {index * 0.05}s;">
                <div class="bg-white dark:bg-dark-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-dark-200 dark:border-dark-700">
                  <h3 class="text-lg font-semibold mb-2">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                      {repo.name}
                    </a>
                  </h3>
                  <p class="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
                    {repo.description || 'No description available'}
                  </p>
                  <div class="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
                    {#if repo.language}
                      <span class="flex items-center">
                        <div class="w-3 h-3 bg-primary-500 rounded-full mr-2"></div>
                        {repo.language}
                      </span>
                    {/if}
                    <span>Updated {formatDate(repo.updated_at)}</span>
                  </div>
                  <div class="flex items-center gap-4 text-sm">
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      {repo.stargazers_count}
                    </span>
                    <span class="flex items-center">
                      <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      {/if}
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-dark-50 dark:bg-dark-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Interested in Working Together?</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 mb-8">
        I'm always open to discussing new projects and opportunities. Let's create something amazing together.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus-ring"
        >
          Get In Touch
        </a>
        <a
          href="https://github.com/dev-1603"
          target="_blank"
          rel="noopener noreferrer"
          class="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors duration-200 focus-ring"
        >
          View All on GitHub
        </a>
      </div>
    </div>
  </section>
</div>

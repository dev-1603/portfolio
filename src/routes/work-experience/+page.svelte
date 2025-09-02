<script lang="ts">
  import { workExperience } from '$lib/data/work-experience';
  import { personalInfo } from '$lib/data/personal';
  import { onMount } from 'svelte';

  let currentJob = workExperience.find(job => job.current);

  onMount(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  });

  // Track expanded state for each job's sections
  let expandedSections: Set<string> = new Set();

  function toggleSection(jobId: string, section: string) {
    const key = `${jobId}-${section}`;
    if (expandedSections.has(key)) {
      expandedSections.delete(key);
    } else {
      expandedSections.add(key);
    }
    // Trigger reactivity
    expandedSections = expandedSections;
  }

  function isSectionExpanded(jobId: string, section: string): boolean {
    return expandedSections.has(`${jobId}-${section}`);
  }
</script>

<svelte:head>
  <title>Work Experience - {personalInfo.name}</title>
  <meta name="description" content="Professional work experience and career timeline of {personalInfo.name}" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-dark-900">
  <!-- Header -->
  <section class="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Work Experience
        </h1>
        <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
          {personalInfo.yearsOfExperience}+ years of experience building scalable applications across fintech, AI, and SaaS domains.
        </p>
      </div>
    </div>
  </section>

  <!-- Current Role Highlight -->
  {#if currentJob}
    <section class="py-12 bg-primary-50 dark:bg-primary-900/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8 border border-primary-200 dark:border-primary-800">
          <div class="flex items-center justify-between mb-6">
            <div>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200">
                Current Role
              </span>
            </div>
            <div class="text-sm text-dark-500 dark:text-dark-400">
              {currentJob.duration}
            </div>
          </div>
          <h2 class="text-2xl font-bold mb-2">{currentJob.title}</h2>
          <p class="text-lg text-primary-600 dark:text-primary-400 mb-4">{currentJob.company} • {currentJob.location}</p>
          <p class="text-dark-600 dark:text-dark-300 mb-6">{currentJob.description}</p>
          
          <div class="flex flex-col gap-6">
            <div>
              <h3 class="text-lg font-semibold mb-3">Key Achievements</h3>
              <ul class="space-y-2">
                {#each currentJob.achievements as achievement}
                  <li class="flex items-start">
                    <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span class="text-dark-700 dark:text-dark-300">{achievement}</span>
                  </li>
                {/each}
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold mb-3">Technologies</h3>
              <div class="flex flex-wrap gap-2">
                {#each currentJob.technologies as tech}
                  <span class="px-3 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-sm rounded-full">
                    {tech}
                  </span>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  {/if}

  <!-- Work Timeline -->
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative">
        <!-- Timeline line -->
        <div class="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-300"></div>
        
        <!-- Timeline items -->
        <div class="space-y-12">
          {#each workExperience as job, index}
            <div class="relative animate-slide-up group" style="animation-delay: {index * 0.15}s;">
              <!-- Timeline dot -->
              <div class="absolute left-8 w-6 h-6 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900 shadow-lg z-10 transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                {#if job.current}
                  <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                {/if}
              </div>
              
              <!-- Content -->
              <div class="ml-20">
                <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-xl p-8 border border-dark-200 dark:border-dark-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group-hover:border-primary-300 dark:group-hover:border-primary-600">
                  <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 class="text-2xl font-bold text-dark-900 dark:text-white mb-2">{job.title}</h3>
                      <p class="text-lg text-primary-600 dark:text-primary-400 mb-1">{job.company}</p>
                      <p class="text-dark-600 dark:text-dark-400">{job.location}</p>
                    </div>
                    <div class="mt-4 md:mt-0">
                      <span class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300">
                        {job.duration}
                      </span>
                      {#if job.current}
                        <span class="ml-2 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 animate-pulse">
                          Current
                        </span>
                      {/if}
                    </div>
                  </div>
                  
                  <p class="text-dark-600 dark:text-dark-300 mb-6 text-lg">{job.description}</p>
                  
                  <div class="grid md:grid-cols-2 gap-8">
                    <!-- Left Column -->
                    <div class="space-y-6">
                      <div>
                        <h4 class="font-semibold text-dark-900 dark:text-white mb-3 text-lg">Key Highlights</h4>
                        <div class="flex flex-wrap gap-2">
                          {#each job.highlights as highlight}
                            <span class="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full font-medium hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200">
                              {highlight}
                            </span>
                          {/each}
                        </div>
                      </div>
                      
                      <div>
                        <h4 class="font-semibold text-dark-900 dark:text-white mb-3 text-lg">Roles & Responsibilities</h4>
                        <ul class="space-y-3">
                          {#each job.roles.slice(0, isSectionExpanded(job.id || index.toString(), 'roles') ? job.roles.length : 5) as role}
                            <li class="flex items-start group/item">
                              <div class="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                              <span class="text-sm text-dark-700 dark:text-dark-300 group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors duration-200">{role}</span>
                            </li>
                          {/each}
                          {#if job.roles.length > 5}
                            <li>
                              <button
                                class="w-full text-left text-sm text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 cursor-pointer"
                                on:click={() => toggleSection(job.id || index.toString(), 'roles')}
                                on:keydown={(e) => e.key === 'Enter' && toggleSection(job.id || index.toString(), 'roles')}>
                                {isSectionExpanded(job.id || index.toString(), 'roles') ? 'Show less' : `+${job.roles.length - 5} more responsibilities`}
                              </button>
                            </li>
                          {/if}
                        </ul>
                      </div>
                    </div>
                    
                    <!-- Right Column -->
                    <div class="space-y-6">
                      <div>
                        <h4 class="font-semibold text-dark-900 dark:text-white mb-3 text-lg">Key Achievements</h4>
                        <ul class="space-y-3">
                          {#each job.achievements.slice(0, isSectionExpanded(job.id || index.toString(), 'achievements') ? job.achievements.length : 4) as achievement}
                            <li class="flex items-start group/item">
                              <div class="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover/item:scale-150 transition-transform duration-200"></div>
                              <span class="text-sm text-dark-700 dark:text-dark-300 group-hover/item:text-green-600 dark:group-hover/item:text-green-400 transition-colors duration-200">{achievement}</span>
                            </li>
                          {/each}
                          {#if job.achievements.length > 4}
                            <li>
                              <button
                                class="w-full text-left text-sm text-green-600 dark:text-green-400 font-medium hover:text-green-700 dark:hover:text-green-300 transition-colors duration-200 cursor-pointer"
                                on:click={() => toggleSection(job.id || index.toString(), 'achievements')}
                                on:keydown={(e) => e.key === 'Enter' && toggleSection(job.id || index.toString(), 'achievements')}>
                                {isSectionExpanded(job.id || index.toString(), 'achievements') ? 'Show less' : `+${job.achievements.length - 4} more achievements`}
                              </button>
                            </li>
                          {/if}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 class="font-semibold text-dark-900 dark:text-white mb-3 text-lg">Technologies</h4>
                        <div class="flex flex-wrap gap-2">
                          {#each job.technologies.slice(0, 8) as tech}
                            <span class="px-3 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-colors duration-200 cursor-pointer">
                              {tech}
                            </span>
                          {/each}
                          {#if job.technologies.length > 8}
                            <span class="px-3 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-sm rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200 cursor-pointer">
                              +{job.technologies.length - 8} more
                            </span>
                          {/if}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {#if job.majorProjects}
                    <div class="mt-8 pt-6 border-t border-dark-200 dark:border-dark-700">
                      <h4 class="font-semibold text-dark-900 dark:text-white mb-4 text-lg">Major Projects</h4>
                      <div class="grid md:grid-cols-2 gap-4">
                        {#each job.majorProjects as project}
                          <div class="p-4 bg-dark-50 dark:bg-dark-800 rounded-lg hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors duration-200 cursor-pointer group">
                            <h5 class="font-medium text-dark-900 dark:text-white text-sm mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">{project.name}</h5>
                            <p class="text-xs text-dark-600 dark:text-dark-400 group-hover:text-dark-700 dark:group-hover:text-dark-300 transition-colors duration-200">{project.description}</p>
                          </div>
                        {/each}
                      </div>
                    </div>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="py-20 bg-dark-50 dark:bg-dark-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to Work Together?</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 mb-8">
        I'm always interested in new opportunities and exciting projects. Let's discuss how I can help bring your ideas to life.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="/contact"
          class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 focus-ring"
        >
          Get In Touch
        </a>
        <a
          href="/projects"
          class="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-colors duration-200 focus-ring"
        >
          View My Projects
        </a>
      </div>
    </div>
  </section>
</div>

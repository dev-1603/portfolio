<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo, contactInfo } from '$lib/data/personal';
  import { workExperience } from '$lib/data/work-experience';
  import { professionalProjects, personalProjects } from '$lib/data/projects';
  import { skills, skillCategories } from '$lib/data/skills';
  import type { Repository } from '$lib/types/github';

  let githubRepos: Repository[] = [];
  let loading = true;
  let selectedCategory = 'all';
  let filteredSkills = skills;

  onMount(async () => {
    if (browser) {
      await fetchGitHubRepos();
    }
  });

  async function fetchGitHubRepos() {
    try {
      loading = true;
      const response = await fetch('https://api.github.com/users/dev-1603/repos?sort=updated&per_page=6');
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

  function filterSkills(category: string) {
    selectedCategory = category;
    if (category === 'all') {
      filteredSkills = skills;
    } else {
      filteredSkills = skills.filter(skill => skill.category === category);
    }
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }

  function handleImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && img.nextElementSibling) {
      img.style.display = 'none';
      (img.nextElementSibling as HTMLElement).style.display = 'flex';
    }
  }
  function scrollToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
</script>

<svelte:head>
  <title>{personalInfo.name} - {personalInfo.title}</title>
  <meta name="description" content="{personalInfo.summary}" />
</svelte:head>

<!-- Hero Section -->
<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
  <!-- Background gradient -->
  <div class="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"></div>
  
  <!-- Animated background elements -->
  <div class="absolute inset-0 overflow-hidden">
    <div class="absolute top-20 left-20 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl animate-float"></div>
    <div class="absolute bottom-20 right-20 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-float" style="animation-delay: -2s;"></div>
    <div class="absolute top-1/2 left-1/4 w-48 h-48 bg-accent-300/15 rounded-full blur-2xl animate-float" style="animation-delay: -1s;"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-3 gap-8 items-center">
      <!-- Left Column - Main Content -->
      <div class="order-2 lg:order-1 lg:col-span-2 animate-fade-in mb-4 lg:mb-0">
        <div class="text-center lg:text-left">
          <!-- Experience Badge -->
          <div class="mb-6">
            <span class="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              {personalInfo.yearsOfExperience}+ Years Experience
            </span>
          </div>

          <!-- Name & Title -->
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span class="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <p class="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-6">
            {personalInfo.title}
          </p>
          
          <!-- Summary -->
          <p class="text-lg text-dark-500 dark:text-dark-400 mb-8 max-w-3xl mx-auto lg:mx-0">
            {personalInfo.summary}
          </p>
          
          <!-- Domain Highlights -->
          <div class="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
            {#each personalInfo.domains as domain}
              <span class="px-4 py-2 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 rounded-full text-sm font-medium hover:bg-accent-200 dark:hover:bg-accent-900/50 transition-colors duration-200 cursor-pointer">
                {domain}
              </span>
            {/each}
          </div>

          <!-- CTA Buttons & Resume Download -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
            <a
              href="#projects"
              class="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-200 focus-ring transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                View My Work
              </span>
            </a>
            <a
              href="/contact"
              class="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-200 focus-ring transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Me
              </span>
            </a>
            <a
              href={contactInfo.resume2025}
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 font-semibold rounded-lg transition-all duration-200 focus-ring transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </span>
            </a>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-md mx-auto lg:mx-0">
            <div class="bg-white dark:bg-dark-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">{personalInfo.yearsOfExperience}+</div>
              <div class="text-xs text-dark-600 dark:text-dark-400">Years</div>
            </div>
            <div class="bg-white dark:bg-dark-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="text-2xl font-bold text-accent-600 dark:text-accent-400 mb-1">{personalInfo.domains.length}</div>
              <div class="text-xs text-dark-600 dark:text-dark-400">Domains</div>
            </div>
            <div class="bg-white dark:bg-dark-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400 mb-1">{skills.length}+</div>
              <div class="text-xs text-dark-600 dark:text-dark-400">Skills</div>
            </div>
            <div class="bg-white dark:bg-dark-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
              <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">{professionalProjects.length + personalProjects.length}</div>
              <div class="text-xs text-dark-600 dark:text-dark-400">Projects</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Column - Avatar & Social -->
      <div class="order-1 lg:order-2 animate-fade-in  pt-4 lg:pt-0" style="animation-delay: 0.2s;">
        <div class="relative">
          <!-- Avatar Container -->
          <div class="relative mx-auto lg:mx-0 w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
            <div class="w-full h-full bg-gradient-to-br from-primary-200 via-accent-200 to-primary-300 dark:from-primary-800 dark:via-accent-800 dark:to-primary-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden">
              <!-- Replace this div with your actual image -->
              <img 
                src="/resumes/myAvatar.png" 
                alt="{personalInfo.name}" 
                class="w-full h-full object-cover rounded-full"
                on:error={handleImageError}
              />
              <div class="text-7xl text-primary-600 dark:text-primary-400" style="display: none;">
                👨‍💻
              </div>
              
              <!-- Floating elements around avatar -->
              <div class="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <svg class="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              
              <div class="absolute -bottom-2 -left-2 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="flex justify-center lg:justify-start gap-3 sm:gap-4 mt-6">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200 focus-ring transform hover:scale-110"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200 focus-ring transform hover:scale-110"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:mohapatra.dev02@gmail.com"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200 focus-ring transform hover:scale-110"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
          </div>

          <!-- Quick Info Cards -->
          <div class="mt-6 space-y-3">
            <div class="bg-white dark:bg-dark-900 rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-xs sm:text-sm font-medium text-dark-900 dark:text-white">Location</div>
                  <div class="text-xs text-dark-600 dark:text-dark-400">{personalInfo.location}</div>
                </div>
              </div>
            </div>
            
            <!-- <div class="bg-white dark:bg-dark-900 rounded-xl p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center">
                <div class="w-10 h-10 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mr-3">
                  <svg class="w-5 h-5 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div class="text-sm font-medium text-dark-900 dark:text-white">Status</div>
                  <div class="text-xs text-dark-600 dark:text-dark-400">
                    {personalInfo.availableForWork ? 'Available for Work' : 'Currently Employed'}
                  </div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-16 left-1/2 transform -translate-x-1/2 animate-bounce hidden lg:block">
    <div class="bg-white dark:bg-dark-900 rounded-full p-2 shadow-lg cursor-pointer  hover:bg-gray-100 dark:hover:bg-gray-600 hover:shadow-xl transition-shadow duration-300"
      on:click={scrollToAbout}
    >

      <svg class="w-6 h-6 text-dark-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </div>
  </div>
</section>

<!-- About Section -->
<section id="about" class="py-20 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">About Me</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        {personalInfo.yearsOfExperience}+ years of experience building scalable applications with a focus on user experience and technical excellence.
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="animate-slide-up">
        <div class="prose prose-lg dark:prose-invert max-w-none">
          <p class="text-lg leading-relaxed mb-6">
            {personalInfo.about}
          </p>
          <div class="flex flex-wrap gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div class="animate-slide-up" style="animation-delay: 0.2s;">
        <div class="relative">
          <div class="w-full h-96 bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900/20 dark:to-accent-900/20 rounded-2xl flex items-center justify-center">
            <div class="text-center">
              <div class="text-6xl mb-4">👨‍💻</div>
              <p class="text-lg font-medium text-dark-700 dark:text-dark-300">
                {personalInfo.title}
              </p>
              <p class="text-sm text-dark-500 dark:text-dark-400 mt-2">
                {personalInfo.yearsOfExperience}+ years experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Work Experience Highlights -->
<section class="py-20 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Work Experience</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        A timeline of my professional journey and key achievements.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {#each workExperience.slice(0, 3) as job, index}
        <div class="animate-slide-up" style="animation-delay: {index * 0.1}s;">
          <div class="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-lg font-bold text-dark-900 dark:text-white">{job.title}</h3>
              {#if job.current}
                <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                  Current
                </span>
              {/if}
            </div>
            <p class="text-primary-600 dark:text-primary-400 mb-2">{job.company}</p>
            <p class="text-dark-600 dark:text-dark-400 text-sm mb-4">{job.duration}</p>
            <p class="text-dark-700 dark:text-dark-300 text-sm mb-4">{job.description}</p>
            
            <!-- Key Highlights -->
            <div class="mb-4">
              <div class="flex flex-wrap gap-2">
                {#each job.highlights as highlight}
                  <span class="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full font-medium">
                    {highlight}
                  </span>
                {/each}
              </div>
            </div>
            
            <!-- Top Achievement -->
            {#if job.achievements.length > 0}
              <div class="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <p class="text-sm text-green-700 dark:text-green-300 font-medium mb-1">Key Achievement:</p>
                <p class="text-sm text-green-600 dark:text-green-400">{job.achievements[0]}</p>
              </div>
            {/if}
            
            <!-- Technologies -->
            <div class="flex flex-wrap gap-2">
              {#each job.technologies.slice(0, 4) as tech}
                <span class="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-md">
                  {tech}
                </span>
              {/each}
              {#if job.technologies.length > 4}
                <span class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md">
                  +{job.technologies.length - 4} more
                </span>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>

    <div class="text-center mt-12">
      <a
        href="/work-experience"
        class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
      >
        View Full Experience
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Featured Projects Section -->
<section id="projects" class="py-20 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Featured Projects</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        A showcase of my professional work and personal projects, demonstrating expertise across various technologies and domains.
      </p>
    </div>

    <!-- Professional Projects -->
    <div class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Professional Projects</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each professionalProjects.slice(0, 3) as project, index}
          <div class="animate-scale-in" style="animation-delay: {index * 0.1}s;">
            <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-dark-200 dark:border-dark-700">
              <div class="h-48 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/20 dark:to-blue-800/20 flex items-center justify-center overflow-hidden">
                {#if project.image}
                  <img 
                    src={project.image} 
                    alt="{project.title}" 
                    class="w-full h-full object-cover"
                    on:error={handleImageError}
                  />
                  <div class="text-4xl absolute inset-0 flex items-center justify-center bg-blue-100/80 dark:bg-blue-900/40" style="display: none;">
                    🏢
                  </div>
                {:else}
                  <div class="text-4xl">🏢</div>
                {/if}
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
                  <span class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                    Professional
                  </span>
                </div>
                <p class="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">{project.description}</p>
                {#if project.impact}
                  <div class="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p class="text-sm text-green-700 dark:text-green-300 font-medium">Impact:</p>
                    <p class="text-sm text-green-600 dark:text-green-400">{project.impact}</p>
                  </div>
                {/if}
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies.slice(0, 4) as tech}
                    <span class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md">
                      {tech}
                    </span>
                  {/each}
                </div>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Personal Projects -->
    <div class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Personal Projects</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each personalProjects.slice(0, 3) as project, index}
          <div class="animate-scale-in" style="animation-delay: {index * 0.1}s;">
            <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-dark-200 dark:border-dark-700">
              <div class="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/20 dark:to-green-800/20 flex items-center justify-center overflow-hidden">
                {#if project.image}
                  <img 
                    src={project.image} 
                    alt="{project.title}" 
                    class="w-full h-full object-fit"
                    on:error={handleImageError}
                  />
                  <div class="text-4xl absolute inset-0 flex items-center justify-center bg-green-100/80 dark:bg-green-900/40" style="display: none;">
                    🚀
                  </div>
                {:else}
                  <div class="text-4xl">🚀</div>
                {/if}
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <h3 class="text-xl font-bold text-dark-900 dark:text-white">{project.title}</h3>
                  <span class="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full">
                    Personal
                  </span>
                </div>
                <p class="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">{project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  {#each project.technologies.slice(0, 4) as tech}
                    <span class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md">
                      {tech}
                    </span>
                  {/each}
                </div>
                {#if project.stars || project.forks}
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
    </div>

    <div class="text-center">
      <a
        href="/projects"
        class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
      >
        View All Projects
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  </div>
</section>

<!-- Skills Section -->
<section id="skills" class="py-20 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Skills & Technologies</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        I work with a wide range of technologies to build modern, scalable applications.
      </p>
    </div>

    <!-- Skill Categories Filter -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      <button
        on:click={() => filterSkills('all')}
        class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus-ring"
        class:bg-primary-600={selectedCategory === 'all'}
        class:text-white={selectedCategory === 'all'}
        class:bg-dark-100={selectedCategory !== 'all'}
        class:dark:bg-dark-800={selectedCategory !== 'all'}
        class:text-dark-700={selectedCategory !== 'all'}
        class:dark:text-dark-300={selectedCategory !== 'all'}
      >
        All Skills
      </button>
      {#each skillCategories as category}
        <button
          on:click={() => filterSkills(category.key)}
          class="px-4 py-2 rounded-lg font-medium transition-colors duration-200 focus-ring"
          class:bg-primary-600={selectedCategory === category.key}
          class:text-white={selectedCategory === category.key}
          class:bg-dark-100={selectedCategory !== category.key}
          class:dark:bg-dark-800={selectedCategory !== category.key}
          class:text-dark-700={selectedCategory !== category.key}
          class:dark:text-dark-300={selectedCategory !== category.key}
        >
          {category.icon} {category.label}
        </button>
      {/each}
    </div>

    <!-- Skills Grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {#each filteredSkills as skill, index}
        <div class="animate-scale-in" style="animation-delay: {index * 0.05}s;">
          <div class="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex items-center justify-between mb-3">
              <h3 class="font-semibold text-dark-900 dark:text-white">{skill.name}</h3>
              <span class="text-sm text-dark-500 dark:text-dark-400">{skill.proficiency}%</span>
            </div>
            <div class="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2 mb-3">
              <div 
                class="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full transition-all duration-1000"
                style="width: {skill.proficiency}%"
              ></div>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-xs text-dark-500 dark:text-dark-400 capitalize">
                {skill.category.replace('-', ' ')}
              </span>
              {#if skill.color}
                <div class="w-3 h-3 rounded-full" style="background-color: {skill.color}"></div>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- GitHub Repositories Section -->
<section class="py-20 bg-white dark:bg-dark-900">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Latest GitHub Repositories</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        Check out my latest work on GitHub. All repositories are automatically updated from my GitHub profile.
      </p>
    </div>

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
  </div>
</section>

<!-- Contact Section -->
<section id="contact" class="py-20 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Get In Touch</h2>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        I'm always interested in new opportunities and exciting projects. Let's work together!
      </p>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div class="animate-slide-up">
        <h3 class="text-2xl font-bold mb-6">Let's Connect</h3>
        <div class="space-y-4">
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p class="font-medium">Email</p>
              <a href="mailto:{contactInfo.email}" class="text-primary-600 dark:text-primary-400 hover:underline">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p class="font-medium">LinkedIn</p>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">
                debjyoti-mohapatra
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4">
              <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
            <div>
              <p class="font-medium">GitHub</p>
              <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">
                dev-1603
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="animate-slide-up" style="animation-delay: 0.2s;">
        <div class="bg-white dark:bg-dark-900 rounded-2xl p-6 shadow-lg">
          <h3 class="text-xl font-bold mb-6">Send a Message</h3>
          <p class="text-dark-600 dark:text-dark-300 mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <a
            href="/contact"
            class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send Message
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

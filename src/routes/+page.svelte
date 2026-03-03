<script lang="ts">
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { personalInfo, contactInfo, experienceText } from '$lib/data/personal';
  import { workExperience } from '$lib/data/work-experience';
  import { professionalProjects, personalProjects } from '$lib/data/projects';
  import { skills, skillCategories } from '$lib/data/skills';
  import type { Repository } from '$lib/types/github';
  import { Icon, ProjectCard } from '$lib/components';
  import { fetchGitHubRepos } from '$lib/github';

  let githubRepos: Repository[] = [];
  let loading = true;
  let selectedCategory = 'all';
  let filteredSkills = skills;
  let expandedDescriptions: Set<number> = new Set();
  // Track which work-experience cards have their technologies expanded
  let expandedTech: Set<number> = new Set();

  function toggleTech(i: number) {
    if (expandedTech.has(i)) {
      expandedTech.delete(i);
    } else {
      expandedTech.add(i);
    }
    // Reassign to trigger Svelte reactivity for Set mutations
    expandedTech = new Set(expandedTech);
  }

  // Computed properties for sorted projects
  $: sortedProfessionalProjects = professionalProjects
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 3);
  
  $: sortedPersonalProjects = personalProjects
    .sort((a, b) => (a.order || 0) - (b.order || 0))
    .slice(0, 3);

  onMount(async () => {
    if (browser) {
      await loadGithubRepos();
    }
  });

  async function loadGithubRepos() {
    try {
      loading = true;
      githubRepos = await fetchGitHubRepos('dev-1603', 6);
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
              <Icon name="briefcase" className="w-4 h-4 mr-2" />
              {experienceText} Years Experience
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
                <Icon name="view-work" className="w-5 h-5 mr-2" />
                View My Work
              </span>
            </a>
            <a
              href="/contact"
              class="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-lg transition-all duration-200 focus-ring transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                <Icon name="envelope" className="w-5 h-5 mr-2" />
                Contact Me
              </span>
            </a>
            <a
              href={contactInfo.resume}
              download="Debjyoti Mohapatra-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              class="px-8 py-4 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 font-semibold rounded-lg transition-all duration-200 focus-ring transform hover:scale-105"
            >
              <span class="flex items-center justify-center">
                <Icon name="download" className="w-5 h-5 mr-2" />
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
              <div class="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-accent-500 rounded-full flex items-center justify-center shadow-lg animate-bounce text-white">
                <Icon name="lightbulb" className="w-4 h-4 sm:w-6 sm:h-6" />
              </div>
              
              <div class="absolute -bottom-2 -left-2 w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full flex items-center justify-center shadow-lg animate-pulse text-white">
                <Icon name="lightning" className="w-4 h-4 sm:w-5 sm:h-5" />
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
              <Icon name="github" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200 focus-ring transform hover:scale-110"
            >
              <Icon name="linkedin" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
            <a
              href="mailto:mohapatra.dev02@gmail.com"
              class="w-10 h-10 sm:w-12 sm:h-12 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-all duration-200 focus-ring transform hover:scale-110"
            >
              <Icon name="email" className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>

          <!-- Quick Info Cards -->
          <div class="mt-6 space-y-3">
            <div class="bg-white dark:bg-dark-900 rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div class="flex items-center">
                <div class="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mr-3 text-primary-600 dark:text-primary-400">
                  <Icon name="location" className="w-4 h-4 sm:w-5 sm:h-5" />
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
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="bg-white dark:bg-dark-900 rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 hover:shadow-xl transition-shadow duration-300 text-dark-400"
      on:click={scrollToAbout}
    >
      <Icon name="chevron-down" className="w-6 h-6" />
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
              <Icon name="github" className="w-5 h-5 mr-2" />
              GitHub
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200"
            >
              <Icon name="linkedin" className="w-5 h-5 mr-2" />
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
                {experienceText}  years experience
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
                {#if expandedTech.has(index)}
                  {#each job.technologies.slice(4) as tech}
                    <span class="px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs rounded-md">
                      {tech}
                    </span>
                  {/each}

                  <button
                    on:click={() => toggleTech(index)}
                    aria-expanded={expandedTech.has(index)}
                    class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md focus-ring"
                  >
                    Show less
                  </button>
                {:else}
                  <button
                    on:click={() => toggleTech(index)}
                    aria-expanded={expandedTech.has(index)}
                    class="px-2 py-1 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 text-xs rounded-md focus-ring"
                  >
                    +{job.technologies.length - 4} more
                  </button>
                {/if}
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
        <Icon name="arrow-right" className="w-5 h-5 ml-2" />
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
        {#each sortedProfessionalProjects as project, index}
          <ProjectCard 
            {project} 
            {index} 
            {expandedDescriptions}
            showRole={true}
            showImpact={true}
            showGitHubStats={false}
            showNpmButton={false}
          />
        {/each}
      </div>
    </div>

    <!-- Personal Projects -->
    <div class="mb-16">
      <h3 class="text-2xl font-bold mb-8 text-center">Personal Projects</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each sortedPersonalProjects as project, index}
          <ProjectCard 
            {project} 
            {index} 
            {expandedDescriptions}
            showRole={false}
            showImpact={false}
            showGitHubStats={true}
            showNpmButton={false}
          />
        {/each}
      </div>
    </div>

    <div class="text-center">
      <a
        href="/projects"
        class="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
      >
        View All Projects
        <Icon name="arrow-right" className="w-5 h-5 ml-2" />
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
                  <Icon name="star" className="w-4 h-4 mr-1" />
                  {repo.stargazers_count}
                </span>
                <span class="flex items-center">
                  <Icon name="fork" className="w-4 h-4 mr-1" />
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
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
              <Icon name="envelope" className="w-6 h-6" />
            </div>
            <div>
              <p class="font-medium">Email</p>
              <a href="mailto:{contactInfo.email}" class="text-primary-600 dark:text-primary-400 hover:underline">
                {contactInfo.email}
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
              <Icon name="linkedin" className="w-6 h-6" />
            </div>
            <div>
              <p class="font-medium">LinkedIn</p>
              <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" class="text-primary-600 dark:text-primary-400 hover:underline">
                debjyoti-mohapatra
              </a>
            </div>
          </div>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 text-primary-600 dark:text-primary-400">
              <Icon name="github" className="w-6 h-6" />
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
            <Icon name="envelope" className="w-5 h-5 mr-2" />
            Send Message
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

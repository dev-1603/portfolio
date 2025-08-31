<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { personalInfo } from '$lib/data/personal';

  let projectTitle = '';
  let projectId = '';

  onMount(() => {
    // Get project info from URL params
    const urlParams = new URLSearchParams(window.location.search);
    projectTitle = urlParams.get('title') || 'This Project';
    projectId = urlParams.get('id') || '';
  });

  function goBack() {
    window.history.back();
  }

  function goToProjects() {
    window.location.href = '/projects';
  }
</script>

<svelte:head>
  <title>Development in Progress - {personalInfo.name}</title>
  <meta name="description" content="{projectTitle} is currently under development. Check back soon!" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 flex items-center justify-center p-4">
  <div class="max-w-2xl w-full">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-20 left-20 w-32 h-32 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-ping"></div>
      <div class="absolute top-40 right-20 w-24 h-24 bg-orange-200 dark:bg-orange-800 rounded-full opacity-20 animate-pulse"></div>
      <div class="absolute bottom-20 left-1/3 w-16 h-16 bg-yellow-300 dark:bg-yellow-700 rounded-full opacity-30 animate-bounce"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 bg-white dark:bg-dark-900 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
      <!-- Construction Icon -->
      <div class="mb-8">
        <div class="text-8xl mb-4 animate-bounce">🚧</div>
        <div class="text-6xl mb-4 animate-pulse">🛠️</div>
        <div class="text-4xl animate-ping">⚡</div>
      </div>

      <!-- Title -->
      <h1 class="text-4xl md:text-5xl font-bold text-yellow-800 dark:text-yellow-200 mb-6">
        Development in Progress
      </h1>

      <!-- Project Info -->
      <div class="mb-8">
        <h2 class="text-2xl font-semibold text-dark-900 dark:text-white mb-4">
          {projectTitle}
        </h2>
        <p class="text-lg text-yellow-700 dark:text-yellow-300">
          🚀 We're working hard to bring you something amazing!
        </p>
      </div>

      <!-- Progress Section -->
      <div class="mb-8">
        <div class="flex items-center justify-between text-sm text-yellow-600 dark:text-yellow-400 mb-3">
          <span>Development Progress</span>
          <span class="font-medium">65% Complete</span>
        </div>
        <div class="w-full bg-yellow-200 dark:bg-yellow-800 rounded-full h-3 mb-4">
          <div class="bg-gradient-to-r from-yellow-400 to-orange-500 h-3 rounded-full animate-pulse" style="width: 65%"></div>
        </div>
        <p class="text-sm text-dark-600 dark:text-dark-400">
          Estimated completion: Coming Soon
        </p>
      </div>

      <!-- Features Preview -->
      <div class="mb-8">
        <h3 class="text-xl font-semibold text-dark-900 dark:text-white mb-4">
          What's Coming
        </h3>
        <div class="grid md:grid-cols-2 gap-4 text-left">
          <div class="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div class="text-2xl mr-3">✨</div>
            <span class="text-dark-700 dark:text-dark-300">Modern UI/UX Design</span>
          </div>
          <div class="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div class="text-2xl mr-3">⚡</div>
            <span class="text-dark-700 dark:text-dark-300">High Performance</span>
          </div>
          <div class="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div class="text-2xl mr-3">🔒</div>
            <span class="text-dark-700 dark:text-dark-300">Secure & Reliable</span>
          </div>
          <div class="flex items-center p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
            <div class="text-2xl mr-3">📱</div>
            <span class="text-dark-700 dark:text-dark-300">Mobile Responsive</span>
          </div>
        </div>
      </div>

      <!-- Notification Section -->
      <div class="mb-8 p-6 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl">
        <h3 class="text-xl font-semibold text-dark-900 dark:text-white mb-3">
          Stay Updated!
        </h3>
        <p class="text-dark-600 dark:text-dark-300 mb-4">
          Get notified when this project launches and be the first to try it out.
        </p>
        <button
          on:click={() => {
            // You could integrate with a notification service here
            alert('Thanks! We\'ll notify you when this project launches.');
          }}
          class="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-200 focus-ring"
        >
          Notify Me When Ready
        </button>
      </div>

      <!-- Action Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          on:click={goBack}
          class="px-6 py-3 bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 font-semibold rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200 focus-ring"
        >
          ← Go Back
        </button>
        <button
          on:click={goToProjects}
          class="px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
        >
          View Other Projects
        </button>
      </div>

      <!-- Footer -->
      <div class="mt-8 pt-6 border-t border-yellow-200 dark:border-yellow-800">
        <p class="text-sm text-dark-500 dark:text-dark-400">
          Questions? Feel free to <a href="/contact" class="text-yellow-600 dark:text-yellow-400 hover:underline">get in touch</a>!
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  /* Animation styles are handled via Tailwind classes in the component */
</style>

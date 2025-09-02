<script lang="ts">
  import { contactInfo, personalInfo } from '$lib/data/personal';
  import { onMount } from 'svelte';

  let contactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  let submitting = false;
  let submitSuccess = false;
  let submitError = '';

  onMount(() => {
    window.scrollTo(0, 0);
  });

  async function handleContactSubmit() {
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      submitError = 'Please fill in all required fields.';
      return;
    }

    submitting = true;
    submitError = '';

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you'd send this to your backend
      console.log('Contact form submitted:', contactForm);
      
      submitSuccess = true;
      contactForm = { name: '', email: '', subject: '', message: '' };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    } catch (error) {
      submitError = 'Failed to send message. Please try again.';
    } finally {
      submitting = false;
    }
  }
</script>

<svelte:head>
  <title>Contact - {personalInfo.name}</title>
  <meta name="description" content="Get in touch with {personalInfo.name} for collaboration opportunities" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-dark-900">
  <!-- Header -->
  <section class="pt-20 pb-12 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6 gradient-text">
          Get In Touch
        </h1>
        <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Let's discuss how we can work together to bring your ideas to life.
        </p>
      </div>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="py-20">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="animate-slide-up">
          <h2 class="text-3xl font-bold mb-8">Let's Connect</h2>
          
          <div class="space-y-6">
            <!-- Email -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-dark-900 dark:text-white mb-1">Email</h3>
                <a href="mailto:{contactInfo.email}" class="text-primary-600 dark:text-primary-400 hover:underline">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-dark-900 dark:text-white mb-1">Phone</h3>
                <a href="tel:{contactInfo.phone}" class="text-primary-600 dark:text-primary-400 hover:underline">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <!-- Location -->
            <div class="flex items-start">
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-dark-900 dark:text-white mb-1">Location</h3>
                <p class="text-dark-600 dark:text-dark-300">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="mt-12">
            <h3 class="text-xl font-semibold mb-6">Connect on Social</h3>
            <div class="flex space-x-4">
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg class="w-6 h-6 text-primary-600 dark:text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Resume Downloads -->
          <div class="mt-12">
            <h3 class="text-xl font-semibold mb-6">Download Resume</h3>
            <div class="space-y-3">
              <a
                href={contactInfo.resume}
              download="Debjyoti_Resume_2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
              >
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>

            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="animate-slide-up" style="animation-delay: 0.2s;">
          <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8 border border-dark-200 dark:border-dark-700">
            <h2 class="text-2xl font-bold mb-6">Send a Message</h2>
            
            <form on:submit|preventDefault={handleContactSubmit} class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  bind:value={contactForm.name}
                  required
                  class="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  bind:value={contactForm.email}
                  required
                  class="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus-ring"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label for="subject" class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  bind:value={contactForm.subject}
                  class="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus-ring"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  bind:value={contactForm.message}
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-dark-300 dark:border-dark-600 rounded-lg bg-white dark:bg-dark-800 text-dark-900 dark:text-white focus-ring resize-none"
                  placeholder="Tell me about your project, requirements, or how I can help..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                class="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 focus-ring"
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {#if submitSuccess}
              <div class="mt-4 p-4 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-lg">
                <p class="text-green-700 dark:text-green-300">Thank you! Your message has been sent successfully. I'll get back to you soon.</p>
              </div>
            {/if}

            {#if submitError}
              <div class="mt-4 p-4 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-lg">
                <p class="text-red-700 dark:text-red-300">{submitError}</p>
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Availability Status -->
  <section class="py-20 bg-dark-50 dark:bg-dark-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div class="bg-white dark:bg-dark-900 rounded-2xl shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-4">Current Availability</h2>
        {#if personalInfo.availableForWork}
          <div class="flex items-center justify-center mb-4">
            <div class="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
            <span class="text-green-700 dark:text-green-300 font-medium">Available for new opportunities</span>
          </div>
          <p class="text-dark-600 dark:text-dark-300">
            I'm currently accepting new projects and full-time opportunities. Let's discuss how I can contribute to your team or project.
          </p>
        {:else}
          <div class="flex items-center justify-center mb-4">
            <div class="w-4 h-4 bg-yellow-500 rounded-full mr-3"></div>
            <span class="text-yellow-700 dark:text-yellow-300 font-medium">Limited availability</span>
          </div>
          <p class="text-dark-600 dark:text-dark-300">
            I'm currently working on exciting projects but still open to discussing interesting opportunities.
          </p>
        {/if}
      </div>
    </div>
  </section>
</div>

<script lang="ts">
  import { contactInfo, personalInfo } from '$lib/data/personal';
  import { onMount } from 'svelte';
  import { Icon } from '$lib/components';

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
      console.log('Sending contact form data:', contactForm);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);
      
      // Check if response is JSON
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        console.error('Non-JSON response:', text);
        throw new Error('Server returned non-JSON response');
      }
      
      const result = await response.json();
      console.log('Response result:', result);

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }
      
      
      submitSuccess = true;
      contactForm = { name: '', email: '', subject: '', message: '' };
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        submitSuccess = false;
      }, 5000);
    } catch (error) {
      console.error('Contact form error:', error);
      submitError = (error as Error).message || 'Failed to send message. Please try again.';
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
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-primary-600 dark:text-primary-400">
                <Icon name="envelope" className="w-6 h-6" />
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
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-primary-600 dark:text-primary-400">
                <Icon name="phone" className="w-6 h-6" />
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
              <div class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 text-primary-600 dark:text-primary-400">
                <Icon name="location" className="w-6 h-6" />
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
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200 text-primary-600 dark:text-primary-400"
                aria-label="LinkedIn"
              >
                <Icon name="linkedin" className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                class="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-200 text-primary-600 dark:text-primary-400"
                aria-label="GitHub"
              >
                <Icon name="github" className="w-6 h-6" />
              </a>
            </div>
          </div>

          <!-- Resume Downloads -->
          <div class="mt-12">
            <h3 class="text-xl font-semibold mb-6">Download Resume</h3>
            <div class="space-y-3">
              <a
                href={contactInfo.resume}
              download="Debjyoti_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 focus-ring"
              >
                <Icon name="download" className="w-5 h-5 mr-2" />
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

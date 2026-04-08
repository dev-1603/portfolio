<script lang="ts">
  import { personalInfo } from '$lib/data/personal';

  const pages = [
    {
      path: '/',
      label: 'Home',
      description: 'Overview of my profile, technical skills, selected projects, and latest GitHub activity.',
      changefreq: 'Weekly',
      priority: '1.0'
    },
    {
      path: '/projects',
      label: 'Projects',
      description: 'Professional and open-source projects with technology stacks, role details, and outcomes.',
      changefreq: 'Weekly',
      priority: '0.9'
    },
    {
      path: '/work-experience',
      label: 'Work Experience',
      description: 'Career timeline, key achievements, responsibilities, and the technologies used.',
      changefreq: 'Monthly',
      priority: '0.9'
    },
    {
      path: '/contact',
      label: 'Contact',
      description: 'Contact form and direct channels for freelance, full-time, and consulting opportunities.',
      changefreq: 'Monthly',
      priority: '0.8'
    },
    {
      path: '/sitemap.xml',
      label: 'Sitemap XML',
      description: 'Machine-readable XML sitemap for search engines and SEO crawlers.',
      changefreq: 'Daily',
      priority: '0.5'
    }
  ];
</script>

<svelte:head>
  <title>Sitemap - {personalInfo.name}</title>
  <meta name="description" content="Sitemap of pages available on {personalInfo.name}'s portfolio website." />
  <meta property="og:title" content="Sitemap - {personalInfo.name}" />
  <meta property="og:description" content="Explore all major pages and the XML sitemap for {personalInfo.name}'s portfolio." />
  <meta property="og:url" content="https://www.debjyoti.in/sitemap" />
  <link rel="canonical" href="https://www.debjyoti.in/sitemap" />
</svelte:head>

<section class="py-20 bg-dark-50 dark:bg-dark-900 min-h-[70vh]">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-14">
      <p class="text-sm uppercase tracking-[0.28em] text-primary-500 dark:text-primary-400 mb-3">Navigation Index</p>
      <h1 class="text-4xl md:text-5xl font-bold mb-4">Sitemap</h1>
      <p class="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
        Quick access to all key pages on this website, including crawl metadata used in `sitemap.xml`.
      </p>
    </div>

    <div class="space-y-4">
      {#each pages as page}
        <a
          href={page.path}
          class="group block rounded-2xl border border-dark-200/80 dark:border-dark-700 bg-white dark:bg-dark-800 p-5 hover:border-primary-400 dark:hover:border-primary-500 hover:shadow-lg hover:shadow-primary-900/10 dark:hover:shadow-primary-900/30 transition-all duration-200 focus-ring"
        >
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 class="text-lg font-semibold text-dark-900 dark:text-white">{page.label}</h2>
              <p class="text-sm text-dark-600 dark:text-dark-300 mt-1 leading-relaxed">{page.description}</p>

              <div class="flex flex-wrap gap-2 mt-3">
                <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-200">
                  Changefreq: {page.changefreq}
                </span>
                <span class="px-2.5 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300">
                  Priority: {page.priority}
                </span>
              </div>
            </div>
            <span class="text-xs sm:text-sm font-mono text-primary-600 dark:text-primary-400 break-all sm:break-normal group-hover:underline">
              {page.path}
            </span>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>


<script lang="ts">
  import { workExperience } from '$lib/data/work-experience';
  import RecommendationCard from '$lib/components/ui/RecommendationCard.svelte';

  const recommendations = workExperience.filter(job => job.testimonial);
</script>

<section id="recommendations" class="py-20 bg-dark-50 dark:bg-dark-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <p class="text-sm uppercase tracking-[0.35em] text-primary-500 dark:text-primary-400 mb-3">What They Say</p>
      <h2 class="text-4xl md:text-5xl font-bold mb-4">
        <span class="gradient-text">Recommendations</span>
      </h2>
      <p class="text-lg text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
        What colleagues and clients have said about working with me.
      </p>
    </div>

    <div class=" flex flex-col gap-8">
      {#each recommendations as job}
        {#if job.testimonial}
          <RecommendationCard
            testimonial={job.testimonial}
            company={job.company}
            showContext={false}
            contextLabel={job.majorProjects?.[0]?.name}
          />
        {/if}
      {/each}
    </div>
  </div>
</section>

<script lang="ts">
  import type { Testimonial } from '$lib/types/portfolio';
  import { Icon } from '$lib/components';

  export let testimonial: Testimonial;
  export let company: string;
  export let showContext: boolean = false;
  export let contextLabel: string | undefined = undefined;
</script>

<div class="recommendation-wrapper">
  {#if showContext && contextLabel}
    <div class="context-label relative z-10">
      <span class="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400">
        {contextLabel} · {company}
      </span>
    </div>
  {/if}
  <div class="recommendation-card bg-white dark:bg-dark-900 rounded-2xl border border-dark-200 dark:border-dark-700 h-full flex flex-col relative overflow-hidden">
  <!-- Decorative opening quote mark -->
  <span class="quote-mark quote-mark--open" aria-hidden="true">&ldquo;</span>
  <!-- Decorative closing quote mark -->
  <span class="quote-mark quote-mark--close" aria-hidden="true">&rdquo;</span>


  <blockquote class="quote-text text-dark-700 dark:text-dark-300 mb-4 flex-grow relative z-10 px-8">
    {testimonial.quote}
  </blockquote>

  <div class="flex items-center gap-8 mt-auto relative z-10 px-8">
    <div>
      <p class="text-sm font-semibold text-dark-900 dark:text-white">{testimonial.author}</p>
      <p class="text-xs text-dark-500 dark:text-dark-400">{testimonial.title}</p>
    </div>
    {#if testimonial.link}
      <a
        href={testimonial.link}
        target="_blank"
        rel="noopener noreferrer"
        class="w-8 h-8 bg-dark-100 dark:bg-dark-800 text-dark-500 dark:text-dark-400 rounded-full flex items-center justify-center hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors duration-200 flex-shrink-0"
        aria-label="View recommendation on LinkedIn"
      >
        <Icon name="linkedin" className="w-6 h-6" />
      </a>
    {/if}
  </div>
  </div>
</div>

<style>
  .recommendation-card {
    padding: 2.25rem;
  }

  .quote-text {
    font-size: 1.02rem;
    line-height: 1.7;
    font-style: italic;
  }

  .quote-mark {
    position: absolute;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 90px;
    line-height: 1;
    pointer-events: none;
    user-select: none;
    z-index: 0;
    background: linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    opacity: 0.45;
  }

  .quote-mark--open {
    top: 0.25rem;
    left: 0.75rem;
  }

  .quote-mark--close {
    bottom: 0.75rem;
    right: 0.75rem;
  }

  :global(.dark) .quote-mark {
    background: linear-gradient(135deg, #818cf8, #a78bfa, #c4b5fd);
    -webkit-background-clip: text;
    background-clip: text;
    opacity: 0.5;
  }

  .recommendation-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .context-label {
    padding-left: 0.25rem;
  }
</style>

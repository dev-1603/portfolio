<script lang="ts">
  import menu from '$lib/assets/images/menu.svg?raw';
  import github from '$lib/assets/images/github.svg?raw';
  import linkedin from '$lib/assets/images/linkedin.svg?raw';
  import briefcase from '$lib/assets/images/briefcase.svg?raw';
  import envelope from '$lib/assets/images/envelope.svg?raw';
  import email from '$lib/assets/images/email.svg?raw';
  import download from '$lib/assets/images/download.svg?raw';
  import lightbulb from '$lib/assets/images/lightbulb.svg?raw';
  import lightning from '$lib/assets/images/lightning.svg?raw';
  import location from '$lib/assets/images/location.svg?raw';
  import chevronDown from '$lib/assets/images/chevron-down.svg?raw';
  import arrowRight from '$lib/assets/images/arrow-right.svg?raw';
  import star from '$lib/assets/images/star.svg?raw';
  import fork from '$lib/assets/images/fork.svg?raw';
  import phone from '$lib/assets/images/phone.svg?raw';
  import close from '$lib/assets/images/close.svg?raw';
  import viewWork from '$lib/assets/images/view-work.svg?raw';

  export let name: keyof typeof icons;
  export let className = '';

  const icons: Record<string, string> = {
    menu,
    github,
    linkedin,
    briefcase,
    envelope,
    email,
    download,
    lightbulb,
    lightning,
    location,
    'chevron-down': chevronDown,
    'arrow-right': arrowRight,
    star,
    fork,
    phone,
    close,
    'view-work': viewWork
  };
</script>

<span class="{className} inline-block [&>svg]:w-full [&>svg]:h-full [&>svg]:block" role="img" aria-hidden="true">
  {@html icons[name] ?? ''}
</span>

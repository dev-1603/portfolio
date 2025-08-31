import { c as create_ssr_component, a as subscribe, e as each, b as add_attribute, d as escape } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navItems = [
    { href: "/", label: "Home" },
    {
      href: "/work-experience",
      label: "Experience"
    },
    { href: "/projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/contact", label: "Contact" }
  ];
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-aecou_START -->${$$result.title = `<title>Debjyoti Mohapatra - Full Stack Developer</title>`, ""}<meta name="description" content="Senior Full Stack Developer specializing in Vue.js, React, TypeScript, and Node.js. Building modern web applications with cutting-edge technologies."><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico"><!-- HEAD_svelte-aecou_END -->`, ""} <div class="min-h-screen bg-white dark:bg-dark-900 text-dark-900 dark:text-white transition-colors duration-300"> <nav class="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20 dark:border-dark-600/30"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between items-center h-16"> <div class="flex-shrink-0" data-svelte-h="svelte-wj47qq"><a href="/" class="text-2xl font-bold gradient-text">DM</a></div>  <div class="hidden md:block"><div class="ml-10 flex items-baseline space-x-8">${each(navItems, (item) => {
    return `<a${add_attribute("href", item.href, 0)} class="${[
      "text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus-ring",
      ($page.url.pathname === item.href ? "text-primary-600" : "") + " " + ($page.url.pathname === item.href ? "dark:text-primary-400" : "")
    ].join(" ").trim()}">${escape(item.label)} </a>`;
  })}</div></div>  <div class="flex items-center space-x-4">   <button class="md:hidden p-2 rounded-lg bg-white/10 dark:bg-dark-800/50 hover:bg-white/20 dark:hover:bg-dark-700/50 transition-colors duration-200 focus-ring" aria-label="Toggle mobile menu" data-svelte-h="svelte-14dwghb"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div></div></div>  ${``}</nav>  <main class="pt-16">${slots.default ? slots.default({}) : ``}</main>  <footer class="bg-dark-50 dark:bg-dark-800 border-t border-dark-200 dark:border-dark-700" data-svelte-h="svelte-1khcywu"><div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8"><div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"><div class="text-sm text-dark-600 dark:text-dark-400">© 2024 Debjyoti Mohapatra. All rights reserved.</div> <div class="flex space-x-6"><a href="https://github.com/dev-1603" target="_blank" rel="noopener noreferrer" class="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"><span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a> <a href="https://linkedin.com/in/debjyoti-mohapatra/" target="_blank" rel="noopener noreferrer" class="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"><span class="sr-only">LinkedIn</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a></div></div></div></footer></div>`;
});
export {
  Layout as default
};

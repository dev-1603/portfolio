import { c as create_ssr_component, d as escape, b as add_attribute } from "../../../../chunks/ssr.js";
import { g as getLocale, t as trackMessageCall, s as setLocale } from "../../../../chunks/runtime.js";
import "../../../../chunks/state.svelte.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import { w as writable } from "../../../../chunks/index.js";
function create_updated_store() {
  const { set, subscribe } = writable(false);
  {
    return {
      subscribe,
      // eslint-disable-next-line @typescript-eslint/require-await
      check: async () => false
    };
  }
}
const stores = {
  updated: /* @__PURE__ */ create_updated_store()
};
({
  check: stores.updated.check
});
const en_hello_world = (
  /** @type {(inputs: { name: NonNullable<unknown> }) => string} */
  (i) => {
    return `Hello, ${i.name} from en!`;
  }
);
const hello_world = /* @__NO_SIDE_EFFECTS__ */ (inputs, options = {}) => {
  const locale = options.locale ?? getLocale();
  trackMessageCall("hello_world", locale);
  return en_hello_world(inputs);
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>${escape(/* @__PURE__ */ hello_world({ name: "SvelteKit User" }))}</h1> <div data-svelte-h="svelte-gi6gnh"><button${add_attribute("onclick", () => setLocale("en"), 0)}>en</button> </div><p data-svelte-h="svelte-tj50bp">If you use VSCode, install the <a href="https://marketplace.visualstudio.com/items?itemName=inlang.vs-code-extension" target="_blank">Sherlock i18n extension</a> for a better i18n experience.</p>`;
});
export {
  Page as default
};

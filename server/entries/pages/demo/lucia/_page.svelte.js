import { c as create_ssr_component, d as escape } from "../../../../chunks/ssr.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/state.svelte.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<h1>Hi, ${escape(data.user.username)}!</h1> <p>Your user ID is ${escape(data.user.id)}.</p> <form method="post" action="?/logout" data-svelte-h="svelte-nqrqdx"><button>Sign out</button></form>`;
});
export {
  Page as default
};

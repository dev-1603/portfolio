import * as server from '../entries/pages/demo/lucia/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/demo/lucia/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/demo/lucia/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.CeK1UQKt.js","_app/immutable/chunks/sIoAgI6b.js","_app/immutable/chunks/IHki7fMi.js","_app/immutable/chunks/C7E9Uk_P.js","_app/immutable/chunks/CiN5_LdC.js"];
export const stylesheets = [];
export const fonts = [];

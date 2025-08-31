import { i as invalidateSession, d as deleteSessionTokenCookie } from "../../../../chunks/auth.js";
import { fail, redirect } from "@sveltejs/kit";
import "../../../../chunks/utils.js";
import { getRequestEvent } from "@sveltejs/kit/internal/server";
const load = async () => {
  const user = requireLogin();
  return { user };
};
const actions = {
  logout: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await invalidateSession(event.locals.session.id);
    deleteSessionTokenCookie(event);
    return redirect(302, "/demo/lucia/login");
  }
};
function requireLogin() {
  const { locals } = getRequestEvent();
  if (!locals.user) {
    return redirect(302, "/demo/lucia/login");
  }
  return locals.user;
}
export {
  actions,
  load
};

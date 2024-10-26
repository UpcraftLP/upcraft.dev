import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// TODO list all socials with icons
// TODO react to ?error query parameter

export const GET: RequestHandler = () => {
  redirect(302, "/");
};

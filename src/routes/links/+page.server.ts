import { redirect } from "@sveltejs/kit";

// TODO list all socials with icons
// TODO react to ?error query parameter

export function load() {
    redirect(302, '/');
}

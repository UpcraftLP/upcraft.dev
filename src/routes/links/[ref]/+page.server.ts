import { redirect } from "@sveltejs/kit";
import type { EntryGenerator, RouteParams } from "./$types";
import { socials } from "$lib/server/socials";

export const entries: EntryGenerator = () => {
    return [
        ...Object.keys(socials).map(key => ({
            ref: key,
        })),
    ];
}

export function load({ params }: { params: RouteParams }) {
    const ref = params.ref;
    const target = socials[ref];

    if (!target) {
        redirect(302, "/links?error=notfound");
    }

    redirect(302, target);
}

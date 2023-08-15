import { redirect } from "@sveltejs/kit";
import { socials } from "../../../config/socials";

export interface UrlParams {
    ref: string;
}

export function load({params} : {params: UrlParams}) {
    const ref = params.ref;
    const target = socials[ref];
    
    if(!target) {
        throw redirect(302, "/links?error=notfound");
    }

    throw redirect(302, target);
}

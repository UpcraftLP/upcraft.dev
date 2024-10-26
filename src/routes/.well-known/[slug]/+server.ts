import { atProto } from "$lib/server/socials";
import type { RequestHandler } from "./$types";
import securityTxt from "./security.txt?raw";

type Supplier<T = void> = () => T;
interface Routes {
  [key: string]: Supplier<string>;
}

const routes: Routes = {
  "atproto-did": () => atProto.did,
  "security.txt": () => securityTxt,
};
export const GET: RequestHandler = ({ params }) => {
  if (params.slug === undefined) {
    return new Response(null, {
      status: 404,
    });
  }

  const response = routes[params.slug]();

  return new Response(response, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
};

export interface SocialsList {
    readonly [key: string]: string | undefined;
}

export function getAllSocials(): string[] {
    return Object.keys(socials);
}

export const socials: SocialsList = {
    bluesky: "https://bsky.app/profile/up-is.gay",
    //TODO discord
    github: "https://github.com/upcraftlp",
    kofi: "https://ko-fi.com/upcraftlp",
    steam: "https://steamcommunity.com/id/upcraftlp",
    twitter: "https://twitter.com/upcraftlp",
    youtube: "https://youtube.com/@upcraft_",
};

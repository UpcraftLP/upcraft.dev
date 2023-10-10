<script lang="ts">
    import {
        ArrowUpRightFromSquareOutline,
        GithubSolid,
        HeartSolid,
        TwitterSolid,
    } from "flowbite-svelte-icons";
    import SocialLink from "../components/SocialLink.svelte";
    import Meta from "../components/Meta.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Meta title="Home" />
<div class="flex flex-col items-center justify-center w-full h-screen">
    <div
        class="relative flex flex-col items-center justify-center w-11/12 m-auto bg-center bg-cover bg-[url('/images/hero-bg.gif')] h-[92vh] rounded-xl text-gray-50"
    >
        <div class="text-center font-gisha space-y-2">
            <img
                src="/images/profile_picture.webp"
                width="128"
                height="128"
                class="m-auto rounded-xl"
                alt="Profile"
            />
            <div class="m-auto text-xl font-medium text-center">
                <h1 class="text-5xl italic">Up</h1>
                <h2 class="tracking-wide">Indie game developer</h2>
                <h2 class="tracking-tight">Java, C#, Web</h2>
            </div>
            <hr class="pb-1">
            <SocialLink name="Donate on Ko-fi" target="ko-fi">
                <h3 class="text-2xl font-medium group inline-flex items-center gap-1"><HeartSolid class="w-6 h-6 text-pink-500" /><p class="group-hover:underline group-focus:underline">Support me!</p><ArrowUpRightFromSquareOutline class="w-4 h-4" /></h3>
            </SocialLink>
        </div>
        <div
            class="absolute flex flex-row items-end justify-end gap-2 text-base bottom-2"
        >
            <SocialLink name="GitHub" target="github">
                <GithubSolid
                    class="w-6 h-6 rounded-full hover:text-gray-950 focus:text-gray-950 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                />
            </SocialLink>
            <SocialLink name="Twitter / X" target="twitter">
                <TwitterSolid
                    class="w-6 h-6 hover:text-sky-400 focus:text-sky-400 focus:outline-none"
                />
            </SocialLink>
            <SocialLink name="Bluesky" target="bluesky">
                <div class="inline-flex items-center gap-1 hover:text-sky-300">
                    <p>Bluesky</p>
                    <ArrowUpRightFromSquareOutline class="w-4 h-4" />
                </div>
            </SocialLink>
        </div>
    </div>
    <Footer />
</div>

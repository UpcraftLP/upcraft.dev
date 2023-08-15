<script lang="ts">
    import { Icon } from 'flowbite-svelte-icons';
    import SocialLink from '../components/SocialLink.svelte';
    import Meta from '../components/Meta.svelte';
</script>

<Meta
    title="Home"
/>
<div class="flex items-center justify-center w-full h-screen">
    <div class="relative flex flex-col items-center justify-center w-11/12 m-auto bg-center bg-cover bg-[url('/images/hero-bg.gif')] h-[92vh] rounded-xl text-gray-50">
        <div class="text-center font-gisha">
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
        </div>
        <div class="absolute flex flex-row items-end justify-end gap-2 text-base bottom-2">
            <SocialLink name="GitHub" target="github">
                <Icon name="github-solid" class="w-6 h-6 rounded-full hover:text-gray-950 focus:text-gray-950 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none" />
            </SocialLink>
            <SocialLink name="Twitter / X" target="twitter">
                <Icon name="twitter-solid" class="w-6 h-6 hover:text-sky-400 focus:text-sky-400 focus:outline-none" />
            </SocialLink>
            <SocialLink name="Bluesky" target="bluesky">
                <div class="inline-flex items-center gap-1 hover:text-sky-300">
                    <p>Bluesky</p><Icon name="arrow-up-right-from-square-outline" class="w-4 h-4" />
                </div>
            </SocialLink>
        </div>
    </div>
</div>

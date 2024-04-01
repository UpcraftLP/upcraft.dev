<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { page } from "$app/stores";

  const hostname = $page.url.hostname;
  const baseUrl = $page.url.origin;

  export let title: string;
  export let description: string | undefined = undefined;
  export let noindex: boolean = false;

  const twitterHandle = "@upcraftlp";

  const siteName = hostname;

  const currentPageUrl: string = $page.url.toString();
  description = description || "Indie game developer, Java, C#, Web";

  const image = `${baseUrl}/images/profile_picture.webp`;
  const imageAlt = "Up's profile picture";
  const imageSize = { width: 1080, height: 1080 };

  const formattedTitle = `${title} - ${hostname}`;
</script>

<MetaTags
  {title}
  titleTemplate={`%s - ${hostname}`}
  {description}
  canonical={currentPageUrl}
  twitter={{
    cardType: "summary",
    site: twitterHandle,
    title: formattedTitle,
    description: description,
    image,
    imageAlt,
    handle: twitterHandle,
  }}
  openGraph={{
    url: currentPageUrl,
    title: formattedTitle,
    description: description,
    images: [
      {
        url: image,
        width: imageSize.width,
        height: imageSize.height,
        alt: imageAlt,
      },
    ],
    siteName: siteName,
  }}
/>
<svelte:head>
  {#if noindex}
    <meta name="robots" content="noindex" />
  {/if}
</svelte:head>

<script lang="ts">
    export let target: string;
    export let name: string | undefined | null = undefined;
</script>

<a href={`/links/${target}`} target="_blank" rel="noreferrer" title={name}>
    <slot />
</a>

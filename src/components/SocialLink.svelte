<script lang="ts">
    export let target: string;
    export let name: string | undefined | null = undefined;
    export let tabindex: number | undefined = 0;
</script>

<a href={`/links/${target}`} target="_blank" rel="noreferrer" title={name} class="group" {tabindex}>
    <slot />
</a>

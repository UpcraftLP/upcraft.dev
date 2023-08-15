<script lang="ts">
    export let target: string;
    export let name: string | undefined | null;
</script>

<a href={target} target="_blank" rel="noreferrer" title={name}>
    <slot />
</a>

<script lang="ts">
  import classNames from "classnames";

  interface Props {
    target: string;
    name?: string | undefined | null;
    tabindex?: number | undefined;
    class?: string | undefined;
    children?: import('svelte').Snippet;
  }

  let {
    target,
    name = undefined,
    tabindex = 0,
    class: className = undefined,
    children
  }: Props = $props();
  
</script>

<a
  href={`/links/${target}`}
  target="_blank"
  rel="noreferrer"
  title={name}
  class={classNames("group", className)}
  {tabindex}
>
  {@render children?.()}
</a>

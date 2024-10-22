<script lang="ts">
  import classNames from "classnames";

  export let target: string;
  export let name: string | undefined | null = undefined;
  export let tabindex: number | undefined = 0;
  let className: string | undefined = undefined;
  export { className as class };
</script>

<a
  href={`/links/${target}`}
  target="_blank"
  rel="noreferrer"
  title={name}
  class={classNames("group", className)}
  {tabindex}
>
  <slot />
</a>

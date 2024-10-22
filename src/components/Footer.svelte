<script lang="ts">
  const year = new Date().getFullYear();
  const copyrightStartYear = 2021;
  const copyrightYearFull =
    year === copyrightStartYear ? year : `${copyrightStartYear}-${year}`;
</script>

<footer
  class="flex items-center w-full mt-1 mb-auto font-normal text-center text-gray-300"
>
  <div class="flex flex-col items-center gap-2 pb-2 mx-auto sm:flex-row">
    <p>Copyright &COPY; {copyrightYearFull} Up, All rights reserved.</p>
    <a
      href="https://github.com/upcraft-dev/upcraft.dev"
      title="Source code on GitHub"
      target="_blank"
      rel="noreferrer"
      class="text-gray-400 hover:text-gray-300 focus:text-gray-300 hover:underline focus:underline"
      tabindex="0">&lt;Source&#47;&gt;</a
    >
  </div>
</footer>

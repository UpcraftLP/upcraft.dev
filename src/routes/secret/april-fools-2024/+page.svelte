<script lang="ts">
  import type { ChangeEventHandler } from "svelte/elements";

  function formSubmit(event: SubmitEvent) {
    event.preventDefault();

    // re-render, just in case
    renderImage().then(() => {
      const canvas = document.querySelector(
        "#preview-canvas"
      ) as HTMLCanvasElement;
      const form = document.querySelector("#input-form") as HTMLFormElement;
      const inputImage = form.querySelector("#input-image") as HTMLInputElement;
      const image = inputImage.files?.item(0);
      if (!image) {
        return;
      }
      const filename = image.name.replace(/\.[^/.]+$/, "");

      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `april-fools-${filename}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  async function renderPart(ctx: CanvasRenderingContext2D, part: string) {
    const img = new Image();
    const promise = new Promise<void>((resolve, reject) => {
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Failed to load ${part} image`));
    });
    img.src = part;
    await promise;
    ctx.drawImage(img, 0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  async function renderImage() {
    const form = document.querySelector("#input-form") as HTMLFormElement;
    const canvas = document.querySelector(
      "#preview-canvas"
    ) as HTMLCanvasElement;
    const inputImage = form.querySelector("#input-image") as HTMLInputElement;
    const image = inputImage.files?.item(0);
    if (!image) {
      return;
    }

    const ctx = canvas.getContext("2d")!;

    // step 0: clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // step 1: draw the uploaded icon over it, using a mask
    ctx.save();
    await renderPart(ctx, "/april-fools-2024/icon_mask.png");
    ctx.globalCompositeOperation = "source-in";
    await renderPart(ctx, URL.createObjectURL(image));
    ctx.restore();

    // step 2: draw the background layer
    ctx.save();
    ctx.globalCompositeOperation = "destination-over";
    await renderPart(ctx, "/april-fools-2024/base_layer.png");
    ctx.restore();

    // step 3: draw the foreground layer
    await renderPart(ctx, "/april-fools-2024/foreground_layer.png");
  }

  const selectImage: ChangeEventHandler<HTMLInputElement> = (event) => {
    renderImage();
  };
</script>

<div class="flex flex-col items-center justify-center w-full min-h-screen">
  <div
    class="relative flex flex-col items-center w-11/12 m-auto bg-center bg-purple-300 h-[92vh] rounded-xl text-gray-600 mt-3 xl:mt-auto"
  >
    <div class="p-12">
      <h1 class="text-5xl">April Fools 2024 Logo Generator</h1>
      <p class="text-lg">Generate your own April Fools 2024 logo!</p>
      <div class="mt-24 flex items-center justify-center w-full flex-col">
        <canvas
          id="preview-canvas"
          width="2048"
          height="2048"
          class="bg-white p-4 w-96 h-96 border border-gray-300 rounded-xl"
        >
          Your browser does not support the HTML5 canvas tag.
        </canvas>
        <form id="input-form" on:submit={formSubmit} class="w-max">
          <label for="input-image" class="block mt-4">Upload your Image:</label>
          <input
            type="file"
            id="input-image"
            name="image"
            accept="image/*"
            class="mt-2"
            required
            on:change={selectImage}
          />
          <button
            type="submit"
            class="mt-4 bg-slate-800 text-white px-4 py-2 hover:bg-gray-700"
          >
            Save!
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

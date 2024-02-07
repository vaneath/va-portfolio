<template>
  <div class="mb-10" id="typewriter"></div>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";
import { onMounted } from "vue";

onMounted(() => {
  const app = document.getElementById("typewriter");

  const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
    cursorClassName: "text-yellow-500 text-3xl font-sm",
  });

  typewriter
    .pauseFor(2500)
    .typeString(
      '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">I like <strong class="mt-4 text-3xl tracking-tight font-extrabold text-yellow-500 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">her</strong></h1>',
    )
    .pauseFor(300)
    .deleteChars(3)
    .typeString(
      '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"</h1><span class="mt-4 text-3xl tracking-tight font-extrabold text-yellow-500 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">music</span> but I got no time for <span class="text-hot-pink">love</span></h1>',
    )
    .pauseFor(300)
    .deleteChars(4)
    .typeString(
      '<p class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">it <span class="text-yellow-500">:(</span></p>',
    )
    .pauseFor(1000)
    .start();
});
</script>

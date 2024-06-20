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
    delay: "natural",
    deleteSpeed: 150,
    cursorClassName:
      "text-primary-purple dark:text-primary-yellow text-3xl font-sm",
  });

  // typewriter
  //   .pauseFor(2500)
  //   .typeString(
  //     '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-gray-600 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">I like <strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">her</strong></h1>',
  //   )
  //   .pauseFor(300)
  //   .deleteAll()
  //   .typeString(
  //     '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-gray-600 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"</h1><span class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">music</span> but I got no time for <span class="text-hot-pink">love</span></h1>',
  //   )
  //   .pauseFor(300)
  //   .deleteChars(4)
  //   .typeString(
  //     '<p class="inline mt-4 text-3xl tracking-tight font-extrabold text-gray-600 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">it <span class="text-primary-purple dark:text-primary-yellow">:(</span></p>',
  //   )
  //   .pauseFor(1000)
  //   .start();

  typewriter
    .typeString(
      `<h1 class="inline mt-4 text-xl tracking-tight font-extrabold text-gray-600 text-opacity-30 dark:text-opacity-30 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6">console.log(<strong class="mt-4 text-xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow text-opacity-30 dark:text-opacity-30 sm:mt-5 sm:leading-none lg:mt-6">brain</strong>)</h1>`,
    )
    .pauseFor(1000)
    .typeString(`<br>`)
    .pauseFor(1000)
    .typeString(
      `<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-gray-600 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"><strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">Coding</strong> is cool 💻</h1>`,
    )
    .pauseFor(2000)
    .deleteAll()
    .typeString(
      `<strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">But</strong>`,
    )
    .pauseFor(300)
    .typeString(
      `<strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">.</strong>`,
    )
    .pauseFor(300)
    .typeString(
      `<strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">.</strong>`,
    )
    .pauseFor(300)
    .typeString(
      `<strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">.</strong>`,
    )
    .pauseFor(2000)
    .deleteAll()
    .typeString(
      `<h1 class="inline mt-4 text-xl tracking-tight font-extrabold text-gray-600 text-opacity-30 dark:text-opacity-30 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6">console.log(<strong class="mt-4 text-xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow text-opacity-30 dark:text-opacity-30 sm:mt-5 sm:leading-none lg:mt-6">heart</strong>)</h1>`,
    )
    .pauseFor(1000)
    .typeString(`<br>`)
    .pauseFor(1000)
    .typeString(
      `<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-gray-600 dark:text-gray-300 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">I love <strong class="mt-4 text-3xl tracking-tight font-extrabold text-primary-purple dark:text-primary-yellow sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">music</strong> more 🎸🎵</h1>`,
    )
    .pauseFor(2000)
    .start();
});
</script>

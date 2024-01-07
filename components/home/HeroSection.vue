<template>
  <div class="relative bg-gray-800 overflow-hidden min-h-screen">
    <div class="relative">
      <main class="">
        <div
          class="mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700"
        >
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div
              class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <div class="mb-10" id="typewriter"></div>
                <BlogToggle v-if="config.blog.enabled" />
                <AboutMe v-if="config.heroSection.aboutMe" />
                <p
                  v-if="config.heroSection.workedAt.enabled"
                  class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10"
                >
                  Worked at
                </p>
                <div
                  v-if="config.heroSection.workedAt.enabled"
                  class="mt-5 w-full sm:mx-auto lg:ml-0"
                >
                  <div
                    class="flex flex-wrap space-x-1 justify-center lg:justify-start items-center md:space-x-10"
                  >
                    <div
                      v-for="(firm, index) in config.heroSection.workedAt.meta"
                      :key="index"
                    >
                      <a
                        :href="firm.url"
                        target="_blank"
                        rel="noreferrer"
                        class="flex items-center justify-center"
                      >
                        <img
                          :src="firm.src"
                          class="h-8 rounded-sm sm:h-9"
                          :alt="firm.name"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-8 px-5 sm:mt-16 lg:mt-0 lg:col-span-6">
              <div
                class="flex-shrink-0 w-full sm:mx-auto flex flex-1 items-center justify-center rounded-lg sm:overflow-hidden"
              >
                <img
                  class="rounded-md h-40 lg:h-80"
                  :src="config.image"
                  :alt="config.name"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import Typewriter from "typewriter-effect/dist/core";
import AboutMe from "../sub-components/AboutMe.vue";
const config = useAppConfig();

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
      '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">I like <strong class="mt-4 text-3xl tracking-tight font-extrabold text-yellow-500 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">her</strong></h1>'
    )
    .pauseFor(300)
    .deleteChars(3)
    .typeString(
      '<h1 class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"</h1><span class="mt-4 text-3xl tracking-tight font-extrabold text-yellow-500 sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">music</span> but I got no time for <span class="text-hot-pink">love</span></h1>'
    )
    .pauseFor(300)
    .deleteChars(4)
    .typeString(
      '<p class="inline mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl">it <span class="text-yellow-500">:(</span></p>'
    )
    .pauseFor(1000)
    .start();
});
</script>

<style scoped>
.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

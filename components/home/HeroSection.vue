<template>
  <div class="relative bg-gray-800 overflow-hidden">
    <div class="relative">
      <main class="">
        <div
          class="mx-auto py-8 max-w-7xl border-l border-r border-dashed border-gray-700"
        >
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div
              class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <BlogToggle v-if="config.blog.enabled" />
                <h1
                  class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-3xl xl:text-3xl"
                >
                  <span class="md:block" v-text="config.heroSection.title"></span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-300 sm:mt-5"
                  v-text="config.heroSection.description"
                ></p>
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
                  <div class="flex flex-wrap space-x-1 items-center md:space-x-10">
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
                <img class="rounded-md h-80" :src="config.image" :alt="config.name" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

<style scoped>
.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

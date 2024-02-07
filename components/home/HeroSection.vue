<template>
  <div class="max-w-screen-2xl mx-auto bg-gray-800 overflow-hidden">
    <div class="relative">
      <main>
        <div class="mx-auto py-8">
          <div data-aos="zoom-in" class="lg:grid lg:grid-cols-12">
            <div
              class="px-4 sm:px-6 lg:border-r lg:border-dashed lg:border-gray-700 text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <TypeWriter />
                <BlogToggle v-if="config.blog.enabled" />
                <AboutMe v-if="config.home.heroSection.aboutMe" />
                <WorkedAt v-if="config.home.heroSection.workedAt.enabled" />
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
import AboutMe from "../sub-components/AboutMe.vue";
const config = useAppConfig();
</script>

<style scoped>
.hover-arrow {
  position: relative;
  stroke-width: 1px;
}
</style>

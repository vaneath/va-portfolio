<template>
  <div
    class="relative max-w-7xl border-r border-l border-dashed border-gray-700 py-6 mx-auto min-h-screen"
  >
    <div data-aos="fade-up" class="text-center">
      <h2 class="text-2xl tracking-tight font-extrabold text-gray-200">
        blog header
      </h2>
      <p class="mt-2 px-2 max-w-2xl mx-auto text-sm leading-7 text-gray-400">
        blog subtext
      </p>
    </div>

    <div
      data-aos="zoom-in"
      class="select-none px-4 items-center justify-center sm:justify-start overflow-hidden flex pt-4"
    >
      <nav
        class="flex flex-wrap items-center justify-center flex-row space-x-2 sm:space-x-4"
        aria-label="Tabs"
      >
        <button
          class="flex text-gray-300 focus:outline-none focus:ring-transparent focus:ring-offset-transparent hover:text-hot-pink px-3 py-2 font-medium text-sm rounded-xl"
        >
          category
        </button>
      </nav>
    </div>

    <div data-aos="zoom-in" class="mt-5 gap-4 mx-4 grid max-w-none lg:grid-cols-3">
      <BlogCard />
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "blogs",
  description:
    "I'm Vaneath, and I write blogs about web development and programming.",
});
</script>

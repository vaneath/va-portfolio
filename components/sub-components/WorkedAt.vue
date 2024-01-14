<template>
  <div>
    <p
      v-if="home.heroSection.workedAt.enabled"
      class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10"
    >
      Worked at
    </p>
    <div
      v-if="home.heroSection.workedAt.enabled"
      class="mt-5 w-full sm:mx-auto lg:ml-0"
    >
      <div
        class="flex flex-wrap space-x-1 justify-center lg:justify-start items-center md:space-x-10"
      >
        <div
          v-for="(firm, index) in home.heroSection.workedAt.meta"
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
</template>

<script setup>
const home = useAppConfig().home;
</script>

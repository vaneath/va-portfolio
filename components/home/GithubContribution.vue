<template>
  <div class="grid place-items-center px-10 space-y-5">
    <p
      class="mt-8 text-sm text-center text-white lowercase tracking-wide font-semibold sm:mt-10"
    >
      github contributions
    </p>
    <div class="grid place-items-center w-full overflow-scroll">
      <div class="w-96 sm:w-full lg:w-10/12">
        <img
          class="w-full h-16 sm:h-auto"
          :src="`https://ghchart.rshah.org/${config.social.github.username}`"
          alt="Vaneath's Github chart"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

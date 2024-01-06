<template>
  <div>
    <p class="mt-8 text-sm text-white lowercase tracking-wide font-semibold sm:mt-10">
      about me
    </p>
    <p class="mt-3 text-base text-gray-300 sm:mt-5" v-text="config.description"></p>
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

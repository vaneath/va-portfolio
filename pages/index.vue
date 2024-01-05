<template>
  <div>
    <HeroSection v-if="config.heroSection.enabled" />
  </div>
</template>

<script setup>
const config = useAppConfig();
</script>

<style></style>
